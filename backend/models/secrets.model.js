import mongoose from 'mongoose'

const secretSchema = mongoose.Schema({
    text: { type: String, require: true, },
    user: { 
        type: mongoose.Schema.Types.ObjectId, 
        requrefire: 'User', 
        require: true, 
    },
}, 
    { timestamps: true }
)

export default mongoose.model('Secret', secretSchema)