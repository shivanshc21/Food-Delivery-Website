import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import { foodRouter } from "./routes/food.route.js";
import dotenv from "dotenv";
dotenv.config();



// app config
const app = express()
const port = 8000

//middleware
app.use(express.json())
app.use(cors())

// db connection
connectDB();

// routes
app.use("/api/food",foodRouter)
app.use("/images",express.static('uploads'))

app.get("/",(req, res) => {
    res.send("API is working")
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
})

// mongodb+srv://shivanshchaurasiya2004:shiv20042003@cluster0.rkxispa.mongodb.net/?