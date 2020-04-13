<template>
    <div id="header" @mouseleave="hiddenProductSort">

     <el-row id="headerNav">
        <el-col 
            :span="8"
            id="headerLeft">
            <el-row>
                <el-col :span="4">
                    <router-link   to="/headerPlugIn/SearchShop"  class="linkWe">
                        <img src="../../assets/header/searchShop.png"  title="查找商店" alt="查找商店">
                    </router-link>
                </el-col>
                <el-col :span="4">
                    <router-link   to="/headerPlugIn/LinkWe/"  class="linkWe">
                        <img src="../../assets/header/linkWe.png"  title="联系我们" alt="联系我们">
                    </router-link>
                </el-col>
                <el-col :span="4">
                    <router-link   to="/headerPlugIn/Serve/"  class="serve">
                        <img src="../../assets/header/serve.png"  title="服务" alt="服务">
                    </router-link>
                </el-col>
                <el-col :span="4">
                     <img @click="isShowSearch" src="../../assets/header/search.png"  title="搜索" alt="搜索">
                </el-col>
                <el-col :span="7">
                    <input type="text" class="search" v-show="ShowSearchState">
                </el-col>
            </el-row>
        </el-col>
        <el-col 
            :span="6"
            :offset="10"
            id="headerRight">
            <el-row>
                <el-col 
                    :span="8" 
                    style="position: relative;padding-right: 4px;"
                    @mouseenter.native="showLoginModel">
                    <router-link to="/userOper/Login/">登录</router-link> /
                    <router-link to="/userOper/register/">注册</router-link>
                    <LoginModel  v-if="this.$store.state.loginModel.loginModelState"/>
                </el-col>
                <el-col :span="8">
                    <router-link to="/">
                        <img src="../../assets/header/inventory.png" title="我的愿望清单">
                    </router-link>
                </el-col>
                <el-col :span="8">
                    <router-link to="/">
                    <el-badge value="12" class="item">
                        <img src="../../assets/header/shoppingCart.png">
                    </el-badge>  
                    </router-link>
                </el-col>
            </el-row>
        </el-col>
     </el-row>

     <el-row type="flex" justify="center" id="Logo">
         <el-col :span="10">
             <router-link to="/"><img src="../../assets/header/logo.png" alt="bulgari"></router-link>
         </el-col>
     </el-row>

     <div id="contentNav">
         <template v-for="(item,index) in contentNav" >
             <router-link 
                v-if="item.path"
                :key="index"
                :to="item.path">
                {{item.name}}
            </router-link>

            <span 
                v-else
                :key="index"
                @click="ShowProductSort(item.type, item.name)"
                :to="item.path">
                {{item.name}}
            </span>
         </template>
         <ProductSort v-if="this.$store.state.ProductSort.ProductSortState"/>
     </div>
   </div>
</template>
<script>
import 'vuex'
import '../../mock/header/productSortNav.js'
import LoginModel from "../content/userOper/LoginModel.vue"
import ProductSort from './ProductSort.vue'
export default {
    name: 'Header',
    components: {LoginModel,ProductSort},
    data(){
        return {
            contentNav: [],
            ShowSearchState: false,
        }
    },
    methods:{
        showLoginModel(){
            this.$store.dispatch('showLoginModel')
        },
        isShowSearch(){
            this.ShowSearchState=!this.ShowSearchState;
        },
        ShowProductSort(type, name){
            this.$store.dispatch('showProductSort', {
                ProductSortObj: {
                    ProductSortNavType: type,
                    ProductSortNavName: name,
                }
            });
        },
        hiddenProductSort(){
            this.$store.dispatch('hiddenProductSort');
        }
    },
    created(){
        this.$Axios.get('/header/productSortNav/')
            .then((response) => {
                let data = response.data;
                this.contentNav = data;
                //console.log(response);
            })
    },
    mounted(){
        console.log(this.$store.state)
    }
}
</script>
<style lang="less" scoped>
@padding: 10px 0;
#header{
  position: fixed;
  top: 0;
  width: 100%;
  border-bottom: 1px solid #e6e6e6;
  background: #fff;
  z-index: 1000;

  #headerNav{
    #headerLeft{
        padding: 10px 0 10px 10px;
    }
    #headerRight{
        padding: 10px 0;
    }

    .el-row .el-col{
        // padding: 2px 23px;
        border-right: 1px solid #e0e0e0;
        font-size: 10px;
        text-align: center;
        a{
            font-size: 14px; 
        }
        a:hover{
            text-decoration: underline;
        }
        img{
            width: 24px;
            height: 24px;
            cursor: pointer;
        }
        
        .search{
            height: 24px;
            width: 100%;
            outline: none;
            border: none;
            border-bottom: 1px solid #ccc;
            font-size: 14px;
        }
    }
    .el-row .el-col:last-child,
    .el-row .el-col:nth-child(4){
        border: none;
    }
}
//   #Logo{
//      img{
//         width: 100%;
//         height: 100%;
//      }
//   }
  #contentNav{
      position: relative;
      text-align: center;
      padding: 20px 0;
      a, span{
        padding-right: 20px;
        font-size: 14px;
        cursor: pointer;
      }
      a:first-child{
          color: #cba177;
      }
  }
}

</style>


