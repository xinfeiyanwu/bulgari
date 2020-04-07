<template>
    <div class="SearchShop">

        <h1>选择最近的Bvlgari商店</h1>

        <el-row class="locationBox">
            <el-col class="location" :span="7">
                <img src="../../../assets/footer/location.png" alt="">
                <span><router-link to="">查找您的位置</router-link></span>
            </el-col>
            <el-col :span="14">
                <Location :InputSpan="12" :isDisable="true" :_offset="1"/>
            </el-col>
            <el-col :span="2" :offset="1">
                <button class="searchBtn">搜索</button>
            </el-col>
        </el-row>

        <img src="../../../assets/header/searchShop/inventory.png" alt="inventory">

        <div class="moreList" @click="More">
            完整列表
            <div :class="{Icon: true,spreadMore: spreadMore,packMore: packMore}"></div>
        </div>

    </div>
</template>

<script>
import Location from '../../publicViews/Location.vue'
export default {
    name: 'SearchShop',
    components: {Location},
    data(){
        return {
            spreadMore: false,
            packMore: false
        }
    },
    methods: {
        More(){
            if(!this.spreadMore){
                 this.spreadMore = !this.spreadMore;
                this.packMore = false;
            }else{
               this.spreadMore = false;
                this.packMore = !this.packMore;
            }
        }
    }
}
</script>

<style lang="less" scoped>
@height: 40px;
.SearchShop{
    margin-top: 149px;

    h1{
        padding: 12px 0 58px;
        font-weight: 300;
        font-size: 28px;
    }
    .locationBox{
        margin-left: 20px;
        .location{
            display: flex;
            align-items: center;
            img{
                margin: 0 40px 0 30px;
                width: 15px;
                height: 15px;
            }
            a{
                color: #fff;
            }
        }
        
        .searchBtn{    
            display: block;
            width: 100%;
            background: #fff;
            border: none;
            color: #fff;
        }

        .location, .searchBtn{
            height: @height;
            line-height: @height;
            background: #000;
            cursor: pointer;
        }
    }

    > img{
        margin: 30px 0;
        width: 100%;
        height: auto;
    }

    .moreList{
        position: relative;  
        margin: 0 auto 20px;  
        width: 80px;
        padding: 30px 0;
        font-size: 20px;
        cursor: pointer;
    }
    .Icon{
        position: absolute;
        width: 0px;
        height: 0px;
        bottom: 0;
        left: 41%;
        content: '';
        border-bottom: 20px solid #000;
        border-top: 0 solid transparent;
        border-left: 10px solid transparent;
        border-right: 10px solid transparent;
    }

    .spreadMore{
        animation-name:move;
        animation-duration:1s;
        animation-fill-mode:forwards;
        
        @keyframes move {
            from{
                transform: rotate(0deg)

            }

            to{
                transform: rotate(180deg)
            }
        }
    }
    .packMore{
        animation-name:move;
        animation-duration:100s;
        animation-fill-mode:forwards;
        
        @keyframes move {
            from{
                transform: rotate(180deg)
            }

            to{
                transform: rotate(0deg)
            }
        }
    }
}
</style>


