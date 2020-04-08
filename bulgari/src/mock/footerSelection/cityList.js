import Mock from 'mockjs'

const cityList = [
    {name: '北京', value:1},
    {name: '上海', value:2},
    {name: '海口', value:3},
]

export default Mock.mock('/cityList', 'get', cityList)