<template>
  <div id="HomeContent">
    <!-- <div id="hotWord">
     <h5 
        v-for="(item, index) in hotWordArr" 
        :key="index">
          <router-link :to="item.link">{{item.linkWord}}</router-link>
          {{item.word}}
      </h5>
    </div> -->

    <div id="FIOREVER">
      <el-row>
        <img :src="HomeContentList.HomeBannerImg">
      </el-row>

      <h1>FIOREVER咏绽系列珠宝</h1>
      <h3 id="FIOREVER_Search"><router-link to="/">探索FIOREVER咏绽系列珠宝</router-link></h3>
      
      <div id="concentration">
        
        <h2 id="concentration_Title">为您精选的作品</h2>
        
        <div class="swiper-container" style="width: 80%;">
          <div class="swiper-wrapper">

            <div 
              class="swiper-slide"
              v-for="(item,index) in HomeContentList.swiperList"  
              :key="index">
              <router-link to="/">
                <img 
                  :src="item.img" 
                  :alt="item.productName">
                <p>{{item.productName}}</p>
              </router-link>
            </div>

          </div>

          <div class="swiper-button-next"></div>
          <div class="swiper-button-prev"></div>
        </div>

        <el-row id="FIOREVER-session2" type="flex" justify="center">
          <el-col :span="14">
            <img 
              :src="HomeContentList.FIOREVER.img" 
              :alt="HomeContentList.FIOREVER.description">
          </el-col>
          <el-col :span="10" style="margin: auto 0;">
            <p>{{HomeContentList.FIOREVER.description}}</p>
            <router-link to="/">{{HomeContentList.FIOREVER.shopBtn}}</router-link>
          </el-col>
        </el-row>

      </div>

    </div>
  </div>
</template>

<script>
import Swiper from "swiper"
import "../../../node_modules/swiper/css/swiper.css"
import "../../../node_modules/swiper/js/swiper.min.js"
import '@/mock/homeContent/HomeContent.js'
export default {
  name: 'HomeContent',
  data(){
    return {
      // hotWordArr: [
      //   {
      //     linkWord: '在线选购',
      //     word: ' 全新2020春夏皮具与配饰系列作品。',
      //     link: '/'
      //   },
      //   {
      //     linkWord: '即刻探索',
      //     word: '  2020迪拜#LVMH钟表周#',
      //     link: '/'
      //   }
      // ],
      //img地址需要require才能获取的到url路径
      //超过三级的JSON需要写出来的，不然在渲染template时会报错，无法获取到最下级的属性
      HomeContentList: {
        FIOREVER: {
        img: '',
        description: '',
        shopBtn: ''
        },
      },
    }
  },
  methods: {
    initSwiper: function() {
      new Swiper('.swiper-container', {
        slidesPerView: 3,
        spaceBetween: 30,
        loop : true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
    }
  },
  created(){
    this.$request({url: '/HomeContentList'})
      .then(res => {
        for (let key in res) {
          if (key == "HomeBannerImg") {
           // debugger;
            res[key] = require(`../../assets/homePage/${res['HomeBannerImg']}.png`);
          }
          else if(key == "swiperList") {
            res[key].forEach((v,i) => {
              res[key][i].img = require(`../../assets/homePage/carousel/${v.img}.png`);
            })
          }
          else if(key == "FIOREVER") {
            res[key].img = require(`../../assets/homePage/${res[key].img}.jpg`);
          }
        }
        this.HomeContentList = { ...this.HomeContentList, ...res };
        //console.log(res)
        this.$nextTick(() => {
          this.initSwiper();
        })
      })
  },
  mounted() {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
#HomeContent{
  padding-top: 180px;

  #hotWord{
    padding: 10px;
    h5{
      text-align: center;
      font-size: 14px;
      color: #cba177;
      a{ 
        color: #cba177;
      }
    }
    img{
      width: 100%;
      height: 100%;
    }
  }

  #FIOREVER{
    text-align: center;

    h1{
      color: #000;
      font-size: 32px;
      padding: 10px 0;
    }

    #FIOREVER_Search{
      a{
        display: inline-block;
        padding: 8px 16px;
        background: #1f1f1f;
        text-decoration: none;
        color: #fff; 
      }
    }

    #concentration{
      #concentration_Title{
        color: #000;
        font-size: 24px;
        font-weight: 300; 
        padding: 12px 0;
      }

      .swiper-container{
        .swiper-slide{
          img{
            background: #f0ede8;
          }
          p{
            padding: 10px 0;
            font-size: 20px;
          }
        }
      }

      #FIOREVER-session2 {
        padding: 40px 0;
        margin-bottom: 50px;
        > .el-col {
          p {
            padding: 30px;
          }

          a {
            padding: 10px 16px;
            font-size: 14px;
            border: 1px solid #000;
          }
        }
      }
    }
  }
}
</style>
