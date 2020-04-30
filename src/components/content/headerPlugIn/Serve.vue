<template>
    <div class="Serve">

        <div class="serveTop">
            <img src="../../../assets/header/serve/banner-landing.jpg" alt="">
            <h5>服务</h5>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'Serve',
    data(){
        return {
            serveList:  [
                {
                    title: '售后服务',
                    url: require('../../../assets/header/serve/3.after-sales-service.jpg'),
                     explorePath: '/'
                },
                {
                    title: '查找店铺',
                    url: require('../../../assets/header/serve/6.cover_find-a-store.jpg'),
                     explorePath: '/headerPlugIn/SearchShop/'
                },
                {
                    title: '联系我们',
                    url: require('../../../assets/header/serve/7.cover_contact-us.jpg'),
                     explorePath: '/headerPlugIn/LinkWe/'
                }
            ]
        }
    }
}
</script>

<style lang="less">
.Serve{
    margin-top: 180px;
    text-align: center;
    img{
        width: 100%;
    }

    .serveTop{
        h5{
            color: #fff;
            background: rgba(0,0,0,.7);
            padding: 9px 0;
            font-size: 18px;
            font-weight: 500;
        }
    }
}
</style>


