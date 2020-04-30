<template>
    <div class="LinkWe">

        <h1>联系我们</h1>

        <div class="LinkWeBox">
            <el-row>
                <el-col :span="12">
                    <div class="linkNumber">
                        <img src="../../../assets/header/linkNumber.png" alt="联系宝格丽客服">
                        <h5>联系宝格丽客服</h5>
                        <a href="tel:400 000 6699">400 000 6699</a>
                    </div>
                    <div class="onlineAsk">
                        <img src="../../../assets/header/onlineAsk.png" alt="在线咨询">
                        <h5>在线咨询</h5>
                    </div>
                </el-col>
                <el-col :span="12">
                    <img class="QCicon" src="../../../assets/header/QCicon.png" alt="QCicon">
                    <el-row>
                        <el-col :span="12" class="QC">
                            <h5>关注微信联系我们</h5>
                            <img src="../../../assets/header/QC.png" alt="关注微信联系我们">
                        </el-col>
                        <el-col :span="12" class="onlineRepair">
                            <h5>请扫描以下二维码<br>获得宝格丽在线维修帮助</h5>
                            <img src="../../../assets/header/onlineRepair.jpg" alt="获得宝格丽在线维修帮助">
                        </el-col>
                    </el-row>
                </el-col>
            </el-row>
            <p class="kefuTime">客服时间：周一至周日 9:00-23:00 </p>
        </div>

    </div>
</template>

<script>
export default {
    name: 'LinkWe'
}
</script>

<style lang="less" scoped>
.img(){
    width:28px;
    height: 28px;
}

.LinkWe{
    margin-top: 180px;
    text-align: center;
    h1{
        padding: 47px 0 33px;
        font-size: 30px;
        font-weight: 300;
    }

    .LinkWeBox{
        margin: 0 25%;
        padding-top: 60px;
        background: #f0ede8;
        h5{    
            font-size: 14px;
            font-weight: 600;
        }

        .linkNumber{
            img{
                padding-bottom: 20px;
                .img();
            }
            h5{
                padding: 12px 0;
            }
            a{
                padding-bottom: 22px;
            }
        }
        .onlineAsk{
            padding-top: 20px;
            img{
                padding: 20px 0;
                .img();
            }
        }
        .QCicon{
            .img();   
            padding-bottom: 7px;
        }
        .QC{
            h5{
                padding: 24px 0;
            }
            img{
                width: 57%;
            }
        }
        .onlineRepair{
            h5{
                padding: 5px 0;
            }
            img{
                padding-top: 21px;
                width: 57%;
            }
        }

        p{
            padding: 30px 0;
            border-top: 1px solid #ccc;
            margin-top: 32px;
            font-size: 12px;
            color: #ccc;
        }

        .kefuTime{
            font-size: 20px;
        }
    }
}
</style>


