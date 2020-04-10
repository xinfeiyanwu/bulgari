<template>
    <div id="userOper">

        <h1>欢迎来到宝格丽的世界<img src="../../../assets/header/stars.png" alt="欢迎来到宝格丽的世界"></h1>
        
        <div id="userOperBox"> 
            
            <router-view></router-view>
        </div>

    </div>
</template>

<script>
export default {
    name: 'UserOper',
}
</script>


<style lang="less" scoped>
#userOper{
        margin-bottom: 106px;
        padding-top:176px;
        text-align: center;
    > h1{   
        position: relative;
        border-bottom: 1px solid #ae9477;
        padding: 25px 0 ;
            font-size: 30px;
        img{
            position: absolute;
            width: 27px;
            height: 27px;
            left: 49%;
            bottom: -15px;
        }
    }
     #userOperBox{
        margin: 20px 10%;
        background: #f0ede8;
    }
}
</style>


