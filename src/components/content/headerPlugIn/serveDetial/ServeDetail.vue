<template>
    <div class="ServeDetail">

        <el-menu ref="menu" :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <el-submenu index="1">
                <template slot="title" >售后服务</template>
                <el-menu-item index="珠宝"><router-link to="/headerPlugIn/Serve/ServeDetail/ServeJewell/珠宝">珠宝</router-link></el-menu-item>
                <el-menu-item index="腕表"><router-link to="/headerPlugIn/Serve/ServeDetail/ServeWatch/腕表">腕表</router-link></el-menu-item>
                <el-menu-item index="配饰"><router-link to="/headerPlugIn/Serve/ServeDetail/ServeAccess/配饰">配饰</router-link></el-menu-item>
            </el-submenu>
            <el-menu-item index="2"><router-link to="/headerPlugIn/SearchShop/">查找店铺</router-link></el-menu-item>
            <el-menu-item index="3"><router-link to="/headerPlugIn/LinkWe/">联系我们</router-link></el-menu-item>
        </el-menu>
            
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'ServeDetail',
    data() {
      return {
        activeIndex: '1',
        keyValue: '售后服务'
      };
    },
    methods: {
      handleSelect(key) {
          this.keyValue = `&gt;<span>${key}</span>`;
          console.log(this.keyValue)
      }
    }
    
}
</script>

<style lang="less" scoped>
.ServeDetail{
    position: relative;
    text-align: center;
    .el-col{
        padding: 10px;
        p{
            padding: 26px 0
        }
    }
}
</style>


