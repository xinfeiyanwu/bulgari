import Mock from 'mockjs'
import { JSEncrypt } from 'jsencrypt'

const privkey = `
                    -----BEGIN PRIVATE KEY-----
MIICdgIBADANBgkqhkiG9w0BAQEFAASCAmAwggJcAgEAAoGBAPcHdyeUrffqUdCN
7nf6YiH98fMYUEC0fpqWoNdrgua5My7AFCoEEiD4cghv3TTXCZwwVDC54gb/+9XX
XZRJZ5kE6/WArzq4M812xPV0opCJVMrTghfGuWVrbVaDcDbf/f+6cWjJpTvdGEu5
HTIGpwvrU60Y8LLDdtMP7f0GbkFRAgMBAAECgYBBSM/MvhZb9qk4nMnxG1Lj+OEA
heRvtUPgRv6q79bgcwF70XeCwyCnZgF9CVNEq6/2fy9A0V9SykQb95bboaqm2SI7
6J105bx14di5rq0QgaQwls96sRlqW9kCukJWJWO656dl90zoUUVDvVZN2jZ/HVOt
71bnqvn3CluPsRLloQJBAPxv1tC85nGg9Lc5J0noNnee+PVYgglzW8yPzMu8POPr
3RWnkjwNGNmRB79brY3P3lvvsWzESa26r57gA1cEDAcCQQD6hBYDaEGLugzrUTjV
IyD536U+xHah5fjAg+3w29GqzxYPSv8hW5ngcgaRbw2/IcVUdp4YppJxWbqc4oyY
UaHnAkEAgBSuxdJSiizEfYJ+ML2lhSQf5Tw3Hlxto2kC3AxySKKP1kDjrZxnk1xG
tgzqDh3+EF+ZgjpFt+QU32OBzlC7WQJAdwhz/UJ4go/wu49oVb3PWWtu9Rgc1miT
fcYyNRP92A92B+Y2u/7uartDa6889Ohy/uMt08CyLLHZ/dmXvHhtWQJAEUZUFE5B
iwy3odfkIv2spUnduuatXEo23xO5HWTyGUYxjdW2NwsnKC+IzQjse0vDqF0Uw/B2
/QeS1IbuTFnXfQ==
                    -----END PRIVATE KEY-----
`

const NumberList = [
    {
        num: '11111111111',
        psw: 'admin'
    },
    {
        num: '12345678912',
        psw: 'werwefds232'
    },
    {
        num: '12345678921',
        psw: 'tregdfd3243'
    },
    {
        num: '12345678931',
        psw: 'tryrtyrty'
    },
    {
        num: '12345678904',
        psw: 'tretds423ds'
    }
]
const loginResult = [
    {    
        code: 200,
        msg: '登录成功',
        num: 11111111111,
        token: '1231daw23423sfadsad',
    },
    {
        code: 110,
        msg: '密码错误',
    },
    {
        code: 111,
        msg: '账号不存在',
    },
]

export default Mock.mock('/login', 'post', (options)=>{
    let decrypt = new JSEncrypt();
    let data = JSON.parse(options.body);
    //解密
    decrypt.setPrivateKey(privkey)
    for(let key in data){
        data[key] = decrypt.decrypt(data[key]);
    }
    //检查登录状态
    //先检查电话是否存在，如果不存在就是没注册过。接下来检测密码是否正确
    //密码正确则登录成功;不正确返回登录密码错误状态。
    //检查电话是否存在可以反向思维，就是如果已经检测到电话号码存在了
    //也就是不存在电话号码不存在的可能。只有检测完毕都没检测到电话号码，才是电话号码没注册过。这时候才返回账号不存在。
    for(let i=0;i<NumberList.length;i++){
        if(NumberList[i].num == data.Number) {
            if(NumberList[i].psw == data.psw) {
                console.log('Success');
                return loginResult[0]
            }
            else{
                console.log('pswError');
                return loginResult[1]
            }
        }
    }
    console.log('NumberError')

    return loginResult[2]
})