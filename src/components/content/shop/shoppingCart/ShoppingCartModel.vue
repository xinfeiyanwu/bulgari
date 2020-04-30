<template>
    <div class="shoppingCartModel">
      <div class="shoppingCartHeader">
        <h3 class="shoppingCartTitle">我的购物袋</h3>
        <i class="closeBtn el-icon-close" @click="hiddenShoppingCartModel"></i>
      </div>

      <div class="goodsMenuList" v-if="shoppingCartList.length>0">
        <div class="allSelect">
          <input type="checkbox" name="" id="allSelect" v-model="allSelect">
          <label for="allSelect">选择全部</label>
        </div>

        <div class="productDetail" v-for="(item,index) in shoppingCartList" :key="index">
          <el-row class="productDetailTop" >
              <el-col :span="2" class="select">
                <input type="checkbox" name="" id="" :checked="item.isSel" ref="selState">
              </el-col>
              <el-col :span="8" class="productPhoto">
                <img :src="item.img" alt="">
              </el-col>
              <el-col :span="12" class="productSeriesName">
                <p>{{item.productSeriesName}}</p>
              </el-col>
              <el-col :span="2">
                <i class="delPro el-icon-close" @click="showModal(index)"></i>
              </el-col>
              
          </el-row>
          
          <el-row class="proNO">
              <el-col :span="12">作品编号</el-col>
              <el-col :span="12" class="textLeft">{{item.productNO}}</el-col>
          </el-row>
          <el-row class="proNum">
              <el-col :span="12">数量</el-col>
              <el-col :span="12" class="textLeft">
                <!-- {{item.productNum}} -->
                <el-input-number v-model="productNum" size="mini" @change="handleChange" :min="1" :max="3" ></el-input-number>
              </el-col>
          </el-row>
          <el-row class="proTotalCoin">
              <el-col :span="12">小计</el-col>
              <el-col :span="12" class="textLeft">3,111</el-col>
          </el-row>
        </div>

        <div class="SpecialGift" v-if="allSelect">
            <h5>选择您的特别礼遇</h5>
            <el-row class="giftSelect">
                <el-col :span="8">
                    <img src="https://www.bulgari.cn/media/catalog/product/cache/f35813a793107da5b4789b5341ec6d39/A/c/AccessoryJewellery-Bracelet-BVLGARI-30990-E-1_v01.png" alt="">

                </el-col>
                <el-col :span="8">
                    <img src="https://www.bulgari.cn/media/catalog/product/cache/f35813a793107da5b4789b5341ec6d39/A/c/AccessoryJewellery-Bracelet-BVLGARI-31098-E-1_v01.png" alt="">
                </el-col>
                <el-col :span="8">
                    <img src="https://www.bulgari.cn/media/catalog/product/cache/f35813a793107da5b4789b5341ec6d39/B/v/BvlgaripourHomme-EaudeToiletteSpray100ml-BVLGARI-83150-E-1_v05.png" alt="">
                </el-col>
                <el-col :span="8">
                    <img src="https://www.bulgari.cn/media/catalog/product/cache/f35813a793107da5b4789b5341ec6d39/4/0/40556_002.png" alt="">
                </el-col>
            </el-row>
        </div>
        
        <el-row class="allProCoin">
            <el-col :span="12" class="allProCoinLabel">订单总计</el-col>
            <el-col :span="12" class="textLeft">111111</el-col>
        </el-row>
        <div class="shoppingCartBot">
          <button class="subminBtn" ref="subminBtn" @click="allSelect ? subminOrder() : null">提交订单</button>
          <button class="checkShoppingCart">查看购物袋</button>
        </div>
      </div>

      <div class="noneGoods" v-else>
        <img src="@/assets/header/shoppingCart.png" alt="">
        <h4>您的购物车是空的！</h4>
      </div>

      <el-dialog
        :visible.sync="dialogVisible"
        :modal="false"
        width="30%">
        <span>您确定要将此产品从购物袋移除吗？</span>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="delProFn(delProIndex)">确 定</el-button>
        </span>
      </el-dialog>
    </div>
</template>

<script>
import {mapState} from 'vuex'
import { allSettled } from 'q';
export default {
  name: 'shoppingCartModel',
  data(){
    return {
      productNum: 1,
      allSelect: true,
      dialogVisible: false,
      delProIndex: 0,
    }
  },
  methods: {
    hiddenShoppingCartModel(){
      this.$store.dispatch('hiddenShoppingCartModelReq');
    },
    handleChange(value) {
      console.log(value);
    },
    subminOrder(){
      console.log('allSelect')
    },
    delProFn(index){
      this.dialogVisible = false;console.log(index);
      this.$store.dispatch('delProReq', index);
    },
    showModal(index){
      this.dialogVisible = true;
      this.delProIndex = index;
    }
  },
  computed: {
    ...mapState({
      shoppingCartList: state => state.shoppingCart.shoppingCartList
    }),
  },
  watch: {
    allSelect: function (newVal){
      newVal ? this.$refs.subminBtn.className = 'subminBtn' : this.$refs.subminBtn.className += ' disabled';
      this.$refs.selState.forEach(
        (v) => {
          v.checked = newVal;
        }
      )
    }
  }
}
</script>

<style lang="less" scoped>
.textLeft{
  text-align: right;
}
.shoppingCartModel{
  position: absolute;
  right: 0;
  top: 0;
  padding: 0px 24px;
  height: 100vh;
  width: 272px;
  text-align: center;
  background: #fff;    
  overflow-y: scroll;
  box-shadow: -32px 0 29px #faf9f9c2;
  -moz-box-shadow: -32px 0 29px #faf9f9c2;
  -webkit-box-shadow: -32px 0 29px #faf9f9c2;
  .shoppingCartHeader{
    position: relative;
    .shoppingCartTitle{
      padding-top: 30px;
      height: 50px;
      line-height: 50px;
      font-size: 20px;
      font-weight: 400;
    }
    .closeBtn{
      position: absolute;
      right: 3px;
      top: 25px;
      font-size: 30px;
      cursor: pointer;
    }
  }

  .goodsMenuList{
    .allSelect{
      text-align: left;
      padding-bottom: 10px;
      border-bottom: 1px solid #ccc;
      input{
        width: 20px;
        height: 20px;
      }
      label{
        vertical-align: super;
      }
    }
    .productDetail{
      padding-top: 10px;
      .productDetailTop{
        .select{
          text-align: left;
          input{
            width: 20px;
            height: 20px;
          }
        }
        // .productPhoto{

        // }
        .productSeriesName{
          height: 92px;
          display: flex;
          align-items: center;
          text-align: right;
        }
        .delPro{
          font-size: 18px;
          cursor: pointer;
        }
      }

      .proNO, .proNum, .proTotalCoin{
        padding: 15px 0;
        text-align: left;
      }
      .proNum .textLeft .el-input-number{
        width: 56%;
      }
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

  .SpecialGift{
    .giftSelect{
      img{
        cursor: pointer;
      }
    }
  }

  .allProCoin{
    padding: 15px 0;
    .allProCoinLabel{
      text-align: left;
    }
  }

  .shoppingCartBot{
    padding-bottom: 30px;
    .subminBtn{
      display: block;
      width: 100%;
      border: none;
      margin-top: 15px;
      padding: 10px 0;
      background-color: #000;
      color: #fff;
      cursor: pointer;
    }
    .disabled{
      cursor: not-allowed;
      opacity: 0.5;
      filter: alpha(opacity=50);
    }
    .checkShoppingCart{
      display: block;
      width: 100%;
      margin-top: 15px;
      padding: 10px 0;
      border: 1px solid #ccc;
      background-color: #fff;
      color: #000;
      cursor: pointer;
    }
  }
}
</style>


