import { JSEncrypt } from 'jsencrypt'

export const publicKey =   `
                    -----BEGIN PUBLIC KEY-----
                    MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQD3B3cnlK336lHQje53+mIh/fHz
                    GFBAtH6alqDXa4LmuTMuwBQqBBIg+HIIb9001wmcMFQwueIG//vV112USWeZBOv1
                    gK86uDPNdsT1dKKQiVTK04IXxrlla21Wg3A23/3/unFoyaU73RhLuR0yBqcL61Ot
                    GPCyw3bTD+39Bm5BUQIDAQAB
                    -----END PUBLIC KEY-----
                    `

//加密
export function encryptedData(publicKey, data) {
    // 新建JSEncrypt对象
    let encryptor = new JSEncrypt();
    // 设置公钥
    encryptor.setPublicKey(publicKey);
    // 加密数据
    for(let key in data){
        data[key] = encryptor.encrypt(data[key]);
    }
    // console.log(data);
    return data;
}