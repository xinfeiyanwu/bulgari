<template>
    <div class="Story">

        <div class="storyNav">
            <router-link v-for="(item, i) in storyNav"
                :to="'/story/'+item.type" 
                :key="i"
                :class="{Active: isActive(item.type)}"
                @click.native="getDataList(item.type)"
            >
                {{item.name}}
            </router-link>
        </div>

        <div 
            class="storyCover" 
            v-if="this.$route.params.type=='story'">
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
        <div 
            class="storyDetail"
            v-loading="loading"
            element-loading-text="拼命加载中"
            element-loading-spinner="el-icon-loading"
            element-loading-background="#fff">
            <el-row>
                <template v-for="(item, index) in dataList">
                    <el-col  
                        :span="item.span"
                        :key="index">
                        <!-- 利用item.load判断router-link的标签 -->
                        <router-link 
                            :to="item.JumpRoute" 
                            :tag="item.load?'div':'a'" 
                            class="link">
                            <img 
                                :src="require('../../../assets/homePage/story/'+item.ImgUrl+'.jpg')" 
                                :alt="item.url" 
                                v-if="item.type=='img'">
                            <video 
                                :src="require('../../../assets/homePage/story/'+item.ImgUrl+'.mp4')"
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
import '@/mock/story/story.js'
import '@/mock/story/activity.js'
import '@/mock/story/lifeType.js'
import { setTimeout } from 'timers';
export default {
    name: 'Story',
    data(){
        return {
            dataList: [],
            Active: false,
            storyNav: [
                {
                    type: 'story',
                    name: '故事',
                },
                {
                    type: 'activity',
                    name: '最新活动',
                },
                {
                    type: 'lifeType',
                    name: '生活方式',
                }
            ],
            loading: true,
        }
    },
    methods: {
        isActive(type){
            return this.$route.params.type==type?true:false;
        },
        getDataList(type){
            this.loading = true;
            setTimeout(()=>{
                this.$Axios.get(`/story`,{
                    params: {type}
                }).then((res) => {
                    let data = res.data;
                    this.dataList = data;
                    this.loading = false;
                });
            }, 2000)
        }
    },
    created(){
        this.getDataList('story');
    },
    mounted(){
        //console.log(this.$route)
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

    .Active{
        color: rgb(203, 161, 119);
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
                display: inline-block;
                margin-top: 40px;
                padding: 10px 61px;
                border: none;
                background: #fff;
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
        min-height: 100px;
        .el-col{
            padding-right: 20px;
            min-height: 500px;
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

