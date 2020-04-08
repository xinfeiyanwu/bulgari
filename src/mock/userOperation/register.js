import Mock from 'mockjs'

const VerificatCode = Math.ceil(Math.random()*10000)

export default Mock.mock('/resister/getVerificatCode', 'get', VerificatCode)