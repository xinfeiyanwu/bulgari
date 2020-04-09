<template>
    <div 
        id="loginModel" 
        @click.stop="()=>{}"
        v-show="this.$store.state.loginModel">
        <div class="loginModelBox"></div>

        <el-row>
            <el-col 
                class="QRCode"
                :span="11">
                <h5 id="QRTile"><img src="../../../assets/header/QCicon.png"/><span>微信二维码</span></h5>
                <img src="../../../assets/header/QC.png" alt="QRCode" style="width: 80%;height:100%;">
                <p>即刻登录<br>宝格丽在线精品店</p>
                <div id="Separator"></div>
            </el-col>
            <el-col 
                class="loginSession"
                :offset="1"
                :span="11">
                <el-row>
                    <el-col><p>手机号码</p></el-col>
                    <el-col class="number">
                        <el-input 
                            id="number" 
                            placeholder="请输入11位手机号码" 
                            ref="number"
                            v-model="number"
                            @focus="hiddenNotice" >
                        </el-input>
                    </el-col>
                    <el-col class="numberNotice"><p ref="numberNotice" v-text="numberNoticeText"></p></el-col>
                    <el-col><p>密码</p></el-col>
                    <el-col class="psw">
                        <el-input 
                            ref="psw"
                            placeholder="请输入您的密码" 
                            v-model="psw"
                            @focus="hiddenNotice"
                            show-password></el-input>
                    </el-col>
                    <el-col class="pswNotice"><p ref="pswNotice" v-text="pswNoticeText"></p></el-col>
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
                    <el-col style="font-size: 14px;padding-top: 4px;">
                        还没有账号？
                        <router-link to="/" style="text-decoration: underline">即刻注册</router-link>
                    </el-col>
                </el-row>
                
            </el-col>
        </el-row>
        
    </div>
</template>

<script>
import 'vuex';
export default {
    name: 'LoginModel',
    data(){
        return {
            number: '',
            psw: '',
            rememberValue: '',
            numberNoticeText: '',
            pswNoticeText: '',
        }
    },
    methods: {
        login(){
            if(this.number == '' ) {
                this.numberNoticeText='请输入11位手机号码';
            }
            if(this.psw == '') {
                this.pswNoticeText='请输入您的密码';
            }
        },
        hiddenNotice(){
            this.numberNoticeText='';
            this.pswNoticeText='';
        },
        setCookie(num, psw, exdays){
            
            let str = num + '=' + psw + this.setTime(exdays);
            console.log(str)
            document.cookie = str;
        },
        setTime(exdays){
            let date = new Date();
            date.setTime(date.getTime()+(exdays*24*60*60*1000));
            let expires = ';expires=' + date.toGMTString();
            return expires;
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
@20Px: 20px;
@14Px: 14px;

#loginModel{
    z-index: 1000;
    position: absolute;
    top: 27px;
    left: -135px;
    width: 386px;
    padding: 7px 0;
    border: 1px solid #d2d2d2;
    background: #fff;
    font-size: @14Px;

    .QRCode{
        position: relative;
        text-align: center;
        h5{
            display: flex;
            align-items: center;  
            justify-content: center;
            padding-bottom: 15px;
            img{
                display: inline-block;
                width: @20Px;
            }
            span{
                display: inline-block;
                font-size: @14Px;
            }
        }
        
        #Separator{
            position: absolute;
            top: 2px;
            right: 0;
            width: 0;
            height: 246px;
            border-left: 1px solid rgb(204, 198, 198);
        }

        p{ font-size: @14Px;padding: 15px 0;}
    }
    .loginSession{
        padding: 0 5px;
        text-align: left;

        p{font-size: @14Px;}

        
        .number, .psw{ 
            input{
                width: 96%;
                height: 30px;
                text-indent: 10px;
                font-size: @14Px;
            }
        }
        .numberNotice p, .pswNotice p{height:@20Px;font-size:@14Px;color: rgb(240, 116, 116);}

        .remember{
            position: relative;
            display: flex;
            align-items: center;
            font-size: @14Px;
            input{
                width: @20Px;
                height: @20Px;
            }
            label{ color: #000;cursor: pointer; }
            a{   
                position: absolute;
                right: 0;   
            }
        }

        #loginBtn{
            background: #000;
            border: none;
            color: #fff;
            font-size: @14Px;
            padding: 8px 33px;
            margin: 6px 0; 
            cursor: pointer;   
        }
    }

    .loginModelBox{
        position: relative;
        width: 100%;
        height: 1px;
    }
    .loginModelBox::before{
        position: absolute;
        left: 45%;
        top: -13px;
        content:" ";
        border-left: @triangle solid transparent;
        border-top:0 solid transparent;
        border-right: @triangle solid transparent;
        border-bottom: @triangle solid #d2d2d2;
    }
    .loginModelBox::after{
        position: absolute;
        left: 45%;
        top: -12px;
        content:" ";
        border-left: @triangle solid transparent;
        border-top:0 solid transparent;
        border-right: @triangle solid transparent;
        border-bottom: @triangle solid #fff;

    }
}
</style>


