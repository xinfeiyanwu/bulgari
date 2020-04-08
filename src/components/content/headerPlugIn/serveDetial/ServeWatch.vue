<template>
    <div class="ServeWatch">

        <h2>{{this.$route.params.type}}</h2>

        <p>
            您的BVLGARI宝格丽腕表是珍贵的时计杰作，强烈建议由我们的专业制表师进行定期保养。合理的维护可保证腕表性能可靠，寿命长久。
        </p>
        <p>
            如果您对我们的服务有任何疑问或需要了解更多信息，诚邀您联系我们的
            <a href="https://www.bulgari.cn/zh-cn/contactus/" data-cl-id="2086267040">
            客户服务</a>人员：您可于北京时间周一至周日9:00至23:00致电400 000 6699，也可发送电子邮件至
            <a href="mailto:contactchina@bulgari.com" data-cl-id="3621018031">contactchina@bulgari.com</a>，
            或者直接前往<a href="https://www.bulgari.cn/zh-cn/storelocator/" data-cl-id="1334938796">BVLGARI宝格丽精品店</a>
            或授权零售商。
        </p>

        <el-row type="flex" justify="center">
            <el-col :span="18">
                <el-carousel indicator-position="outside" class="carousel" :autoplay="false" height="1200px">
                    <el-carousel-item v-for="(item,index) in watchList" :key="index" >
                        <img :src="item.url" alt="item.url">
                        <h4>{{`${index + 1}/${watchList.length}`}}</h4>
                        <div class="worldDetialBox">
                            <p>{{item.worldTitle}}</p>
                            <div class="worldDetial" v-html="item.worldDetial"></div>
                        </div>
                    </el-carousel-item>
                </el-carousel>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    name: 'ServeWatch',
    data() {
      return {
        watchList: [
            {
                url: require('../../../../assets/header/serve/ServeWatch/after-sales_wbu_slide3.jpg'),
                worldTitle: '基础服务',
                worldDetial:`
                                <p>我们的合格制表师将确保BVLGARI宝格丽腕表的正常运行，同时特别注重防水性和机芯运行情况。</P>
                                    <ul>
                                        <li>建议保养周期：每隔两到三年</li>
                                        <li>服务项目包括*：</li>
                                        <ul>
                                            <li>- 机芯检查；</li>
                                            <li>- 必要情况下对所有垫圈进行替换（密封防水性）；</li>
                                            <li>- 电池更换（石英表）；</li>
                                            <li>- 走时检测和调校（机械表）；</li>
                                            <li>- 超声波检查表壳及金属表链清洁；</li>
                                            <li>- 必要情况下（通过空气和水）进行防水测试**；</li>
                                            <li>- 完成48小时测试。</li>
                                        </ul>
                                    </ul>
                                    <p>所有维修均提供为期12个月的保修。保修范围涵盖服务所需的工时和备件。不包括因意外、操作不当（撞击、挤压等）或由非BVLGARI宝格丽售后服务中心维修而导致的损坏。维修保修完全独立于购买保修。<br>* 替换服务中不包含的受损部件需额外收费。<br>** 某些腕表的防水功能可能无法修复。</p>
                            `
            },
            {
                url: require('../../../../assets/header/serve/ServeWatch/after-sales_wbu_slide2.jpg'),
                worldTitle: '全面服务',
                worldDetial:`
                                我们的合格制表师将检查、复原并确保BVLGARI宝格丽腕表的正常运行，同时特别注重防水性和机芯运行情况。<br>
                                <ul>
                                    <li>建议保养周期：每隔四到五年</li>
                                    <li>服务项目包括*：</li>
                                    <ul>
                                        <li>- 机芯拆检；</li>
                                        <li>- 必要情况下对所有垫圈进行替换（密封防水性）；</li>
                                        <li>- 替换秒针及计数器指针；</li>
                                        <li>- 必要时替换分针和时针；</li>
                                        <li&gt-电池更换（石英表）；< li="">
                                        <li>- 表壳抛光和/或超声波清洁；</li>
                                        <li>- 金属表链检查、抛光和/或超声波清洁；</li>
                                        <li>- 必要情况下（通过空气和水）进行防水测试**；</li>
                                        <li>- 完成48小时测试。</li>
                                        </li&gt-电池更换（石英表）；<>
                                    </ul>
                                </ul>
                                <p>所有维修均提供为期12个月的保修。保修范围涵盖服务所需的工时和备件。不包括因意外、操作不当（撞击、挤压等）或由非BVLGARI宝格丽售后服务中心维修而导致的损坏。维修保修完全独立于购买保修。<br><br>* 替换服务中不包含的受损部件需额外收费。 <br>** 某些腕表的防水功能可能无法修复。</p>
                            `
            },
            {
                url: require('../../../../assets/header/serve/ServeWatch/after-sales_wbu_slide3.jpg'),
                worldTitle: '抛光服务',
                worldDetial: '此项服务可用于恢复腕表的原始光泽。所有外部配件，包括腕表表壳、表链、表冠、按钮及搭扣，均可单独抛光打磨从而恢复原样。每次抛光去除腕表微小的金属表层。抛光的最高次数因佩戴情况而定。但是在腕表的整个生命周期中，抛光次数建议不超过七次。此服务只能与基础服务或全面服务共同进行。全面服务中涵盖抛光。'
            },
            {
                url: require('../../../../assets/header/serve/ServeWatch/after-sales_wbu_slide4.jpg'),
                worldTitle: '表链服务',
                worldDetial:`
                                <ul>
                                    <li>- 添加或减少表链链节以调整表链长度</li>
                                    <li>- 金属表链、真皮表带或橡胶表带的更换</li>
                                    <li>- 必要时打孔</li>
                                    <li>- 搭扣更换</li>
                                    <li>- 调整搭扣</li>
                                </ul>
                            `
            },
            {
                url: require('../../../../assets/header/serve/ServeWatch/after-sales_wbu_slide5.jpg'),
                worldTitle: '标准表带组合',
                worldDetial: '您可以通过更换真皮表带来个性化您的腕表。任意一家BVLGARI宝格丽精品店和授权零售商均提供完整的表带类型。包括多种颜色、皮质和织物等。BVLGARI宝格丽表带做工讲究，注重如特定插件、表带末端及填充等细节。BVLGARI宝格丽只甄选优质材料和珍贵皮革，以卓越工艺进行打造。'
            },
        ]
      };
    },
    beforeMount(){
        console.log(this.$route.params.type)
    }
    
}
</script>

<style lang="less">
.ServeWatch{
    margin: 40px 20px;

    h2{text-align: center;}

    > p {
        text-align: left;
    }

    .carousel{
        margin-top: 40px;
        text-align: center;

        .worldDetialBox{
            text-align: left;
            .worldDetial > ul {
                list-style: disc;
                padding-left: 25px;
                
            }
        }

        .el-carousel__arrow{
            height: 50px;
            width: 50px;
            background-color: rgba(147, 179, 215, 0.5);
            .el-carousel__arrow i{
                font-size: 22px;
            }
        }

        .el-carousel__indicators--outside{
            display: none;
        }
    }   
}
</style>


