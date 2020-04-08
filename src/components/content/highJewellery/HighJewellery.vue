<template>
    <div class="HighJewellery">

        <h2>高级珠宝</h2>

        <el-row>
            <el-col :span="12">
                <img src="../../../assets/homePage/highJewellery/1260x960_gioiello.jpg" alt="">
                <div class="magnificent">
                    <h5>瑰丽作品</h5>
                    <p>精美绝伦的宝石、新颖别致的设计搭配精湛工艺，成就令人赞叹不已的珠宝作品。</p>
                    <router-link to="/">探索经典隽永的珠宝系列</router-link>
                </div>
            </el-col>
            <el-col :span="12">
                <img src="../../../assets/homePage/highJewellery/1280x960_modella.jpg" alt="">
                <div class="CINEMAGI">
                    <h5>CINEMAGIA系列</h5>
                    <p>当奇妙的电影世界邂逅BVLGARI宝格丽魅力珠宝，会碰撞出怎样的火花？探索全新Cinemagia高级珠宝系列。</p>
                    <router-link to="/">欣赏该系列</router-link>
                </div>
            </el-col>
        </el-row>

        <el-row style="margin-top: 50px;">
            <el-col>
                <img  style="min-height: 240px;" src="../../../assets/homePage/highJewellery/1920x360.jpg" alt="">
                <div class="jeweler">
                    <h5>罗马高级珠宝商</h5>
                    <p>珍贵宝石、令人惊叹的工艺搭配现代动感的设计，尽显充满魅力的罗马美学</p>
                    <router-link to="/">探索高级珠宝艺术</router-link>
                </div>
            </el-col>
        </el-row>


    </div>
</template>

<script>
export default {
    name: 'HighJewellery',
}
</script>

<style lang="less" scoped>
    .HighJewellery{
        margin-top: 180px;
        text-align: center;

        h2{
            font-size: 24px;
            font-weight: 100;
        }

        .el-col{
            position: relative;
            .magnificent{
                position: absolute;
                right: 0;
                bottom: 30%;
                width: 60%;
                background: #ffffff52;
            }

            .CINEMAGI{
                position: absolute;
                right: 0;
                bottom: 30%;
                width: 60%;
                background: #ffffff52;
            }

            .jeweler{
                position: absolute;
                left: 20px;
                bottom: 15%;;
                width: 50%;
                background: #ffffff52;
            }

            h5{
                padding: 20px 0;
                font-size: 20px;
                letter-spacing: 4px;
            }
            a{
                margin: 15px 0;
                display: inline-block;    
                font-size: 16px;
                padding: 9px 10px;
                background: #000;
                color: #fff;
            }
        }
    }
</style>


