import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()

app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}))

// to add limit to data comming from different ways json,routes,etc.
app.use(express.json({limit:"16kb"}))

// extended meand object inside object
app.use(express.urlencoded({extended:true,limit:"16kb"}))

// resources comming can store in public folder (public assets)
app.use(express.static("public"))

// to access browser cookies (use,remove,etc.)
app.use(cookieParser())

export default app