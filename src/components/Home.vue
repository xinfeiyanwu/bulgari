<template>
  <div id="Home" 
    @click="hiddenLoginModel">  
    <!-- Header -->
    <Header/>

    <router-view></router-view>

    <!-- Footer -->
    <Footer></Footer>
    <el-backtop :bottom="100"></el-backtop>
    
  </div>
</template>

<script>
import Header from './publicViews/Header.vue'
import Footer from "./publicViews/Footer.vue"
import 'vuex'
export default {
  name: 'Home',
  components: {Header,Footer},
  methods: {
    hiddenLoginModel(){
        this.$store.dispatch('hiddenLoginModel')
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
</style>
