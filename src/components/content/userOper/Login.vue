<template>
    <div id="login" >

        <el-row>
            <!-- 显示登录标题 -->
            <el-row>
                <el-col><h1>登陆账号</h1></el-col>
            </el-row>
            <el-col 
                class="QRCode"
                :offset="4"
                :span="8">
                <h5 class="QRTile"><img src="../../../assets/header/QCicon.png"/><span>微信二维码</span></h5>
                <img src="../../../assets/header/QC.png" alt="QRCode" class="QRCodeImg">
                <p>即刻登录<br>宝格丽在线精品店</p>
                <div id="Separator"></div>
            </el-col>
            <el-col 
                class="loginSession"
                :span="8">
                <el-row>
                    <el-col><p>手机号码</p></el-col>
                    <el-col class="number">
                        <el-input 
                            placeholder="请输入11位手机号码" 
                            ref="number"
                            v-model="number"
                            @focus="hiddenNotice" >
                        </el-input>

                    </el-col>
                    <el-col class="numberNotice"><p ref="numberNotice" v-text="numberNoticeText">请输入11位手机号码</p></el-col>
                    <el-col><p>密码</p></el-col>
                    <el-col class="psw">
                        <el-input 
                            ref="psw"
                            placeholder="请输入您的密码" 
                            v-model="psw"
                            @focus="hiddenNotice"
                            show-password></el-input>
                    </el-col>
                    <el-col class="pswNotice"><p ref="pswNotice" v-text="pswNoticeText">请输入您的密码</p></el-col>
                    <el-col class="remember">
                        <input type="checkbox" id="remember" v-model="rememberValue">
                        <label for="remember">记住我</label>
                        <router-link to="/">忘记密码</router-link>
                    </el-col>
                    <el-col>
                        <button 
                            @click="login"
                            id="loginBtn">登录</button>
                    </el-col>
                    <el-col class="registerNow">
                        还没有账号？
                        <router-link to="/userOper/register/">即刻注册</router-link>
                    </el-col>
                </el-row>
                
            </el-col>
        </el-row>
        
    </div>
</template>

<script>
import 'vuex';
import '@/mock/userOperation/login.js'
import { JSEncrypt } from 'jsencrypt'
export default {
    name: 'login',
    data(){
        return {
            number: '',
            psw: '',
            rememberValue: '',
            numberNoticeText: '',
            pswNoticeText: '',
            pubkey: `
                    -----BEGIN PUBLIC KEY-----
                    MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQD3B3cnlK336lHQje53+mIh/fHz
                    GFBAtH6alqDXa4LmuTMuwBQqBBIg+HIIb9001wmcMFQwueIG//vV112USWeZBOv1
                    gK86uDPNdsT1dKKQiVTK04IXxrlla21Wg3A23/3/unFoyaU73RhLuR0yBqcL61Ot
                    GPCyw3bTD+39Bm5BUQIDAQAB
                    -----END PUBLIC KEY-----
                    `
        }
    },
    methods: {
        login(){
            if(this.number == '' ) {
                this.numberNoticeText='请输入11位手机号码';
                return ;
            }
            if(this.psw == '') {
                this.pswNoticeText='请输入您的密码';
                return ;
            }
            if(this.$store.state.token.token){
                this.$message({
                    type: 'warning',
                    msg: '您登陆！请不要重复登录！',
                    offset: 200
                })
            }

            const encryptedData = this.encryptedData(this.pubkey, {
                'Number': this.number,
                'psw': this.psw
            }); 

            this.$Axios.post('/login', encryptedData)
                .then(res => {
                    const {code, msg, token, num} = res.data;
                    console.log(res);
                    if(code==200){
                        this.$message({
                            type: "success",
                            message: msg,
                            offset: 200
                        })
                        setTimeout(() => {
                            this.$store.dispatch('setTokenAction', {token,num});
                            this.$store.state.loginModel.loginModelState = false;
                            if(this.$route.fullPath != '/') this.$router.replace('/')
                        },1000);
                    }
                    else{
                        this.$message.error(msg);
                    }
                });
        },
        hiddenNotice(){
            this.numberNoticeText='';
            this.pswNoticeText='';
        },
        setCookie(num, psw, exdays){
            let date = new Date();
            date.setTime(date.getTime()+(exdays*24*60*60*1000));
            let expires = ';expires=' + date.toGMTString();
            let str = num + '=' + psw + expires;
            //console.log(str)
            document.cookie = str;
        },
        //加密
        encryptedData(publicKey, data) {
            // 新建JSEncrypt对象
            let encryptor = new JSEncrypt();
            // 设置公钥
            encryptor.setPublicKey(publicKey);
            // 加密数据
            for(let key in data){
                data[key] = encryptor.encrypt(data[key]);
            }
           // console.log(data);
            return data;
        }
    },
    watch: {
        rememberValue: function(newValue){
            if(newValue){
                this.setCookie(this.number, this.psw, 4);
            }
        }
    }
}
</script>
<style lang="less" scoped>
@triangle: 5px;
@30Px: 30px;
@font-size: 25px;
#login{
    h1{
        font-size: 30px;
        padding: @font-size 0;
        text-align: center;
        font-weight: 300;
    }

    .QRCode{
        position: relative;
        text-align: center;

        .QRTile{
            display: flex;
            align-items: center;  
            justify-content: center;
            padding: 15px 0 ;
            img{
                width: @font-size;
                display: block;
            }
            span{
                display: block;
                font-size: 14px;
            }
        }

        .QRCodeImg{
            width: 35%;
        }
        
        #Separator{
            position: absolute;
            top: 2px;
            right: 0;
            width: 0;
            height: 254px;
            border-left: 1px solid rgb(204, 198, 198);
        }

        p{
            padding: 15px 0;
        }
    }
    .loginSession{
        padding: 0 28px;
        text-align: left;

        p{padding-bottom: 4px}

        
        .number, .psw{ 
            input{
                width: 100%;
                height: @30Px;
                text-indent: 8px;
            }
        }
        .numberNotice p, .pswNotice p{height: @30Px;font-size: 14px;color: rgb(240, 116, 116);}

        .remember{
            position: relative;
            display: flex;
            align-items: center;
            input{
                width:16px;
                height: 16px;
                vertical-align: bottom;
            }
            label{ color: #000;cursor: pointer; }
            a{   
                position: absolute;
                right: 0;   
            }
        }

        #loginBtn{
            width: 50%;
            margin-top: 28px;   
            background: #000;
            border: none;
            color: #fff;
            padding: 8px 33px;
            margin: 6px 0; 
            cursor: pointer;   
        }

        .registerNow{
            padding-bottom: 48px;
            a{
                text-decoration: underline
            }
        }
    }
}
</style>


