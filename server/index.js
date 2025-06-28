import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";
import authRoutes from "./routes/AuthRoutes.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 8800;
const databaseURL = process.env.DATABASE_URL;

app.use(cors({
    origin:[process.env.ORIGIN],
    methods:["GET","POST","PUT","DELETE","PATCH"],
    credentials:true
}))
app.use("/uploads/profiles", express.static("uploads/profiles"));

app.use(cookieParser());
app.use(express.json());

app.use("/api/auth",authRoutes)




const server = app.listen(port, ()=>{
    console.log(`Server is running at http://localhost:${port}`);
})

app.get("/",(req,res,next) =>{
    res.send("Backend is running.")
})

mongoose.connect(databaseURL)
    .then(()=>{
        console.log("Connected to database.");
    })
    .catch((err)=>{
         console.log("Database connection error.",err);
         process.exit(1);
    })