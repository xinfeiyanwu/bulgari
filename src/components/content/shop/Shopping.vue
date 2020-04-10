<template>
    <div class="Shopping">
        <div class="shopOper">
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item>{{this.$route.params.ProductSortNavName}}</el-breadcrumb-item>
                <el-breadcrumb-item>{{this.$route.params.ProductSortType}}</el-breadcrumb-item>
                <el-breadcrumb-item>{{this.$route.params.ProductType}}</el-breadcrumb-item>
                <el-breadcrumb-item>{{this.$route.params.productSeriesName}}</el-breadcrumb-item>
            </el-breadcrumb>

            <el-row>
                <el-col :span="10" :offset="3">
                    <img src="" alt="" class="display">111
                </el-col>
                <el-col :span="11">
                    <div class="shoppingInfo">
                        <div class="ProductType">钱包</div>
                        <div class="productSeriesName">BVLGARI BVLGARI男士系列</div>
                        <div class="NO"><span>编号</span><strong>289101</strong></div>
                        <p class="proIntroduction">“BVLGARI BVLGARI”炭黑钻石色和鲜绿色粒面小牛皮男士拉链钱夹，炭黑钻石色小羊皮内衬。经典标识配饰，采用镀钯黄铜材质。</p>
                        <div class="Coin">&#165; 5,100</div> 
                        <div class="numSelect">
                            <select name="" id="">
                                <option value="">1</option>
                                <option value="">2</option>
                                <option value="">3</option>
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
                        <div class="addShoppingCar">添加到购物袋</div>
                        <div class="bookanappointment">精品店服务</div>
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

                    <div class="shoppingContent">
                        <div class="contTitle">

                        </div>
                    </div>
                </el-col>
            </el-row>
        </div>


        
        <el-dialog
            :visible.sync="giftBoxSelState"
            width="53%"
            :show-close="false"
            center>

            <div class="giftSelBox">
                <div class="giftDisplay">
                        <img :src="giftDisplaySrc || require('@/assets/shop/giftBoxImg/CLASSIC1.png')" alt="">
                </div>
                <div class="giftSel">
                    <img 
                        @click="selectGiftBox($event)"
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
    </div>
</template>

<script>
export default {
    name: 'Shopping',
    data(){
        return {
            giftBoxSelState: false,
            NoticeState: false,
            giftDisplaySrc: "",
            defaultGiftBox: 'giftBoxTpye1',
            GiftBoxHidden: true
        }
    },
    methods: {
        selectGiftBox(ev){
            this.giftDisplaySrc = ev.target.src;
            this.defaultGiftBox = ev.target.dataset.giftboxtpye;
            
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
        }
    },
    beforeCreate(){

    },
    mounted(){
        
    }
}
</script>

<style lang="less">
.Shopping{
    padding-top: 175px;
    .shopOper{
        background: #f0ede8;
        padding: 20px 0 60px 30px;

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
            .addShoppingCar{
                margin-top: 20px;
                padding: 10px;    
                background: #000;
                color: #fff;
                cursor: pointer;
            }
            .bookanappointment{    
                margin-top: 10px;
                padding: 10px;
                color: #7f7f7f;
                border: 1px solid #000;
                cursor: pointer;
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

    .el-dialog .el-dialog__body {
        padding: 0 40px 40px !important;
        height: 50vh;
        overflow-y: scroll;
        h1 {   
            margin: 16px 0;
            position: relative;
            border-bottom: 1px solid #ae9477;
            font-size: 30px;
            img{
                position: absolute;
                width: 27px;
                height: 27px;
                left: 47%;
                bottom: -15px;
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

</style>


