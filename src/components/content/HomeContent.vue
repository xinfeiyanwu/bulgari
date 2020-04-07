<template>
  <div id="HomeContent">
    <div id="hotWord">
     <h5 
        v-for="(item, index) in hotWordArr" 
        :key="index">
          <router-link :to="item.link">{{item.linkWord}}</router-link>
          {{item.word}}
      </h5>
    </div>

    <div id="FIOREVER">
      <el-row>
        <img src="../../assets/homePage/acs.png" alt="">
      </el-row>

      <h1>FIOREVER咏绽系列珠宝</h1>
      <h3 id="FIOREVER_Search"><router-link to="/">探索FIOREVER咏绽系列珠宝</router-link></h3>
      
      <div id="concentration">
        
        <h2 id="concentration_Title">为您精选的作品</h2>
        <!-- 走马灯 -->
        <el-row type="flex" justify="center">
          <el-col :span="18">
            <el-carousel type="card" id="FIOREVER-session2" height="500px">
              <el-carousel-item
                v-for="(list,index) in carouselImgList"  
                :key="index">

                <router-link to="/">
                  <img :src="list.url" alt="list.description">
                  <p>{{list.description}}</p>
                </router-link>
                
              </el-carousel-item>
            </el-carousel>
          </el-col>
        </el-row>

        
        <el-row id="FIOREVER-session2" type="flex" justify="center">
          <el-col :span="14">
            <img style="width: 100%;height: auto;" src="../../assets/homePage/Hero-840x500.jpg" alt="Hero-840x500.jpg">
          </el-col>
          <el-col :span="10" style="margin: auto 0;">
            <p>
                Fiorever咏绽系列象征着罗马人对生活的热情，是对自然之美的真挚歌颂。Fiorever咏绽系列珠宝搭配灵动上扬的密镶钻石花瓣，为自由不羁的女性特别设计，散发着令人难以抵挡的乐观精神与蓬勃朝气。
            </p>
            <router-link to="/">选购FIOREVER咏绽系列珠宝</router-link>
          </el-col>
        </el-row>

      </div>

      <div height="400px"></div>

    </div>

  </div>
</template>

<script>
export default {
  name: 'HomeContent',
  data(){
    return {
      hotWordArr: [
        {
          linkWord: '在线选购',
          word: ' 全新2020春夏皮具与配饰系列作品。',
          link: '/'
        },
        {
          linkWord: '即刻探索',
          word: '  2020迪拜#LVMH钟表周#',
          link: '/'
        }
      ],
      //img地址需要require才能获取的到url路径
      carouselImgList: [
        {
          url: require('../../assets/homePage/carousel/carousel1.png'),
          description: 'Fiorever咏绽系列 项链'
        },
        {
          url:  require('../../assets/homePage/carousel/carousel2.png'),
          description: 'Fiorever咏绽系列 项链'
        },
        {
          url:  require('../../assets/homePage/carousel/carousel3.png'),
          description: 'Fiorever咏绽系列 项链'
        },
        {
          url:  require('../../assets/homePage/carousel/carousel4.png'),
          description: 'Fiorever咏绽系列 项链'
        },
        {
          url:  require('../../assets/homePage/carousel/carousel5.png'),
          description: 'Fiorever咏绽系列 项链'
        },
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
img{
  width: 100%;
  height: 100%;
}
.color(){
  color: #cba177;
}
#HomeContent{
  padding-top: 180px;

  #hotWord{
    padding: 10px;
    h5{
      text-align: center;
      font-size: 14px;
      .color();
      a{ 
        .color();
      }
    }
    img{
      width: 100%;
      height: 500px;
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

      .el-carousel__item {
          a {
            text-decoration: none;
            img{
              height:80%;
              background: #f0ede8;
            }

            p{
              font-size: 22px;
              padding: 10px;
            }

          }
        }

      .el-carousel /deep/ .el-carousel__indicators--outside{
        display: none;
      }

      #FIOREVER-session2 {
            padding-bottom: 20px;
        > .el-col {
          p {
            padding-bottom: 28px;
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
