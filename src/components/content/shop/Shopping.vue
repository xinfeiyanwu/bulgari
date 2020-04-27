<template>
    <div class="Shopping">
        <div class="shopOper">
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item>{{this.$route.query.ProductSortNavName}}</el-breadcrumb-item>
                <el-breadcrumb-item>{{this.$route.query.ProductSortType}}</el-breadcrumb-item>
                <el-breadcrumb-item>{{this.$route.query.ProductType}}</el-breadcrumb-item>
                <el-breadcrumb-item>{{this.$route.query.productSeriesName}}</el-breadcrumb-item>
            </el-breadcrumb>

            <el-row>
                <el-col :span="11" :offset="1" class="display">
                    <img :src="dataSource.productData.img" alt="">
                </el-col>
                <el-col :span="11" :offset="1">
                    <div class="shoppingInfo">
                        <div class="ProductType">{{dataSource.productData.ProductType}}</div>
                        <div class="productSeriesName">{{dataSource.productData.productSeriesName}}</div>
                        <div class="NO"><span>编号</span><strong>{{dataSource.productData.productNO}}</strong></div>
                        <p class="proIntroduction">{{dataSource.productData.proIntroduction}}</p>
                        <div class="Coin">&#165; {{dataSource.productData.Coin}}</div> 
                        <div class="numSelect">
                            <select  style="width: 100px;height: 33px;" v-model="productNum">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                            </select>
                        </div>
                        <div class="giftBox">
                            <div class="selPrev" v-if="GiftBoxHidden">
                                <strong @click="giftBoxSelState=true">选择礼盒定制服务</strong> 
                                <br>
                                <strong @click="NoticeState=true">敬请注意</strong>
                            </div>
                            <div class="selAfter" v-else>
                                <img src="@/assets/shop/giftBoxImg/CLASSIC3.png" alt="">
                                <span>节日经典礼盒</span>
                                <span class="modify" @click="modifyHandle">修改</span>
                            </div>
                        </div>
                        <div 
                            @click="addShopCart(dataSource.productData)"
                            class="addShoppingCart">添加到购物袋</div>
                        <div class="bookanappointment"  @click="selectServe=true">精品店服务</div>
                        <div class="findStore">
                            <a href="" title="寻找附近店铺">寻找附近店铺</a>
                        </div>
                        <div class="linkWe">
                            联系我们
                            <i class="el-icon-message"></i>
                            <i class="el-icon-phone-outline"></i>
                            <i class="el-icon-chat-dot-square"></i>
                        </div>
                    </div>
                </el-col>
            </el-row>
        </div>

        <div class="shoppingContent">
            <el-tabs v-model="tabs1">
                <el-tab-pane label="描述" name="detail">
                    <h3>{{dataSource.productData.detail.title}}</h3>
                    <p>{{dataSource.productData.detail.detailWord}}</p>
                </el-tab-pane>
                <el-tab-pane label="宝格丽配饰" name="Acc">
                    <p>{{dataSource.productData.Acc}}</p>
                </el-tab-pane>
            </el-tabs>
        </div>
        
        <div class="relevCont">
            <el-tabs v-model="tabs2" class="relevContPadding">
                <el-tab-pane label="相关产品" name="relaevPro">
                    <div class="swiper-container Banner1" style="width: 80%;">
                        <div class="swiper-wrapper">
                            <div 
                                class="swiper-slide"
                                v-for="(item,index) in dataSource.relevCont.relevContList"  
                                :key="index">
                                <img :src="item.img" alt="">
                                <div class="itemDetail" @mouseleave="leaveDetail($event)" @mouseenter="lookDetail($event)">
                                    <div>
                                        <h4 class="itemName">
                                            <router-link to="/">
                                                {{item.productSeriesName}}<br>
                                                {{item.ProductType}}
                                            </router-link>
                                        </h4>
                                        <p><span>编号</span> <strong>{{item.relevNO}}</strong></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="swiper-button-prev relaevPro-prev" style="outline: none;left: 74px;"></div>
                    <div class="swiper-button-next relaevPro-next" style="outline: none;right: 72px;"></div>
                </el-tab-pane>
                <el-tab-pane label="更多种类" name="moreSort">
                    <div 
                        class="moreSort">
                        <div class="moreSortItem" 
                            v-for="(item,index) in dataSource.relevCont.moreSortList" 
                            :key="index">
                            <img :src="item.img" alt="">
                            <div class="itemDetail" @mouseleave="leaveDetail($event)" @mouseenter="lookDetail($event)">
                                <div>
                                    <h4 class="itemName">
                                        <router-link to="/">
                                            {{item.productSeriesName}}<br>
                                            {{item.ProductType}}
                                        </router-link>
                                    </h4>
                                    <p><span>编号</span> <strong>{{item.moreNO}}</strong></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </el-tab-pane>
            </el-tabs>
        </div>

        <div class="latelyLook">
            <div class="latelyLookTitle">
                <h3>最近浏览</h3>
            </div>
            
            <div class="latelyLookCont">
                <div class="swiper-container Banner2" style="width: 80%;">
                    <div class="swiper-wrapper">
                        <div 
                            class="swiper-slide"
                            v-for="(item,index) in dataSource.latelyLookList"  
                            :key="index">
                            <img :src="item.img" alt="">
                            <div class="itemDetail" @mouseleave="leaveDetail($event)" @mouseenter="lookDetail($event)">
                                <div>
                                    <h4 class="itemName">
                                        <router-link to="/">
                                            {{item.productSeriesName}}<br>
                                            {{item.ProductType}}
                                        </router-link>
                                    </h4>
                                    <p><span>编号</span> <strong>{{item.latelyNO}}</strong></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="swiper-button-prev latelyLook-prev" style="outline: none;left: 74px;"></div>
                <div class="swiper-button-next latelyLook-next" style="outline: none;right: 72px;"></div>
            </div>

            <div class="MoreGiftBox">
                <div class="MoreGiftBoxLeft">
                    <router-link to="/"><img src="@/assets/shop/relevShop/cms_vis_txt_img_desktop_6253_v_4.jpg" alt=""></router-link>
                </div>
                <div class="MoreGiftBoxRight">
                    <div>
                        <h5>每个作品均附有独立的精美包装</h5>
                        <router-link to="/" class="konwMore">了解更多</router-link>
                    </div>
                </div>
            </div>
        </div>

        <!-- //弹窗 -->
        <el-dialog
            :visible.sync="giftBoxSelState"
            width="53%"
            center>

            <div class="giftSelBox">
                <div class="giftDisplay">
                        <img :src="giftDisplaySrc || require('@/assets/shop/giftBoxImg/CLASSIC1.png')" alt="">
                </div>
                <div class="giftSel">
                    <img 
                        @click="selectGiftBox($event)"
                        class="selected"
                        ref="giftBox1"
                        data-giftBoxTpye="giftBoxTpye1"
                        src="@/assets/shop/giftBoxImg/CLASSIC1.png" alt="">
                    <img
                        @click="selectGiftBox($event)" 
                        ref="giftBox2"
                        data-giftBoxTpye="giftBoxTpye2"
                        src="@/assets/shop/giftBoxImg/CLASSIC2.png" alt="">
                    <img
                        @click="selectGiftBox($event)" 
                        ref="giftBox3"
                        data-giftBoxTpye="giftBoxTpye3"
                        src="@/assets/shop/giftBoxImg/CLASSIC3.png" alt="">
                </div>
            </div>

            <span slot="footer" class="dialog-footer">
                <button class="submitGiftBox" @click="selGiftHandle">定制完成</button>
            </span>
        </el-dialog>
        <el-dialog
            title="宝格丽礼盒定制服务须知"
            :visible.sync="NoticeState"
            width="52%"
            center>
            <h1><img src="../../../assets/header/stars.png" alt="欢迎来到宝格丽的世界"></h1>
            <div class="text">
                <p><i>1.</i> <span>宝格丽礼盒服务仅适用于部分珠宝、皮具、配饰、手表类产品，不适用于（1）香水类产品、（2）非常规尺寸的珠宝、皮具、配饰类产品、以及（3）其他有专配包装的产品。请您注意，尽管您已完成下单流程，但考虑实际作品的特性（如易褶皱）或者作品的尺寸（如大于礼盒尺寸）或者其他特殊原因，可能存在实际无法适用礼盒的情形，敬请谅解。宝格丽顾客服务中心或在线客服会尽快通知您。</span></p>
                <p><i>2.</i><span> 宝格丽礼盒服务将提供日常主题礼盒（诸如生日、爱情等），并且将根据不同季节（或节日）提供有限数量的季节（或节日）主题礼盒。</span></p>
                <p><i>3.</i> <span>宝格丽礼盒服务提供礼盒示例图，方便您参考和选择。请您以实物礼盒效果为佳。</span></p>
                <p><i>4.</i> <span>任何疑问请您随时致电宝格丽顾客服务中心400-000-6699，或联系在线客服。</span></p>
            </div>
        </el-dialog>
        <el-dialog
            title="请选择精品店服务"
            :visible.sync="selectServe"
            width="30%"
            center>
            <h1><img src="../../../assets/header/stars.png" alt="欢迎来到宝格丽的世界"></h1>
            <button class="toStoreshop">到店自取</button>
            <button class="appointment">预约到店</button>
        </el-dialog>
    </div>
</template>

<script>
import 'vuex'
import Swiper from "swiper"
import "../../../../node_modules/swiper/css/swiper.css"
import "../../../../node_modules/swiper/js/swiper.min.js"
import '@/mock/shop/shopping.js'
export default {
    name: 'Shopping',
    data(){
        return {
            giftBoxSelState: false,
            NoticeState: false,
            selectServe: false,
            giftDisplaySrc: "", //选择礼盒后图片展示
            GiftBoxType: 'giftBoxTpye1', //记录下礼盒的类型
            GiftBoxHidden: true,
            tabs1: 'detail',    
            tabs2: 'relaevPro',
            // 页面dataSource
            dataSource: {
                productData: {
                    ProductType: '',
                    productSeriesName: '',
                    productNO: 289101,
                    proIntroduction: '',
                    Coin: '',
                    detail: {
                        title: '',
                        detailWord: ''
                    },
                    Acc: ''
                },
                relevCont: {
                    relevContList: [
                        {
                            img: '',
                            ProductType: '',
                            productSeriesName: '',
                            relevNO: 0,
                        },
                    ],
                    moreSortList: [
                        {
                            img: '',
                            ProductType: '',
                            productSeriesName: '',
                            moreNO: 0,
                        },
                    ]
                },
                latelyLookList: [
                    {
                        img: '',
                        ProductType: '',
                        productSeriesName: '',
                        latelyNO: 0,
                    },
                ]
            },
            productNum: 1, //产品数量
        }
    },
    methods: {
        //选择礼盒
        selectGiftBox(ev){
            this.giftDisplaySrc = ev.target.src;
            this.GiftBoxType = ev.target.dataset.giftboxtpye;
            
            for(let v in this.$refs){
                this.$refs[v].className = '';
            }
            ev.target.className == "" ? ev.target.className = "selected": ev.target.className = "";
        },
        selGiftHandle(){
            this.giftBoxSelState = false;
            this.GiftBoxHidden = false;
        },
        modifyHandle(){
            this.giftBoxSelState = true;
            this.GiftBoxHidden = true;
        },
        lookDetail(ev){
           ev.target.className += ' opacity';
        },
        leaveDetail(ev){
           ev.target.className = 'itemDetail';
        },
        addShopCart(payload){
            //判断购物车是否已经存在之前的产品，存在则累加
            const shoppingCartList = this.$store.state.shoppingCart.shoppingCartList;
            for(let i in shoppingCartList){
                if(payload.productNO==shoppingCartList[i].productNO) {       
                    if(shoppingCartList[i].productNum >= 3){
                        this.$message({
                            type: 'warning',
                            message: '您存放购物车的商品已超出限购总数！',
                            offset: 200
                        })
                        return ;
                    }
                    else{  
                        this.$store.dispatch('accuProNumReq', {
                            productNum: this.productNum,
                            productNO: shoppingCartList[i].productNO
                        });
                        return ;
                    }
                }
            }
            //正常添加产品到购物车
            this.$store.dispatch('addShoppingCartReq', this.transformOrderData(payload));
        },
        //处理产品数据
        transformOrderData(payload){
            //处理数据结果,深度复制
            let orderData = JSON.parse(JSON.stringify(payload));   
            delete orderData.detail;
            delete orderData.proIntroduction;
            delete orderData.Acc;
            orderData['productNum'] = Number(this.productNum);  
            orderData['isSel'] = true;     //在购物车里默认不选中
            console.log(orderData);
            return orderData;
        }
    },
    mounted(){
        this.$Axios.get(`/shopping?productNO=${this.$route.query.productNO}`)
            .then(res => {
                this.dataSource = res.data;
                //console.log(this.dataSource);
            })
            .then(()=>{
                const Banner1 = new Swiper('.Banner1', {
                    slidesPerView: 3,
                    spaceBetween: 30,
                    navigation: {
                        nextEl: '.relaevPro-prev',
                        prevEl: '.relaevPro-next',
                    },
                    //滑到最后一个隐藏前进按钮
                    on: {
                        slideChangeTransitionEnd: function(){

                            if(this.isEnd){
                                this.navigation.$nextEl.css('display','none');
                            }else{
                                this.navigation.$nextEl.css('display','block');  
                            }

                            if(this.isBeginning){
                                this.navigation.$prevEl.css('display','none');
                            }else{
                                this.navigation.$prevEl.css('display','block');  
                            }
                        },
                    },
                });
                const Banner2 = new Swiper('.Banner2', {
                    slidesPerView: 3,
                    spaceBetween: 30,
                    navigation: {
                        nextEl: '.latelyLook-prev',
                        prevEl: '.latelyLook-next',
                    },
                    //滑到最后一个隐藏前进按钮
                    on: {  
                        slideChangeTransitionEnd: function(){
                            if(this.isEnd){
                                this.navigation.$nextEl.css('display','none');
                            }else{
                                this.navigation.$nextEl.css('display','block');  
                            }

                            if(this.isBeginning){
                                this.navigation.$prevEl.css('display','none');
                            }else{
                                this.navigation.$prevEl.css('display','block');  
                            }
                        },
                    },
                });
            })
    },
    // beforeRouteEnter(to, from, next){
    //     if(to.path=='/userOper/Login/'){
    //         next();
    //     }
    //     else{
    //         let token = localStorage.getItem('Authorization');
    //         if(token===null||token===''){
    //             next('/userOper/Login/');
    //         }else{
    //             next();
    //         }
    //     }
    // }
}
</script>

<style lang="less">
//public class
.Btn() {
    background: #fff;
    color: #000;
    border: 1px solid #000;;
    cursor: pointer
}
.BtnHover() {
    background: #000;
    color: #fff;
}
.itemDetail{
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background-color: #2c2c2c;
    opacity: 0;
    filter: Alpha(opacity=0);
    .itemName{
        text-align: center;
        a{
            color: #fff;
            font-size: 22px;
        }
    }
    p{
        word-spacing: 4px;
        padding-top: 35px;
        text-align: center;
    }
}
.opacity{
    opacity: 1;
    filter: Alpha(opacity=100);
}

.Shopping{
    padding-top: 160px;
    .shopOper{
        background: #f0ede8;
        padding: 30px 0 60px 30px;

        .display img{
            padding-top: 23%;
        }
        
        .shoppingInfo{
            width: 440px;
            text-align: center;
            .ProductType{
                color: gray;
            }
            .productSeriesName{
                font-size: 36px;
                font-weight: 100;
                letter-spacing: 6px;
                padding-top: 5px;
            }
            .NO{
                span{
                    padding-right: 10px;
                    color: #6a6a6a;
                }
                strong{
                    color: #6a6a6a;
                }
            }
            .proIntroduction{    
                padding-top: 24px;
                font-size: 18px;
                font-weight: 300;
                color: #535353cc;
            }
            .Coin{
                word-spacing: 4px;
                padding: 10px;
            }
            .numSelect{
                padding: 20px 0;
            }
            .giftBox{
                padding: 10px;
                height: 40px;
                border-top: 1px solid #000;
                border-bottom: 1px solid #000;
                .selPrev{
                    strong{
                        text-decoration: underline;
                        cursor: pointer;
                    }
                }
                
                .selAfter{
                    position: relative;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    img{
                        width: 40px;
                        height: 40px;
                    }
                    .modify{
                        position: absolute;
                        right: 0;
                        cursor: pointer;
                    }
                }
            }
            .addShoppingCart{
                margin-top: 20px;
                max-width: 440px;
                padding: 10px;    
                background: #000;
                color: #fff;
                cursor: pointer;
            }
            .bookanappointment{    
                margin-top: 10px;
                padding: 10px;
                border: 1px solid #000;
                color: #7f7f7f;
                cursor: pointer;
            }
            .bookanappointment:hover {
                background: #000;
                color: #fff;
            }
            .findStore{
                color: #000;
                font-size: 14px;
                padding-top: 10px;
                a{
                    text-decoration: underline;
                }
            }
            .linkWe{
                margin-top: 30px;
                display: flex;    
                align-items: flex-start;
                justify-content: center;
                span{
                    display: inline-block;
                    font-size: 12px
                }
                i{
                    display: inline-block;
                    font-size: 30px;
                    margin-left: 16px;
                    cursor: pointer;
                }
            }
        }
    }

    .shoppingContent, .relevCont{
        .el-tabs__nav-scroll {
            display: flex;
            justify-content: center;
            padding-top: 30px;
            .el-tabs__nav{
                .el-tabs__item {
                    padding: 0 50px;
                    color: #ccc;
                }
                .el-tabs__active-bar {
                    background: #ccc;
                }

                .active{
                    background: #000;
                    color: #000;
                }
            }
        }
        .el-tabs__nav-wrap::after{
            height: 0;
        }
        
    }

    .shoppingContent{
        border-bottom: 1px solid #ccc;
        
        .el-tabs__content{
            .el-tab-pane{
                text-align: center; 
                h3{
                    font-size: 20px;
                    font-weight: 400;
                    padding: 20px 0 30px;
                }

                p{
                    font-size: 17px;
                    padding: 0 15% 29px;
                    line-height: 1.8;
                }
            }
        }
    }

    .relevContPadding{
        padding-top: 15px;
        .el-tabs__content{
            padding-top: 30px;
            .swiper-container{
                .swiper-slide{
                    position: relative;
                    background: #f0ede8;
                    cursor: pointer;
                }
            }
            .relaevPro-next{
                display: none;
            }

            .moreSort{
                display: flex;
                margin: 0 auto;
                width: 80%;
                .moreSortItem{
                    margin-right: 30px;
                    position: relative;
                    flex-grow: 1;
                    background: #f0ede8;
                    cursor: pointer;
                }
            }
        }
    }

    .latelyLook{
        .latelyLookTitle{
            text-align: center;
            h3{
                padding: 40px 0 30px;
            }
        }

        .latelyLookCont{
            position: relative;
            .swiper-slide{
                background: #f0ede8;
            }
            .latelyLook-next{
                display: none;
            }
        }

        .MoreGiftBox{
            display: flex;
            align-items: center;
            .MoreGiftBoxLeft{
                flex-grow: 1;
                max-width: 50%;
                img{
                    width: 100%;
                }
            }
            .MoreGiftBoxRight{
                flex-grow: 1;
                text-align: center;
                h5{
                    font-size: 20px;
                }
                .konwMore{
                    padding: 10px 100px;
                    border: 1px solid #000;
                    display: inline-block;
                    margin-top: 20px;
                }
                .konwMore:hover{
                    background: #000;
                    color: #fff;
                }
            }
        }
    }

    //弹窗
    .el-dialog {
        .el-dialog__body {
            padding: 0 40px 40px !important;
            h1 {   
                margin: 16px 0;
                position: relative;
                border-bottom: 1px solid #ae9477;
                font-size: 30px;
                img{
                    position: absolute;
                    width: 27px;
                    height: 27px;
                    left: 50%;
                    bottom: -15px;
                    transform: translatex(-50%);
                }
            }

            .text{
                p{padding-bottom: 16px;}
            }

            .giftSelBox{
                display: flex;
                justify-content: center;
                img{
                    background: #f0ede8;
                    display: block;
                    height: 100%;
                }
                
                .giftDisplay{
                    width: 294px;
                    height: 344px;
                }
                .giftSel{    
                    margin: 0 0 6px 6px;
                    width: 150px;
                    height: 110px;
                    img{
                        margin-bottom: 4px;
                        border: 1px solid transparent;
                        cursor: pointer;
                    }
                }
                .selected{
                    border: 1px solid #ae9477 !important;
                }
            }

            .toStoreshop, .appointment{
                margin: 0 auto 10px;
                display: block;
                padding: 10px 100px;
                .Btn()
            }
            .toStoreshop{
                margin-top: 54px;
            }
        }
        .el-dialog__footer{
            .submitGiftBox{
                padding: 10px 50px; 
                background: #000;
                color: #fff;
                border: none;
                cursor: pointer;
            }
        }
    }
}

</style>


