import express from "express"
import dotenv from "dotenv"
import router from "./router/router"
dotenv.config()

const app = express()

const PORT = process.env.PORT ?? 3000

app.use('/api', router)

app.listen(PORT, () => {
    console.log(`СЕРВЕР ЗАПУШЕН НА ПОРТУ ${PORT}...`)
})