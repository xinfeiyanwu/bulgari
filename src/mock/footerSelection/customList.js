import Mock from 'mockjs'

const customist = [
    {name: '中国', value:1},
    {name: '俄罗斯', value:2},
    {name: '英国', value:3},
    {name: '日本', value:4},
    {name: '韩国', value:5},
    {name: '越南', value:6},
    {name: '加拿大', value:7},
    {name: '意大利', value:8},
]

export default Mock.mock('/customList', 'get', customist)