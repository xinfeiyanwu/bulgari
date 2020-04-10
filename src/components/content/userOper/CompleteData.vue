<template>
    <div id="Register">

        <el-row class="title">

            <!-- 显示注册标题 -->
            <el-col 
                    :span="6" 
                    :offset="5">
                    <h1> 1.注册账户</h1>
            </el-col>
            <el-col 
                :span="6"
                :offset="2">
                <h1 class="nowdCoper"> 2.完善账号</h1>
            </el-col>


            <el-col :span="12" :offset="8" class="nameLable">姓名</el-col>
            <el-col :span="12" :offset="8" class="nameBox flex">
                <input v-model="name"/>
                <select name="name" id="name" class="Salutation" v-model="Salutation">
                    <option value="sir">先生</option>
                    <option value="madam">女士</option>
                    <option value="wife">太太</option>
                </select>
            </el-col>
            <el-col :span="12" :offset="8" class="pswLable">密码</el-col>
            <el-col :span="12" :offset="8" class="PswBox"><input type="password" v-model="psw"></el-col>
            <el-col :span="12" :offset="8" class="confPswLable">确认密码</el-col>
            <el-col :span="12" :offset="8" class="confPswBox"><input type="password" v-model="confirmPsw"></el-col>
            <el-col :span="12" :offset="8" class="checkbox flex">
                <input type="checkbox" value="" id="privacy-link" v-model="privacyLink" @click="acceptAll">
                <label for="privacy-link">
                    我已经阅读，理解并同意
                    <a href="https://www.bulgari.cn/zh-cn/privacy-policy/" target="_blank" data-cl-id="2370962363">隐私政策</a>，本人声明现已满18岁，并且：                    
                </label>
            </el-col>
            <el-col :span="12" :offset="8" class="checkbox flex">
                <input type="checkbox" value="" v-model="registerInputCustom1" id="registerInputCustom1" >
                <label for="registerInputCustom1" class="label">
                    同意将我的个人数据用于统计分析目的                        
                </label>
            </el-col>
            <el-col :span="12" :offset="8" class="checkbox flex">
                <input type="checkbox" value="" v-model="registerInputCustom2" id="registerInputCustom2" >
                <label for="registerInputCustom2" class="label">
                    同意将我的个人数据用于接收有关新品、活动、倡议和个性化服务的信息                        
                </label>
            </el-col>
        </el-row>
           
    </div>
</template>

<script>
export default {
    name: 'CompleteData',
    data(){
        return {
            name: '',
            Salutation: 'sir',
            psw: '',
            confirmPsw: '',
            privacyLink: false,
            registerInputCustom1: false,
            registerInputCustom2: false
        }
    },
    methods: {
        acceptAll(){
            if( this.privacyLink ) {
                this.registerInputCustom1 = false;
                this.registerInputCustom2 = false;
            }
            else{
                this.registerInputCustom1 = true;
                this.registerInputCustom2 = true; 
            }
        }
    },
}
</script>
<style lang="less" scoped>

#Register{
    padding-bottom: 30px;

    .el-row {
        text-align: left;
        .el-col {
            h1{
                font-size: 20px;
                padding: 14px 0;
                border-bottom: 1px solid #ccc;
                color: #ccc;
                text-align: center;
            }
            
            .nowdCoper{
                border-bottom: 1px solid #ae9477;
                color: #000;
            }
        }

        .flex{  
            display: flex;
            align-items: center;
        }

        .nameLable, .pswLable, .confPswLable{
            padding: 4px 0 10px 0;
        }

        .nameBox, .PswBox, .confPswBox{
            margin-bottom: 20px;

            input{
                width: 64%;
                height: 40px;
                border: none;
                padding-left: 20px;
            }
        }

        .nameLable{
            padding-top: 26px;
        }

        .nameBox{
            input{
                width: 50%;
            }

            .Salutation{
                width: 14%;
                height: 40px;
                border: 1px solid #ae9477;
            }
        }

        .checkbox{
            padding-bottom: 6px;

            #registerInputCustom1, 
            #registerInputCustom2 {
                margin-left: 17px;
                color: #ccc;
            }

            .label{
                color: #ccc;
            }
            input,label{
                cursor: pointer;
            }

            a{
                text-decoration: underline;
            }
        }
    }

}

</style>


