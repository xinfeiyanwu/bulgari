import Mock from 'mockjs'

const menuDataList = [
    {
        type: '产品系列',
        menuList: [
            'Daniel Roth(11)',
            'Daniel Roth(11)',
            'Daniel Roth(11)',
            'Daniel Roth(11)',
            'Daniel Roth(11)',
        ]
    },
    {
        type: '表带材质',
        menuList: [
            'Daniel Roth(11)',
            'Daniel Roth(11)',
            'Daniel Roth(11)',
            'Daniel Roth(11)',
            'Daniel Roth(11)',
        ]
    },
    {
        type: '功能',
        menuList: [
            'Daniel Roth(11)',
            'Daniel Roth(11)',
            'Daniel Roth(11)',
            'Daniel Roth(11)',
            'Daniel Roth(11)',
        ]
    },
    {
        type: '机芯类型',
        menuList: [
            'Daniel Roth(11)',
            'Daniel Roth(11)',
            'Daniel Roth(11)',
            'Daniel Roth(11)',
            'Daniel Roth(11)',
        ]
    },
    {
        type: '表带材质',
        menuList: [
            'Daniel Roth(11)',
            'Daniel Roth(11)',
            'Daniel Roth(11)',
            'Daniel Roth(11)',
            'Daniel Roth(11)',
        ]
    },
    {
        type: '表带材质',
        menuList: [
            'Daniel Roth(11)',
            'Daniel Roth(11)',
            'Daniel Roth(11)',
            'Daniel Roth(11)',
            'Daniel Roth(11)',
        ]
    },
]

export default Mock.mock('/ShoppingSelect/menuDataList', 'get', menuDataList)