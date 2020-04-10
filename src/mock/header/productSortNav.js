import Mock from 'mockjs'

const contentNav = [
    { type:'bvlgari', name: 'bvlgari品牌', path: false },
    { type:'story', name: '故事', path: '/story/story' },
    { type:'highJewellery', name: '高级珠宝', path: false },
    { type:'Jewellery', name: '珠宝', path: false },
    { type:'BRIDAL', name: 'BRIDAL系列', path: false },
    { type:'watch', name: '腕表', path: false },
    { type:'leatherware', name: '皮具', path: false },
    { type:'accessory', name: '配饰', path: false },
    { type:'perfume', name: '香水', path: false },
    { type:'Gift', name: '礼物', path: false },
    { type:'hotel', name: '宝格丽酒店及度假村', path: '/' },
]

export default Mock.mock('/header/productSortNav/', 'get', contentNav);