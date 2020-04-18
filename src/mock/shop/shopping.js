import Mock from 'mockjs';
const dataSource = {
    productData: {
        img: 'https://www.bulgari.cn/media/catalog/product/cache/926507dc7f93631a094422215b778fe0/2/8/288739_001.png',
        ProductType: '钱包',
        productSeriesName: 'BVLGARI BVLGARI男士系列',
        productNO: 289101,
        proIntroduction: '“BVLGARI BVLGARI”炭黑钻石色和鲜绿色粒面小牛皮男士拉链钱夹，炭黑钻石色小羊皮内衬。经典标识配饰，采用镀钯黄铜材质。',
        Coin: '5,100',
        detail: {
            title: '钱包',
            detailWord: '此款手持钱夹以乳蛋白石色金属质感水蛇皮和乳蛋白石色小牛皮制成，饰有镌刻“BVLGARI BVLGARI”标识的浅金镀金黄铜环扣。九个信用卡卡位，两个纸币隔层，一个拉链零钱包。19 x 9 cm. - 7.5 x 3.5"'
        },
        Acc: 'Bulgari宝格丽皮具及配饰均在意大利制造'
    },
    relevCont: {
        relevContList: [
            {
                img: 'https://www.bulgari.cn/media/catalog/product/cache/926507dc7f93631a094422215b778fe0/2/8/287478_001.png',
                ProductType: '名片夹',
                productSeriesName: 'BVLGARI BVLGARI系列',
                relevNO: 289101,
            },
            {
                img: 'https://www.bulgari.cn/media/catalog/product/cache/926507dc7f93631a094422215b778fe0/2/8/287478_001.png',
                ProductType: '名片夹',
                productSeriesName: 'BVLGARI BVLGARI系列',
                relevNO: 289101,
            },
            {
                img: 'https://www.bulgari.cn/media/catalog/product/cache/926507dc7f93631a094422215b778fe0/2/8/287478_001.png',
                ProductType: '名片夹',
                productSeriesName: 'BVLGARI BVLGARI系列',
                relevNO: 289101,
            },
            {
                img: 'https://www.bulgari.cn/media/catalog/product/cache/926507dc7f93631a094422215b778fe0/2/8/287478_001.png',
                ProductType: '名片夹',
                productSeriesName: 'BVLGARI BVLGARI系列',
                relevNO: 289101,
            },
            {
                img: 'https://www.bulgari.cn/media/catalog/product/cache/926507dc7f93631a094422215b778fe0/2/8/287478_001.png',
                ProductType: '名片夹',
                productSeriesName: 'BVLGARI BVLGARI系列',
                relevNO: 289101,
            },
            {
                img: 'https://www.bulgari.cn/media/catalog/product/cache/926507dc7f93631a094422215b778fe0/2/8/287478_001.png',
                ProductType: '名片夹',
                productSeriesName: 'BVLGARI BVLGARI系列',
                relevNO: 289101,
            }
        ],
        moreSortList: [
            {
                img: 'https://www.bulgari.cn/media/catalog/product/cache/926507dc7f93631a094422215b778fe0/2/8/287478_001.png',
                ProductType: '名片夹',
                productSeriesName: 'BVLGARI BVLGARI系列',
                moreNO: 289101,
            },
            {
                img: 'https://www.bulgari.cn/media/catalog/product/cache/926507dc7f93631a094422215b778fe0/2/8/287478_001.png',
                ProductType: '名片夹',
                productSeriesName: 'BVLGARI BVLGARI系列',
                moreNO: 289101,
            },
            {
                img: 'https://www.bulgari.cn/media/catalog/product/cache/926507dc7f93631a094422215b778fe0/2/8/287478_001.png',
                ProductType: '名片夹',
                productSeriesName: 'BVLGARI BVLGARI系列',
                moreNO: 289101,
            }
        ]
    },
    latelyLookList: [
            {
                img: 'https://www.bulgari.cn/media/catalog/product/cache/926507dc7f93631a094422215b778fe0/2/8/287478_001.png',
                ProductType: '名片夹',
                productSeriesName: 'BVLGARI BVLGARI系列',
                latelyNO: 289101,
            },
            {
                img: 'https://www.bulgari.cn/media/catalog/product/cache/926507dc7f93631a094422215b778fe0/2/8/287478_001.png',
                ProductType: '名片夹',
                productSeriesName: 'BVLGARI BVLGARI系列',
                latelyNO: 289101,
            },
            {
                img: 'https://www.bulgari.cn/media/catalog/product/cache/926507dc7f93631a094422215b778fe0/2/8/287478_001.png',
                ProductType: '名片夹',
                productSeriesName: 'BVLGARI BVLGARI系列',
                latelyNO: 289101,
            }
        ]
}
const dataSource1 = {
    productData: {
        img: 'https://www.bulgari.cn/media/catalog/product/cache/926507dc7f93631a094422215b778fe0/2/9/290306_001.png',
        ProductType: '钱包',
        productSeriesName: 'BVLGARI BVLGARI男士系列',
        productNO: 289102,
        proIntroduction: '“BVLGARI BVLGARI”炭黑钻石色和鲜绿色粒面小牛皮男士拉链钱夹，炭黑钻石色小羊皮内衬。经典标识配饰，采用镀钯黄铜材质。',
        Coin: '5,100',
        detail: {
            title: '钱包',
            detailWord: '此款手持钱夹以乳蛋白石色金属质感水蛇皮和乳蛋白石色小牛皮制成，饰有镌刻“BVLGARI BVLGARI”标识的浅金镀金黄铜环扣。九个信用卡卡位，两个纸币隔层，一个拉链零钱包。19 x 9 cm. - 7.5 x 3.5"'
        },
        Acc: 'Bulgari宝格丽皮具及配饰均在意大利制造'
    },
    relevCont: {
        relevContList: [
            {
                img: 'https://www.bulgari.cn/media/catalog/product/cache/926507dc7f93631a094422215b778fe0/2/9/290306_001.png',
                ProductType: '名片夹',
                productSeriesName: 'BVLGARI BVLGARI系列',
                relevNO: 289102,
            },
            {
                img: 'https://www.bulgari.cn/media/catalog/product/cache/926507dc7f93631a094422215b778fe0/2/9/290306_001.png',
                ProductType: '名片夹',
                productSeriesName: 'BVLGARI BVLGARI系列',
                relevNO: 289102,
            },
            {
                img: 'https://www.bulgari.cn/media/catalog/product/cache/926507dc7f93631a094422215b778fe0/2/9/290306_001.png',
                ProductType: '名片夹',
                productSeriesName: 'BVLGARI BVLGARI系列',
                relevNO: 289102,
            },
            {
                img: 'https://www.bulgari.cn/media/catalog/product/cache/926507dc7f93631a094422215b778fe0/2/9/290306_001.png',
                ProductType: '名片夹',
                productSeriesName: 'BVLGARI BVLGARI系列',
                relevNO: 289102,
            },
            {
                img: 'https://www.bulgari.cn/media/catalog/product/cache/926507dc7f93631a094422215b778fe0/2/9/290306_001.png',
                ProductType: '名片夹',
                productSeriesName: 'BVLGARI BVLGARI系列',
                relevNO: 289102,
            },
            {
                img: 'https://www.bulgari.cn/media/catalog/product/cache/926507dc7f93631a094422215b778fe0/2/9/290306_001.png',
                ProductType: '名片夹',
                productSeriesName: 'BVLGARI BVLGARI系列',
                relevNO: 289102,
            }
        ],
        moreSortList: [
            {
                img: 'https://www.bulgari.cn/media/catalog/product/cache/926507dc7f93631a094422215b778fe0/2/9/290306_001.png',
                ProductType: '名片夹',
                productSeriesName: 'BVLGARI BVLGARI系列',
                moreNO: 289102,
            },
            {
                img: 'https://www.bulgari.cn/media/catalog/product/cache/926507dc7f93631a094422215b778fe0/2/9/290306_001.png',
                ProductType: '名片夹',
                productSeriesName: 'BVLGARI BVLGARI系列',
                moreNO: 289102,
            },
            {
                img: 'https://www.bulgari.cn/media/catalog/product/cache/926507dc7f93631a094422215b778fe0/2/9/290306_001.png',
                ProductType: '名片夹',
                productSeriesName: 'BVLGARI BVLGARI系列',
                moreNO: 289102,
            }
        ]
    },
    latelyLookList: [
            {
                img: 'https://www.bulgari.cn/media/catalog/product/cache/926507dc7f93631a094422215b778fe0/2/9/290306_001.png',
                ProductType: '名片夹',
                productSeriesName: 'BVLGARI BVLGARI系列',
                latelyNO: 289102,
            },
            {
                img: 'https://www.bulgari.cn/media/catalog/product/cache/926507dc7f93631a094422215b778fe0/2/9/290306_001.png',
                ProductType: '名片夹',
                productSeriesName: 'BVLGARI BVLGARI系列',
                latelyNO: 289102,
            },
            {
                img: 'https://www.bulgari.cn/media/catalog/product/cache/926507dc7f93631a094422215b778fe0/2/9/290306_001.png',
                ProductType: '名片夹',
                productSeriesName: 'BVLGARI BVLGARI系列',
                latelyNO: 289102,
            }
        ]
}
export default Mock.mock(/\/shopping\?productNO=[0,9]{0,}/, 'get', (option)=>{
    const NO = option.url.split('=')[1];
    return NO == 289101 ? dataSource : dataSource1;
});