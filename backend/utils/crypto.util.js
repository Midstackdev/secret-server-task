import CryptoJS from 'crypto-js'
import { createHash } from 'crypto'

export const encrypt = (text) => {
    return CryptoJS.AES.encrypt(text, process.env.JWT_SECRET).toString();
}

export const decrypt = (encryptedText) => {
    const bytes  = CryptoJS.AES.decrypt(encryptedText, process.env.JWT_SECRET);
    return bytes.toString(CryptoJS.enc.Utf8);
}

export const hash = (hashable) => {
    return createHash("md5").update(hashable).digest("hex");
}