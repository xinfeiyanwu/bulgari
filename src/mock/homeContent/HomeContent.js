import Mock from 'mockjs'

const HomeContentList = {
    HomeBannerImg: 'acs',
    swiperList: [
        {
            img: 'carousel1',
            productName: 'Fiorever咏绽系列 项链',
            shopLink: ''
        },
        {
            img: 'carousel2',
            productName: 'Fiorever咏绽系列 项链',
            shopLink: ''
        },
        {
            img: 'carousel3',
            productName: 'Fiorever咏绽系列 项链',
            shopLink: ''
        },
        {
            img: 'carousel4',
            productName: 'Fiorever咏绽系列 项链',
            shopLink: ''
        },
        {
            img: 'carousel5',
            productName: 'Fiorever咏绽系列 项链',
            shopLink: ''
        },
    ],
    FIOREVER: {
        img: 'Hero-840x500',
        description: 'Fiorever咏绽系列象征着罗马人对生活的热情，是对自然之美的真挚歌颂。Fiorever咏绽系列珠宝搭配灵动上扬的密镶钻石花瓣，为自由不羁的女性特别设计，散发着令人难以抵挡的乐观精神与蓬勃朝气。',
        shopBtn: '购买此系列'
    }
}

export default Mock.mock('/HomeContentList','get', HomeContentList)