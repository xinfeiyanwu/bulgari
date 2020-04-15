<template>
    <div class="ShoppingBagModel" @mouseleave="hiddenShoppingCartModel">
      <div class="shoppingBagHeader">
        <h3 class="shoppingBagTitle">我的购物袋</h3>
        <i class="closeBtn el-icon-close" @click="hiddenShoppingCartModel"></i>
      </div>

      <div class="goodsList">

      </div>
      <div class="noneGoods">
        <img src="@/assets/header/shoppingCart.png" alt="">
        <h4>您的购物车是空的！</h4>
      </div>
    </div>
</template>

<script>
import 'vuex'
export default {
  name: 'ShoppingBagModel',
  methods: {
    hiddenShoppingCartModel(){
      this.$store.dispatch('hiddenShoppingCartModelReq');
    }
  }
}
</script>

<style lang="less" scoped>
.ShoppingBagModel{
  position: absolute;
  right: 0;
  top: 0;
  height: 100vh;
  width: 338px;
  text-align: center;
  background: #fff;    
  box-shadow: -32px 0 29px #faf9f9c2;
  -moz-box-shadow: -32px 0 29px #faf9f9c2;
  -webkit-box-shadow: -32px 0 29px #faf9f9c2;
  .shoppingBagHeader{
    position: relative;
    .shoppingBagTitle{
      padding-top: 30px;
      height: 50px;
      line-height: 50px;
      font-size: 20px;
      font-weight: 400;
    }
    .closeBtn{
      position: absolute;
      right: 24px;
      top: 25px;
      font-size: 23px;
      cursor: pointer;
    }
  }

  .noneGoods{
    padding-top: 60%;
    img{
      margin: 0 auto;
      width: 40px;
      height: 40px;
    }
    h4{
      padding-top: 30px;
    }
  }
}
</style>


