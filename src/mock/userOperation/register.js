import Mock from 'mockjs'

export default Mock.mock('/resister', 'post', (option) => {
    console.log(option)
    return {code: 200, msg: '注册号码成功!'}
})