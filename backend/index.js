import express from 'express'
import dotenv from 'dotenv/config'
import path from 'path'
import { fileURLToPath } from 'url'
import { connectToDB } from './config/db.js'
import { setEnvironment } from './config/env.js'
import { registerRoutes } from './routes/index.js'

const app = express()
const PORT = process.env.PORT || 5000

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

connectToDB()
setEnvironment(app)

if(process.env.NODE_ENV === 'development') {
    app.get('/', (req, res) => {
        res.send('Server is ready')
    })
}

registerRoutes(app)

if(process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../frontend/build')));
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../frontend/build/index.html'));
    });
}



app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const body = err.body || {};

    res.status(statusCode).json({ 
        statusCode,
        success: false,
        type: 'error',
        message: err.message,
        body
    })
});

app.listen(PORT, () => {
    console.log(`Node env is ${process.env.NODE_ENV}`)
    console.log(`Server is running on port ${PORT}`)
})