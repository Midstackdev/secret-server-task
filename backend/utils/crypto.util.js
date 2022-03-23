import CryptoJS from 'crypto-js'

export const encrypt = (text) => {
    return CryptoJS.AES.encrypt(text, process.env.JWT_SECRET).toString();
}

export const decrypt = (encryptedText) => {
    const bytes  = CryptoJS.AES.decrypt(encryptedText, process.env.JWT_SECRET);
    return bytes.toString(CryptoJS.enc.Utf8);
}