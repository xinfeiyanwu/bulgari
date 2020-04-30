<template>
    <div id="Register">

        <el-row class="title">

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
            </el-col><el-col 
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
                        class="number"
                        :offset="2"
                        :span="12"
                    >
                        <el-input 
                            placeholder="请输入11位手机号码" 
                            v-model="number"
                            @blur="checkNum"
                            @focus="hideNotice"
                        >
                        </el-input>
                    </el-col>
                    <el-col :offset="2" class="numberNotice"><p v-text="numberNoticeText"></p></el-col>
                    <el-col
                        :offset="2"
                        :span="20">
                        <p>输入验证码</p>
                    </el-col>
                    <el-col 
                        :offset="2"
                        :span="12"
                        class="VerificatCode"
                    >
                        <input v-model="VerificatCode"/>
                        <button 
                            @click="getVerifHandle"
                            class="sendVerif">{{sendVerifText}}</button>
                    </el-col>
                    <el-col :offset="2">
                        <button class="phoneVerif" @click="registerHandle">手机验证</button>
                    </el-col>
                </el-row>

                <!-- 警告 -->
                <el-button 
                    :plain="true" 
                    style="display: none;">警告</el-button>
                
            </el-col>

        </el-row>
           
    </div>
</template>

<script>
import '@/mock/userOperation/getVerificatCode.js'
import '@/mock/userOperation/register.js'
import { setTimeout, setInterval, clearInterval } from 'timers';
export default {
    name: 'Register',
    data(){
        return {
            number: '',
            VerificatCode: '',
            numberNoticeText: '',
            sendVerifText: '发送验证码',
            Timer: null,
            getVerifState: false
        }
    },
    methods: {
        getVerifHandle(){
            //判断是否已经获取验证
            //如果为true，说明已经在获取验证码,直接跳出并提示用户已经在获取验证码
            //如果为false说明是第一操作，改变状态为true
            if(this.getVerifState) {
                this.$message({
                    showClose: true,
                    message: '您正在获取验证码,请耐心等待!',
                    type: 'warning',
                    offset: 300,
                });
                return ;
            }
            else{
                this.getVerifState=true;
            }

            this.sendVerifText  = 60;
            this.Timer = setInterval(() => {
                if(this.sendVerifText === 0) {
                    this.sendVerifText = '发送验证码';
                    clearInterval(this.Timer);
                    return ;
                }
                this.sendVerifText = this.sendVerifText - 1;
            }, 1000)

            setTimeout(()=>{
                this.$request({url: '/resister/getVerificatCode'})
                    .then((res) => {
                        this.VerificatCode=res;
                        this.sendVerifText = '发送验证码';
                        clearInterval(this.Timer);
                        this.$message({
                            showClose: true,
                            message: '恭喜你，获取验证码成功!',
                            type: 'success',
                            offset: 300,
                        });
                        //获取成功，把获取状态码复位
                        this.getVerifState = false;
                        //console.log(res.data)
                    })
                    .catch((error) => {
                        console.log(error);
                    })
            }, 5000)
        },
        checkNum(){
            if( this.number == '' || this.number.length != 11){
                this.numberNoticeText = '请输入11位正确的手机号码';
            }
            else{
                this.hideNotice();
            }
        },
        hideNotice(){
            this.numberNoticeText = ''
        },
        registerHandle(){
            if(this.VerificatCode!='' && this.number!=''){
                this.$request().post('/resister', {VerificatCode:this.VerificatCode})
                .then((res) => {debugger
                    if(res.data.code==200) 
                    this.$router.push({
                        path: '/userOper/CompleteData/',
                    })
                    console.log(res)
                })
            }
            
        }
    },
}
</script>
<style lang="less" scoped>
@padding-top: 10px 0;

#Register{
    padding-bottom: 50px;

    .el-row .el-col {
        h1{
            font-size: 20px;
            padding: 14px 0;
            border-bottom: 1px solid #ccc;
            color: #ccc;
        }
        
        .nowdCoper{
            border-bottom: 1px solid #ae9477;
            color: #000;
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
                    width: 20px;
                }
                span{
                    display: inline-block;
                    font-size: 17px;
                }
            }
            .QRCodeImg{
                width: 31%;
            }
            
            .Separator{
                position: absolute;
                top: 6px;
                right: 0;
                width: 0;
                height: 260px;
                border-left: 1px solid rgb(204, 198, 198);
            }

            p{font-size: 17px;padding: 15px 0;}
        }
            
        .registerSession{
            padding: 0 5px;
            text-align: left;

            p{padding: @padding-top;font-size: 16px;}

            .numberNotice{
                p{color: red;}
            }

            .VerificatCode{     
                display: flex;
                align-items: center;
                input{
                    width: 66%; 
                    height: 40px;
                    padding-left:15px;
                    border: none;  
                }
                .sendVerif{
                    width: 34%;
                    height: 40px;
                }
            }

            .sendVerif, .phoneVerif{
                font-size: 14px;
                border: none;
                background: #000;
                color: #fff;
                cursor: pointer;
            }

            .phoneVerif{
                width: 34%;
                height: 40px;
                margin-top: 36px;
            }
        }

    }

}

</style>


