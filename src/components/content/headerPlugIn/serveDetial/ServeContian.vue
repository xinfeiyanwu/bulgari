<template>
    <div class="serveContian">
        
        <el-row>
            <el-col 
                :span="12" 
                v-for="(item,index) in serveList" 
                :key="index">
                <p>{{item.title}}</p>
                <router-link :to="item.explorePath">
                    <img :src="item.url" :alt="item.title">
                    <p>探索更多</p>
                </router-link>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    name: 'serveContian',
    data(){
        return {
            serveList:  [
                {
                    title: '售后服务',
                    url: require('../../../../assets/header/serve/3.after-sales-service.jpg'),
                     explorePath: '/headerPlugIn/Serve/ServeDetail'
                },
                {
                    title: '查找店铺',
                    url: require('../../../../assets/header/serve/6.cover_find-a-store.jpg'),
                     explorePath: '/headerPlugIn/SearchShop/'
                },
                {
                    title: '联系我们',
                    url: require('../../../../assets/header/serve/7.cover_contact-us.jpg'),
                     explorePath: '/headerPlugIn/LinkWe/'
                }
            ]
        }
    }
}
</script>

<style lang="less" scoped>
// img{
//     width: 100%;
// }
.serveContian{
    .el-col{
        padding: 10px;
        p{
            padding: 26px 0;
            font-size: 22px;
        }
    }
}
</style>


