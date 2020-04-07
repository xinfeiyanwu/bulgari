<template>
    <div id="Footer">
        <h3>寻找附近的店铺</h3>
        
        <Location />

        <el-row class="searchBtn">
            <router-link to="/">搜索</router-link>
        </el-row>

        <div class="footerMain">
            <el-row 
                type="flex"
                justify="center">
                <el-col :span="3">
                    <dl>
                        <dt>服务</dt>
                        <dd><router-link to="/">联系我们</router-link></dd>
                        <dd><router-link to="/">常见问题</router-link></dd>
                        <dd><router-link to="/">客户关怀</router-link></dd>
                        <dd><router-link to="/">通用条款和条件</router-link></dd>
                        <dd><router-link to="/">隐私政策</router-link></dd>
                        <dd><router-link to="/">Cookies管理</router-link></dd>
                        <dd><router-link to="/">网站使用条款</router-link></dd>
                    </dl>
                </el-col>

                <el-col :span="4">
                    <dl>
                        <dt>PRESS</dt>
                        <dd><router-link to="/">PRESS LOUNGE </router-link></dd>
                        <dd><router-link to="/">DOWNLOAD LIFE IN BVLGARI </router-link></dd>
                    </dl>
                </el-col>

                <el-col :span="3">
                    <dl>
                        <dt>关于Bvlgari</dt>
                        <dd><router-link to="/">企业社会责任</router-link></dd>
                        <dd><router-link to="/">关于Bvlgari</router-link></dd>
                        <dd><router-link to="/">宝格丽酒店及度假村</router-link></dd>
                    </dl>
                </el-col>

                <el-col class="socialNetworking" :span="2">
                    <dl>
                        <dt>社交网络</dt>
                        <dd>
                            <img ref="weibo" src="../../assets/footer/weibo.png" alt="weibo"> <img ref="youku" src="../../assets/footer/youku.png" alt="youku">
                        </dd>
                    </dl>

                    <dl>
                        <dt>商店</dt>
                        <dd><router-link to="/">查找商店</router-link></dd>
                    </dl>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
import Location from './Location.vue'
export default {
    name: 'Footer',
    components: {Location},
}
</script>

<style lang="less" scoped>
    #Footer{
        background: #f0ede8;
        padding-top: 30px;
        text-align: center;
        h3{    
            padding: 36px 0;
            font-size: 26px;
            letter-spacing: 6px;
            font-weight: 500;
        }

        .searchBtn{
            padding: 31px 0 40px 0;
            a{
                padding: 6px 48px;
                border: 1px solid #000;
                font-size: 22px;
            }
            a:hover{
                color: #fff;
                background: #000;
            }
        }

        .footerMain{
            background: #000;
            padding-top: 30px;
            dl{
                font-size: 9px;
                text-align: left;
                dt{color: 402e1f;padding-top: 9px;}
                dd{   
                    padding-top: 9px;
                    a{color: #fff;}
                    a:hover{text-decoration: underline;}
                }
            }

            .socialNetworking{
                letter-spacing: 2px;
                img{
                    width: 20px;
                }
            }
        }
    }
</style>


