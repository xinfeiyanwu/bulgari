import Mock from 'mockjs'

const SeriesProduct = {
    Description: {
        title: '腕表 - BVLGARI∙BVLGARI',
        description: '在各大文明的神话故事中，灵蛇是古老和勇敢的象征。BVLGARI宝格丽为该象征符号注入新的生命：通过不断重新设计和选材，成为品牌风格的一大里程碑。',
    },
    AllProductList: [
        {
            productType: 'BVLGARI BVLGARI Carbon Gold系列',
            productList: [
                {
                    ImgUrl: 'watch1',
                    productType: '腕表',
                    productName: 'Serpenti Seduttori鎏光蛇影',
                    cost: '12,662',                 
                    saleType: 'onlineSale',
                    character: [
                        {
                            type: '产品系列',
                            menuList: [
                                'Daniel Roth(11)',
                            ]
                        },
                    ]
                },
                {
                    ImgUrl: 'watch4',
                    productType: '腕表',
                    productName: 'Serpenti Seduttori鎏光蛇影',
                    cost: '34,662',                 
                    saleType: 'onlineSale',
                },
                {
                    ImgUrl: 'watch3',
                    productType: '腕表',
                    productName: 'Serpenti Seduttori鎏光蛇影',
                    cost: '34,333',                 
                    saleType: 'All',
                },
                {
                    ImgUrl: 'watch2',
                    productType: '腕表',
                    productName: 'Serpenti Seduttori鎏光蛇影',
                    cost: '34,111',                 
                    saleType: 'onlineSale',
                },
                {
                    ImgUrl: 'watch',
                    productType: '腕表',
                    productName: 'Serpenti Seduttori鎏光蛇影',
                    cost: '22,111',                 
                    saleType: 'onlineSale',
                },
                {
                    ImgUrl: 'watch2',
                    productType: '腕表',
                    productName: 'Serpenti Seduttori鎏光蛇影',
                    cost: '12,153',                 
                    saleType: 'onlineSale',
                },
                {
                    ImgUrl: 'watch4',
                    productType: '腕表',
                    productName: 'Serpenti Seduttori鎏光蛇影',
                    cost: '26,153',                 
                    saleType: 'All',
                },
                {
                    ImgUrl: 'watch3',
                    productType: '腕表',
                    productName: 'Serpenti Seduttori鎏光蛇影',
                    cost: '65,153',                 
                    saleType: 'onlineSale',
                },
                {
                    ImgUrl: 'watch1',
                    productType: '腕表',
                    productName: 'Serpenti Seduttori鎏光蛇影',
                    cost: '48,153',                 
                    saleType: 'All',
                },
                {
                    ImgUrl: 'watch2',
                    productType: '腕表',
                    productName: 'Serpenti Seduttori鎏光蛇影',
                    cost: '48,134',                 
                    saleType: 'onlineSale',
                }
            ]
        },
        {
            productType: 'BVLGARI BVLGARI Carbon Gold系列',
            productList: [
                {
                    ImgUrl: 'watch3',
                    productType: '腕表',
                    productName: 'Serpenti Seduttori鎏光蛇影',
                    cost: '42,134',                 
                    saleType: 'onlineSale',
                },
                {
                    ImgUrl: 'watch1',
                    productType: '腕表',
                    productName: 'Serpenti Seduttori鎏光蛇影',
                    cost: '65,134',                 
                    saleType: 'All',
                },
                {
                    ImgUrl: 'watch3',
                    productType: '腕表',
                    productName: 'Serpenti Seduttori鎏光蛇影',
                    cost: '65,434',                 
                    saleType: 'All',
                },
                {
                    ImgUrl: 'watch1',
                    productType: '腕表',
                    productName: 'Serpenti Seduttori鎏光蛇影',
                    cost: '24,434',                 
                    saleType: 'All',
                },
                {
                    ImgUrl: 'watch1',
                    productType: '腕表',
                    productName: 'Serpenti Seduttori鎏光蛇影',
                    cost: '38,434',                 
                    saleType: 'onlineSale',
                },
                {
                    ImgUrl: 'watch',
                    productType: '腕表',
                    productName: 'Serpenti Seduttori鎏光蛇影',
                    cost: '31,434',                 
                    saleType: 'onlineSale',
                },
                {
                    ImgUrl: 'watch1',
                    productType: '腕表',
                    productName: 'Serpenti Seduttori鎏光蛇影',
                    cost: '16,543',                 
                    saleType: 'onlineSale',
                },
                {
                    ImgUrl: 'watch',
                    productType: '腕表',
                    productName: 'Serpenti Seduttori鎏光蛇影',
                    cost: '43,645',                 
                    saleType: 'onlineSale',
                },
                {
                    ImgUrl: 'watch1',
                    productType: '腕表',
                    productName: 'Serpenti Seduttori鎏光蛇影',
                    cost: '43,233',                 
                    saleType: 'onlineSale',
                },
                {
                    ImgUrl: 'watch2',
                    productType: '腕表',
                    productName: 'Serpenti Seduttori鎏光蛇影',
                    cost: '22,611',                 
                    saleType: 'onlineSale',
                },
                {
                    ImgUrl: 'watch2',
                    productType: '腕表',
                    productName: 'Serpenti Seduttori鎏光蛇影',
                    cost: '47,645',                 
                    saleType: 'All',
                },
                {
                    ImgUrl: 'watch4',
                    productType: '腕表',
                    productName: 'Serpenti Seduttori鎏光蛇影',
                    cost: '54,612',                 
                    saleType: 'All',
                },
                {
                    ImgUrl: 'watch3',
                    productType: '腕表',
                    productName: 'Serpenti Seduttori鎏光蛇影',
                    cost: '43,654',                 
                    saleType: 'onlineSale',
                },
                {
                    ImgUrl: 'watch4',
                    productType: '腕表',
                    productName: 'Serpenti Seduttori鎏光蛇影',
                    cost: '43,233',                 
                    saleType: 'All',
                }
            ]
        },
        {
            productType: 'BVLGARI BVLGARI Solotempo系列',
            productList: [
                {
                    ImgUrl: 'watch4',
                    productType: '腕表',
                    productName: 'Serpenti Seduttori鎏光蛇影',
                    cost: '32,222',                 
                    saleType: 'All',
                },
                {
                    ImgUrl: 'watch4',
                    productType: '腕表',
                    productName: 'Serpenti Seduttori鎏光蛇影',
                    cost: '52,222',                 
                    saleType: 'onlineSale',
                },
                {
                    ImgUrl: 'watch',
                    productType: '腕表',
                    productName: 'Serpenti Seduttori鎏光蛇影',
                    cost: '42,216',                 
                    saleType: 'All',
                },
                {
                    ImgUrl: 'watch2',
                    productType: '腕表',
                    productName: 'Serpenti Seduttori鎏光蛇影',
                    cost: '52,222',                 
                    saleType: 'onlineSale',
                },
            ]
        },
        {
            productType: 'BVLGARI ROMA Finissimo系列',
            productList: [
                {
                    ImgUrl: 'watch2',
                    productType: '腕表',
                    productName: 'Serpenti Seduttori鎏光蛇影',
                    cost: '22,000',
                    saleType: 'onlineSale',
                },
                {
                    ImgUrl: 'watch4',
                    productType: '腕表',
                    productName: 'Serpenti Seduttori鎏光蛇影',
                    cost: '21,000',                 
                    saleType: 'onlineSale',
                },
                {
                    ImgUrl: 'watch2',
                    productType: '腕表',
                    productName: 'Serpenti Seduttori鎏光蛇影',
                    cost: '31,000',                 
                    saleType: 'onlineSale',
                },
                {
                    ImgUrl: 'watch3',
                    productType: '腕表',
                    productName: 'Serpenti Seduttori鎏光蛇影',
                    cost: '32,000',                 
                    saleType: 'onlineSale',
                },
            ]
        }
    ],
    total: 30
}

export default Mock.mock('/ShopingSelect/SeriesProduct', 'get', SeriesProduct)