import mongoose from 'mongoose'
import { encrypt, decrypt } from '../utils/crypto.util.js'

const secretSchema = mongoose.Schema({
    text: { 
        type: String, 
        require: true,
        set: encryptText,
        get: decryptText 
    },
    user: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User', 
        require: true, 
    },
    shared: {
        type: Array,
        default: []
    }
}, 
    { toJSON: { getters: true }},
    { timestamps: true },
)

function encryptText (text) {
    return encrypt(text);
}

function decryptText (text) {
    return decrypt(text);
}

export default mongoose.model('Secret', secretSchema)