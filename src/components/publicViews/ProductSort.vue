<template>
    <div class="ProductSort">
        <el-row type="flex" justify="center">
            <template v-for="(item, index) in ProductSortList">
                <el-col :key="index" :span="7">
                    <el-row>
                        <el-col :span="10" :class="{pictureShow:true,clearMargin: index==1}">
                            <img :src="pictureShowUrl_left" alt="pictureShowUrl_left" v-if="index==0">
                            <img :src="pictureShowUrl_right" alt="pictureShowUrl_left" v-else>
                        </el-col>
                        <el-col class="ProductList" :span="14">
                            <h5>{{item.ProductSortType}}</h5>
                            <ul>
                                <li v-for="(ProductType, index_1) in item.ProductList" :key="index_1">
                                     <span 
                                        @click="jumpShoppingSelect(item.ProductSortType, ProductType.type)"
                                        @mouseenter="pictureShowHandle(index, index_1)">{{ProductType.type}}
                                    </span>
                                </li>
                            </ul>
                        </el-col>
                    </el-row>
                </el-col>  
            </template>
        </el-row>
    </div>
</template>

<script>
import 'vuex'
import '../../mock/header/ProductSort.js'
export default {
    name: 'ProductSort',
    data(){
        return {
            ProductSortList: [],
            pictureShowUrl_left: '',
            pictureShowUrl_right: '',
            ProductSortNavName: ''
        }
    },
    methods: {
        pictureShowHandle(parIndex, childIndex){
            parIndex === 0 ? 
                this.pictureShowUrl_left = this.ProductSortList[0].ProductList[childIndex].ImgUrl
                :
                this.pictureShowUrl_right = this.ProductSortList[1].ProductList[childIndex].ImgUrl;

        
        },
        jumpShoppingSelect(ProductSortType, ProductType){
            this.$router.push({
                path: 'ShoppingSelect',
                query: {
                    ProductSortNavName: this.ProductSortNavName,
                    ProductSortType,
                    ProductType
                }
            })
        },
        hiddenProductSort(){
            this.$store.dispatch('hiddenProductSort', false);
        },
    },
    created(){
        this.$Axios.get('/header/productSortNav/productSort/', 'get')
            .then((response) => {
                let data = response.data;
                this.ProductSortList = data;
                //无法知道数据啥时候收到，使用nextTick保证数据收到之后，mountd已经完成，保证不会报错
                this.$nextTick(() => {
                    this.pictureShowHandle(0,0);
                    this.pictureShowHandle(1,0);
                })
            })
    },
    mounted(){
        this.ProductSortNavName = this.$store.state.ProductSortObj.ProductSortNavName;
    }
}
</script>

<style lang="less" scoped>
.ProductSort{
    position: absolute;
    padding: 20px 0;
    width: 100%;
    background: #f0ede8;

    > .el-row > .el-col {margin-right: 10px;}

    .el-row {
        min-width: 10px;

        .pictureShow{
            position: relative;
            top: 40px;
            margin-left: 40px;
            z-index: 99;
        }
        
        .ProductList {
            position: relative;
            margin-left: -40px;    
            padding: 27px 0 20px 50px;
            min-height: 300px;
            background: #fff;
            text-align: left;

            h5{ 
                font-size: 24px;
                font-weight: 200;
            }

            li{
                padding-top: 10px;
                span:hover{text-decoration: underline;cursor: pointer;}
            }
        }

        .clearMargin{
            margin-left: 0;
        }
    }
}
</style>


