//create server
// const express=require('express');
// const app=express();

import express from "express";
import cookieParser from "cookie-parser";
//import cors from 'cors';
import authRoutes from './routes/auth.route.js';
import foodRoutes from './routes/food.routes.js';
import cors from "cors";

const app = express();
app.use(cookieParser());
app.use(express.json());
// allow frontend dev server to access API and cookies
//app.use(cors({ origin: 'http://localhost:5174', credentials: true }));
const allowedOrigins = ['http://localhost:5174', 'http://localhost:5176','http://localhost:5177','http://localhost:5178','http://localhost:5179']

app.use(cors({
    origin: function(origin, callback){
        // allow requests with no origin like mobile apps or curl
        if(!origin) return callback(null, true)
        if(allowedOrigins.indexOf(origin) !== -1){
            callback(null, true)
        } else {
            callback(new Error('CORS policy: Origin not allowed'))
        }
    },
    credentials:true
}))

app.get("/",(req,res)=>{
    res.send("Hello World");
})

app.use('/api/auth',authRoutes);
app.use('/api/food',foodRoutes);

export default app;

