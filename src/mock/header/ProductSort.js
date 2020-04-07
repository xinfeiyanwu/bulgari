import Mock  from 'mockjs'

const ProductSortList = [
    {
        ProductSortType: '女士',
        ProductList: [
            {
                type: 'SERPENTI SEDUTTORI',
                ImgUrl: require('../../assets/header/productSort/pictureShow_1.jpg'),
            },
            {
                type: 'Serpenti',
                ImgUrl: require('../../assets/header/productSort/pictureShow_2.jpg'),
            },
            {
                type: 'Lvcea',
                ImgUrl: require('../../assets/header/productSort/pictureShow_3.png'),
            },
            {
                type: 'Bvlgari Bvlgari',
                ImgUrl: require('../../assets/header/productSort/pictureShow_4.jpg'),
            },
            {
                type: 'B.zero1',
                ImgUrl: require('../../assets/header/productSort/pictureShow_5.jpg'),
            },
            {
                type: "Divas' Dream",
                ImgUrl: require('../../assets/header/productSort/pictureShow_6.jpg'),
            },
            {
                type: "高级珠宝腕表",
                ImgUrl: require('../../assets/header/productSort/pictureShow_7.jpg'),
            },
        ]
    },
    {
        ProductSortType: '男士',
        ProductList: [
            {
                type: 'Octo',
                ImgUrl: require('../../assets/header/productSort/pictureShow_1.jpg'),
            },
            {
                type: 'Bvlgari Bvlgari',
                ImgUrl: require('../../assets/header/productSort/pictureShow_2.jpg'),
            },
            {
                type: 'Diagono',
                ImgUrl: require('../../assets/header/productSort/pictureShow_3.png'),
            },
            {
                type: 'Haute Horlogerie',
                ImgUrl: require('../../assets/header/productSort/pictureShow_4.jpg'),
            },
            {
                type: 'Gerald Genta',
                ImgUrl: require('../../assets/header/productSort/pictureShow_5.jpg'),
            },
        ]
    }
]

export default Mock.mock('/header/productSortNav/productSort/', 'get', ProductSortList)