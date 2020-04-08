<template>
    <div class="ServeAccess">

        <h2>{{this.$route.params.type}}</h2>

        <p>
            我们承诺为您提供高水准的珠宝养护服务。
            精品店内的BVLGARI宝格丽专家将竭诚为您提供建议和服务，
            对您的珠宝进行个性定制或修复，或单纯保持其美感和寿命。
            同时您也可以莅临宝格丽官方在线维修中心进行作品的养护服务。
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
                <el-carousel indicator-position="outside" class="carousel" height="1200px" :autoplay="false">
                    <el-carousel-item v-for="(item,index) in ServeAccessList" :key="index">
                        
                        <div ref="carouselbox" class="carouselbox">
                            <img :src="item.url" alt="item.url">
                            <h4>{{`${index+1}/${ServeAccessList.length}`}}</h4>
                            <p>{{item.serveTitle}}</p>
                            <p>{{item.serveDetail}}</p>
                        </div>
                    </el-carousel-item>
                </el-carousel>
            </el-col>
        </el-row>

    </div>
</template>

<script>
export default {
    name: 'ServeAccess',
    data() {
      return {
        ServeAccessList: [
            {
                url: require('../../../../assets/header/serve/ServeAccess/after-sales-acc_slide1.jpg'),
                serveTitle: '清洁和抛光服务',
                serveDetail: '建议您每年将珠宝携带至BVLGARI宝格丽精品店，进行检查并恢复其原有光彩。经过仔细检查，我们的专家会根据其特性与状况向您推荐简单清洁、超声波清洁或抛光，以去除表面的划痕，恢复闪亮，使寿命更长久。白色18K金珠宝的抛光服务包括必要时的镀铑，以增强金属的光泽。在进行每项服务时，还会伴有专业的质量检查，确保每一枚宝石都镶嵌牢固，且功能部件（如搭扣和安全锁）正常工作。'
            },
            {
                url: require('../../../../assets/header/serve/ServeAccess/after-sales-acc_slide2.jpg'),
                serveTitle: '镌刻服务',
                serveDetail: '您可以在贵重金属上镌刻名字、日期或其他信息，对BVLGARI宝格丽珠宝进行个性化定制（该项服务受技术和可用空间制约）。在购买时或购买一个月内，您可以向BVLGARI宝格丽精品店要求为您提供镌刻服务，该服务由珠宝师执行。'
            },
            {
                url: require('../../../../assets/header/serve/ServeAccess/after-sales-acc_slide3.jpg'),
                serveTitle: '尺寸调整服务',
                serveDetail: '此项服务的实施对象包括手镯、项链、手链和戒指，内容为在限定范围内增大或缩小产品尺寸，但不影响其美感、舒适度和品质。 '
            },
            {
                url: require('../../../../assets/header/serve/ServeAccess/after-sales-acc_slide4.jpg'),
                serveTitle: '耳环服务',
                serveDetail: '您可以调整耳环夹以获得更佳的舒适度。为更贴合您的耳洞，其大小、松紧均可进行调整。大部分款式的后耳托可以增加或移除。'
            },
            {
                url: require('../../../../assets/header/serve/ServeAccess/after-sales-acc-slide5.jpg'),
                serveTitle: '维修服务',
                serveDetail: '您的珠宝是珍贵的杰作。使用和处理时进行合理的养护能让其闪耀魅力经久不衰。如果您的珠宝受到撞击或出现损坏的痕迹，在由BVLGARI宝格丽精品店或授权零售商的专家进行检查之前，应避免佩戴该珠宝。我们的专家会对您的珠宝进行细心的护理，仔细检查宝石镶嵌、搭扣功能和美观细节。他们会替换丢失的部件，修理或复原破损的部件，使您的BVLGARI宝格丽珠宝恢复美感。当评估得出所需要实施的服务类型之后，您将收到报价。如您接受报价，相应的服务将尽快实施。'
            },
            {
                url: require('../../../../assets/header/serve/ServeAccess/after-sales-acc_slide6.jpg'),
                serveTitle: '维修服务',
                serveDetail: '您的珠宝是珍贵的杰作。使用和处理时进行合理的养护能让其闪耀魅力经久不衰。如果您的珠宝受到撞击或出现损坏的痕迹，在由BVLGARI宝格丽精品店或授权零售商的专家进行检查之前，应避免佩戴该珠宝。我们的专家会对您的珠宝进行细心的护理，仔细检查宝石镶嵌、搭扣功能和美观细节。他们会替换丢失的部件，修理或复原破损的部件，使您的BVLGARI宝格丽珠宝恢复美感。当评估得出所需要实施的服务类型之后，您将收到报价。如您接受报价，相应的服务将尽快实施。'
            },
        ],
        type: '',
        height: '300px'
      };
    },
    beforeMount(){
        console.log(this.$route.params.type)
    }
    
}
</script>

<style lang="less">
.ServeAccess{
    margin: 40px 20px;

    h2{text-align: center;}

    > p {
        text-align: left;
    }

    .carousel{
        margin-top: 40px;
        text-align: center;

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


