<template>
    <div id="Register">

        <el-row>

            <!-- 显示注册标题 -->
            <el-col 
                    :span="8" 
                    :offset="3">
                    <h1 class="nowdCoper"> 1.注册账户</h1>
            </el-col>
            <el-col 
                :span="8"
                :offset="2">
                <h1> 2.完善账号</h1>
            </el-col>

            <el-col 
                class="QRCode"
                :offset="2"
                :span="10">
                <h5 class="QRTile"><img src="../../../assets/header/QCicon.png"/><span>微信二维码</span></h5>
                <img src="../../../assets/header/QC.png" alt="QRCode" class="QRCodeImg">
                <p>即刻登录<br>宝格丽在线精品店</p>
                <div class="Separator"></div>
            </el-col>
            <el-col 
                class="registerSession"
                :span="12">
                <el-row>
                    <el-col
                        :offset="2"
                        class="numberTitle"
                        :span="20">
                        <p>手机号码</p>
                    </el-col>
                    <el-col 
                        :offset="2"
                        :span="20"
                        class="number">
                        <input 
                            type="text" 
                            name=""  
                            placeholder="请输入11位手机号码" 
                            v-model="number">
                    </el-col>
                    <el-col
                        :offset="2"
                        :span="20">
                        <p>输入验证码</p>
                    </el-col>
                    <el-col 
                        :offset="2"
                        :span="20"
                        class="VerificatCode">
                        <input 
                            type="text" 
                            placeholder="请输入验证码" 
                            v-model="VerificatCode">
                        <button 
                            @click="sendHandle"
                            class="sendVerif">发送验证码</button>
                    </el-col>
                    <el-col :offset="2">
                        <button class="phoneVerif">手机验证</button>
                    </el-col>
                </el-row>
                
            </el-col>
        </el-row>
           
    </div>
</template>

<script>
import '../../../mock/userOperation/register.js'
export default {
    name: 'Register',
    data(){
        return {
            number: '',
            VerificatCode: ''
        }
    },
    methods: {
        sendHandle(){
            if( this.number == '' ) return alert('请输入正确的电话号码！');
            setInterval(()=>{
                this.$Axios.get(`/resister/getVerificatCode`)
                .then((res) => {
                    this.VerificatCode=res.data;
                    console.log(res.data)
                })
            }, 2000)
        },
    }
}
</script>
<style lang="less" scoped>
@padding-top: 10px 0;

#Register{

    .el-row .el-col {
        h1{
            font-size: 20px;
            padding: 14px 0;
            font-weight: 300;
            border-bottom: 1px solid #ccc;
        }
        
        .nowdCoper{
            border-bottom: 1px solid #ae9477;
        }
    }

    .el-row{
        .QRCode{
            position: relative;
            text-align: center;
            .QRTile{
                display: flex;
                align-items: center;  
                justify-content: center;
                padding: @padding-top;
                img{
                    display: inline-block;
                    width: 14px;
                }
                span{
                    display: inline-block;
                }
            }
            .QRCodeImg{
                width: 49%;
            }
            
            .Separator{
                position: absolute;
                top: 6px;
                right: 0;
                width: 0;
                height: 221px;
                border-left: 1px solid rgb(204, 198, 198);
            }

            p{font-size: 13px;padding: 15px 0;}
        }
            
        .registerSession{
            padding: 0 5px;
            text-align: left;

            p{padding: @padding-top;font-size: 14px;}
            
            .number, .VerificatCode{ 
                input{
                    width: 96%;
                    height: 34px;
                    padding: 0;
                    font-size: 14px;
                    border: none;
                }

            }

            .sendVerif, .phoneVerif{
                font-size: 14px;
                border: none;
                background: #000;
                color: #fff;
                cursor: pointer;
            }

            .VerificatCode{ 
                input{
                    width: 62%;
                    vertical-align: bottom;
                }
                .sendVerif{
                    width: 34%;
                    height: 34px;
                }
                
            }

            .phoneVerif{
                width: 64%;
                height: 42px;
                margin-top: 36px;
            }
        }

    }

}

</style>


