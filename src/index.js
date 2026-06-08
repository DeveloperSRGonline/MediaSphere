import dotenv from "dotenv"
import connectToDB from "./db/db.js"

dotenv.config({
    path: "./.env"
})
connectToDB()
.then(()=>{
    app.listen(process.env.PORT || 3000,()=>{
        console.log(`⚙️ server is running on port ${process.env.PORT}`)
    })
})
.catch((err) => {
    console.log("Mongodb connection failed !!! ",err)
})

