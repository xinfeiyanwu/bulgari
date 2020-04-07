<template>
    <div class="Story">

        <div class="storyNav">
            <router-link to="/story/" style="color: #cba177;">故事</router-link>
            <router-link to="/story/">最新活动</router-link>
            <router-link to="/story/">生活方式</router-link>
        </div>

        <div class="storyCover">
            <video 
            src="../../../assets/homePage/story/lib-cinemagia-videocut.mp4"
            muted
            autoplay
            loop>
            </video>
            <div class="storyWorld">
                <h2>全新光影奇遇高级珠宝系列</h2>
                <a class="knowMore">了解更多</a>
            </div>
        </div>

        <!-- 每个col的内容撑起的高度都不一样，导致el-col高度不同，导致瀑布流 -->
        <!-- 解决的方法是限定col的最小高度,使用flex让img和vedio等比例缩放 -->
        <div class="storyDetail">
            <el-row>
                <template v-for="(item, index) in storyList">
                    <el-col  
                        :span="item.span"
                        :key="index">
                        <!-- 利用item.load判断router-link的标签 -->
                        <router-link :to="item.JumpRoute" :tag="item.load?'div':'a'" class="link">
                            <img :src="item.url" alt="item.url" v-if="item.type=='img'">
                            <video 
                                :src="item.url"
                                v-else-if="item.type=='video'"
                                autoplay
                                muted
                                loop>
                            </video>
                            <p>{{item.p}}</p>
                            <div v-if="item.load">
                                <a href="https://www.bulgari.cn/download/pdf/Life-In-Bvlgari-18-ITA_UK_qzu4wn.pdf" class="load">
                                下载 <div class="el-icon-download"></div>
                                </a>
                            </div>
                            <div v-else>
                                <h3>{{item.h3}}</h3>
                                <h4>{{item.h4}}</h4>
                            </div>
                        </router-link>
                    </el-col>
                </template>
            </el-row>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Story',
    data(){
        return {
            storyList: [
                {
                    span: 6,                     
                    type: 'img',
                    JumpRoute: '/',
                    url: require('../../../assets/homePage/story/story-1.jpg'),
                    p: '生活方式', 
                    load: true,
                    h3: 'BVLGARI TOUCH',
                    h4: '颠覆性新科技',
                },
                {
                    span: 6,                     
                    type: 'img',
                    JumpRoute: '/',
                    url: require('../../../assets/homePage/story/story-2.jpg'),
                    p: '生活方式', 
                    load: false, 
                    h3: 'BVLGARI TOUCH',
                    h4: '颠覆性新科技',
                },
                {
                    span: 12,
                    type: 'img',
                    JumpRoute: '/',
                    url: require('../../../assets/homePage/story/story-3.jpg'),
                    p: '生活方式', 
                    load: false,
                    h3: 'BVLGARI TOUCH',
                    h4: '颠覆性新科技',
                },
                {
                    span: 6,                     
                    type: 'img',
                    JumpRoute: '/',
                    url: require('../../../assets/homePage/story/story-4.jpg'),
                    p: '生活方式', 
                    load: false,
                    h3: 'BVLGARI TOUCH',
                    h4: '颠覆性新科技',
                },
                {
                    span: 6,                     
                    type: 'img',
                    JumpRoute: '/',
                    url: require('../../../assets/homePage/story/story-5.jpg'),
                    p: '生活方式', 
                    load: false,
                    h3: 'BVLGARI TOUCH',
                    h4: '颠覆性新科技',
                },
                {
                    span: 12,
                    type: 'video',
                    JumpRoute: '/',
                    url: require('../../../assets/homePage/story/COVER_MFW_1920x1080.mp4'),
                    p: '生活方式', 
                    load: false,
                    h3: 'BVLGARI TOUCH',
                    h4: '颠覆性新科技',
                },
                {
                    span: 6,                     
                    type: 'img',
                    JumpRoute: '/',
                    url: require('../../../assets/homePage/story/story-6.jpg'),
                    p: '生活方式', 
                    load: false,
                    h3: 'BVLGARI TOUCH',
                    h4: '颠覆性新科技',
                },
                {
                    span: 6,                     
                    type: 'img',
                    JumpRoute: '/',
                    url: require('../../../assets/homePage/story/story-7.jpg'),
                    p: '生活方式', 
                    load: false,
                    h3: 'BVLGARI TOUCH',
                    h4: '颠覆性新科技',
                },
                {
                    span: 6,                     
                    type: 'img',
                    JumpRoute: '/',
                    url: require('../../../assets/homePage/story/story-8.jpg'),
                    p: '生活方式', 
                    load: false,
                    h3: 'BVLGARI TOUCH',
                    h4: '颠覆性新科技',
                },
                {
                    span: 6,                     
                    type: 'img',
                    JumpRoute: '/',
                    url: require('../../../assets/homePage/story/story-9.jpg'),
                    p: '生活方式', 
                    load: false,
                    h3: 'BVLGARI TOUCH',
                    h4: '颠覆性新科技',
                },
                {
                    span: 6,                     
                    type: 'img',
                    JumpRoute: '/',
                    url: require('../../../assets/homePage/story/story-10.jpg'),
                    p: '生活方式', 
                    load: false,
                    h3: 'BVLGARI TOUCH',
                    h4: '颠覆性新科技',
                },
                {
                    span: 6,                    
                    type: 'img',
                    JumpRoute: '/',
                    url: require('../../../assets/homePage/story/story-11.jpg'),
                    p: '生活方式', 
                    load: false,
                    h3: 'BVLGARI TOUCH',
                    h4: '颠覆性新科技',
                },
                {
                    span: 6,                     
                    type: 'img',
                    JumpRoute: '/',
                    url: require('../../../assets/homePage/story/story-12.jpg'),
                    p: '生活方式', 
                    load: false,
                    h3: 'BVLGARI TOUCH',
                    h4: '颠覆性新科技',
                },
                {
                    span: 6,                     
                    type: 'img',
                    JumpRoute: '/',
                    url: require('../../../assets/homePage/story/story-13.jpg'),
                    p: '生活方式', 
                    load: false,
                    h3: 'BVLGARI TOUCH',
                    h4: '颠覆性新科技',
                },
                {
                    span: 6,                     
                    type: 'img',
                    JumpRoute: '/',
                    url: require('../../../assets/homePage/story/story-14.jpg'),
                    p: '生活方式', 
                    load: false,
                    h3: 'BVLGARI TOUCH',
                    h4: '颠覆性新科技',
                }, 
                {
                    span: 6,                     
                    type: 'img',
                    JumpRoute: '/',
                    url: require('../../../assets/homePage/story/story-15.jpg'),
                    p: '生活方式', 
                    load: false,
                    h3: 'BVLGARI TOUCH',
                    h4: '颠覆性新科技',
                },
                {
                    span: 12,                     
                    type: 'img',
                    JumpRoute: '/',
                    url: require('../../../assets/homePage/story/story-16.jpg'),
                    p: '生活方式', 
                    load: false,
                    h3: 'BVLGARI TOUCH',
                    h4: '颠覆性新科技',
                },
            ]
        }
    }
}
</script>

<style lang="less" scoped>
.h3_h4{
    overflow: hidden;
    white-space: nowrap; 
    text-overflow: ellipsis; 
    font-weight: 200;
}
.Story{
    margin-top: 168px;

    .storyNav{
        padding: 20px 0;
        text-align: center;
        a{
            padding-left: 30px;
        }
        a:first-child{
            padding: 0;
        }
    }

    .storyCover{
        position: relative;
        text-align: center;
        .storyWorld{
            position: absolute;
            left: calc(50% - 255px);
            top: 21%;
            h2{
                color: #fff;
                font-size: 46px;
                font-weight: 200;
            }
            .knowMore{
                border: none;
                background: #fff;
                padding: 10px 61px;
                cursor: pointer;
            }
            .knowMore:hover{
                border: none;
                background: #000;
                padding: 10px 61px;
                color: #fff;
            }
        }
    }

    .storyDetail{
        margin: 20px 20px 0 40px;
        .el-col{
            padding-right: 20px;
            min-height: 300px;
            .link{
                display: flex;
                flex-direction: column;

                p{
                    padding: 6px 0;
                    color: #ccc;
                    font-size: 12px;
                }

                h3{
                    .h3_h4();
                    font-size: 30px;
                }

                h4{
                    .h3_h4();
                    font-size: 25px;
                }

                .load{
                    display: block;
                    height: 40px;
                    line-height: 40px;
                    border: 1px solid #000;
                    text-align: center;
                }
                .load:hover{
                    background: #000;
                    color: #fff;
                    .el-icon-download{
                        color: #fff;
                    }
                }
            } 
        }
    }
}
</style>

