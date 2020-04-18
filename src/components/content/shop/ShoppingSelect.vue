<template>
  <div class="ShoppingSelect">
    <div class="shopDescription">
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>{{this.$route.query.ProductSortNavName}}</el-breadcrumb-item>
            <el-breadcrumb-item>{{this.$route.query.ProductSortType}}</el-breadcrumb-item>
            <el-breadcrumb-item>{{this.$route.query.ProductType}}</el-breadcrumb-item>
        </el-breadcrumb>
        <img src="../../../assets/shop/accessory/Serpenti/Banner.jpg" alt="">
        <h2>{{SeriesProduct.Description.title}}</h2>
    </div>

    <p>{{SeriesProduct.Description.description}}</p>

    <div class="productShop">
        <div class="productScreen">
        <el-row>

            <el-col :span="14" style="display: flex;align-items: flex-start;">
            <span>筛选条件:</span>
            <div class="productScreenBox">
                <template v-for="(item ,index) in menuDataList">
                <Menu 
                    :menuData="item"
                    :key="index"/>
                </template>
            </div>
            </el-col>
            <el-col :span="10" style="text-align: right;cursor: pointer;">
            <span>更多</span>
            <label for="onlineSale">
                <input type="radio" id="onlineSale" name="saleType" value="onlineSale" v-model="saleType">
                线上销售
            </label>
            <label for="seeAll">
                <input type="radio" id="seeAll" name="saleType" value="seeAll" v-model="saleType">
                查看全部
            </label>
            <span>28 个产品</span>
            </el-col>

        </el-row>
            
        <div class="Screened">
            <span>产品系列: </span>
        </div>
        </div>

        <div class="productDisplay"
            v-loading="Proloading"
            element-loading-text="拼命加载中"
            element-loading-spinner="el-icon-loading">
            <template v-for="(item, i) in SeriesProduct.AllProductList">
                <div class="shopCategory" :key="i">
                    <p>{{item.productType}}</p>
                    
                    <el-row>
                        <template v-for="(productList, j) in item.productList">
                            <el-col 
                            :span="6" 
                            :key="j" 
                            v-show="j < seeMoreLimit[i]"
                            >
                                <div 
                                    :class="{
                                        'shopCategoryItem':true,
                                        'clearMargin': j+1%4==0&&j!=0
                                    }" 
                                >   
                                    <img 
                                        class="cover" 
                                        :src="productList.ImgUrl" :alt="productList.type">
                                    <div 
                                        class="shopingInfo"
                                        ref="shopingInfo"
                                        @mouseenter="ShoppingInfoShow($event)" 
                                        @mouseleave="ShoppingShow($event)"
                                    >
                                        <img 
                                            @click="inventory"
                                            class="inventory" src="../../../assets/header/inventory.png" alt="收藏">
                                        <div 
                                            class="shoppingInfo">
                                            <div class="jump" @click="jumpShopping(productList.productSeriesName,productList.productNO)">
                                                <p>{{productList.productType}}</p>
                                                <h5>{{productList.productSeriesName}}</h5>
                                            </div>
                                            <strong>&#165; {{productList.cost}}</strong>
                                        </div>

                                        <div class="search" @click="jumpShopping(productList.productSeriesName,productList.productNO)">探索</div>
                                    </div>
                                </div>
                            </el-col>

                            <el-col 
                                class="searchMore" 
                                :key="j+'_1'" 
                                v-if="j+1===seeMoreLimit[i] && seeMoreLimit[i] <= 8">
                                <button 
                                    @click="seeMoreProduct(item.productList.length, i)"
                                    class="searchMoreBtn">查看更多({{item.productList.length-8}})
                                </button>
                            </el-col>

                        </template>
                    </el-row>
                </div>

            </template>
        </div>
        

        <!-- 弹窗 -->
        <el-dialog
            title="注意"
            :visible.sync="dialogVisible"
            width="30%">
            <span>请先登录！</span>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">否</el-button>
                <el-button type="primary" @click="jumpLogin">登录</el-button>
            </span>
        </el-dialog>
    </div>
</div>
</template>

<script>
import Menu from'./Menu'
import Vue from 'vue'
import '@/mock/shop/SeriesProduct.js'
import '@/mock/shop/menuDataList.js'
import { setTimeout } from 'timers';
export default {
    name: "ShoppingSelect",
    components: {Menu},
    data(){
        return {
            saleType: 'seeAll',
            menuDataList: [],
            SeriesProduct: {
              Description: {
                  title: '',
                  description: '',
              },
            },
            dialogVisible: false,
            seeMoreLimit: [],    //设置查看更多商品的限制,
            Proloading: true
        }
    },
     methods: {
        ShoppingInfoShow(event){
          event.target.className += ' opacity'
        },
        ShoppingShow(event){
          event.target.className = 'shopingInfo';
        },
        seeMoreProduct(limit,i){
          Vue.set(this.seeMoreLimit, i, limit)
          //console.log(i, limit)
        },
        jumpShopping(productSeriesName,productNO){
            this.$router.push({
                path:'/Shopping',
                query: {
                        ProductSortNavName: this.$route.query.ProductSortNavName,
                        ProductSortType: this.$route.query.ProductSortType,
                        ProductType: this.$route.query.ProductType,
                        productSeriesName,
                        productNO
                    }
            })
        },
        inventory(){
            const token = localStorage.getItem('Authorization');
            if(token===null||token===''){
                this.dialogVisible = true;
            }
            else{
                this.$message({
                    message: '收藏成功!',
                    type: 'success',
                    offset: 200,
                })
            }
        },
        jumpLogin(){
            this.$router.push('/userOper/login');
        }
    },
    created(){
        setTimeout(()=>{
            this.$Axios.get('/ShoppingSelect/menuDataList')
            .then((responese) => {
                this.menuDataList = responese.data;
            })
            
            this.$Axios.get('/ShoppingSelect/SeriesProduct')
            .then((responese) => {
                let data = responese.data;
                
                data.AllProductList.forEach((v,i) => {
                    v.productList.forEach((vv,j) => {
                        data.AllProductList[i].productList[j].ImgUrl = require(`../../../assets/shop/accessory/Serpenti/productDisplay/${vv.ImgUrl}.png`);
                    })
                });

                //设置限制限制商品的个数
                for(let i=0;i<data.AllProductList.length;i++){
                    this.seeMoreLimit[i] = 8;
                }

                this.SeriesProduct = {...this.SeriesProduct, ...data};
                this.Proloading = false;
            })
        },2000)
    },
    mounted(){
        this.$store.dispatch('hiddenProductSort', false);
    },
    watch: {
        saleType: function(){
            console.log(this.saleType)
        }
    }
}
</script>

<style lang="less" scoped>
.ShoppingSelect {
    margin-top: 176px;

    .shopDescription {
        position: relative;

        img{
            display: block;
        }

        .el-breadcrumb {
            position: absolute;
            padding: 20px 0 0 30px;
        }
        h2 {
            position: absolute;
            bottom: 18px;
            width: 100%;
            font-size: 30px;
            text-align: center;
            color: #fff;
        }
    }

    > p {
        padding: 50px 25%;
        margin: auto;
        text-align: center;
        background: #f0ede8;
    }

    .productShop {
        .productScreen {
            padding: 10px 34px;
            span, label{
                display: inline-block;
                padding: 10px 20px;
                cursor: pointer;
            }
            .productScreenBox{
                display: inline-block;
                max-width: 80%;
            }
            input{cursor: pointer;}
        }
    }

    .productDisplay{
        margin: 50px 80px;
        min-height: 100px;
        .shopCategory{
            p{
                padding-bottom: 30px;
                font-size: 40px;
                color:#0009;
                text-align: center;
            }

            .shopCategoryItem{
                margin: 0 20px 20px 0;
                background: #f0ede8;
                position: relative;
                z-index: 10;

                .shopingInfo {
                    display: flex;
                    align-items: center;
                    position: absolute;
                    top: 0;
                    width: 100%;
                    height: 100%;
                    background: #2c2c2c;
                    text-align: center;
                    opacity: 0;
                    filter: Alpha(opacity=0);
                
                    .inventory {
                        position: absolute;
                        top: 10px;
                        right: 10px;
                        width: 20px;
                        height: 20px;
                        padding: 20px;
                        border: 1px solid #ccc;
                        cursor: pointer;
                    }
                    
                    .shoppingInfo {
                        width: 100%;
                        .jump{
                            text-decoration: #fff underline;
                            cursor: pointer;
                            p {
                                font-size: 16px;
                                color: #fff;
                            }
                            h5 {
                                font-size: 30px;
                                font-weight: 300;
                                color: #fff;
                            }
                        }
                        strong{
                            color: #fff;    
                            word-spacing: 4px;    
                            padding-top: 6px;
                        }
                    }
                    a:hover{
                        p, h5{
                            text-decoration: underline;
                        }
                    }

                    .search{
                        position: absolute;
                        bottom: 0;
                        width: 100%;
                        padding: 20px 0;
                        color: #fff;
                        font-size: 12px;
                        cursor: pointer;
                        background: #000;
                    }
                }

                .opacity{
                    opacity: 1;
                    filter: Alpha(opacity=100);
                }
            }

            .clearMargin{margin:0;}

            .searchMore{
                text-align: center;
                .searchMoreBtn{
                    border: 1px solid #000;
                    padding: 6px 20px;
                    background: #fff;
                }
                .searchMoreBtn:hover{
                    color: #fff;
                    background: #000;
                    cursor: pointer;    
                }
            }
        }
    }

    // 从dialog开始击穿deep才可以修改dialog
    /deep/ .el-dialog  {
        text-align: center;
        .el-dialog__footer{
            text-align: center;
        }
    }
}
</style>


