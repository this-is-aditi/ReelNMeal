//create server
// const express=require('express');
// const app=express();

import express from "express";
import cookieParser from "cookie-parser";
import authRoutes from './routes/auth.route.js';
import foodRoutes from './routes/food.routes.js';

const app = express();
app.use(cookieParser());
app.use(express.json());


app.get("/",(req,res)=>{
    res.send("Hello World");
})

app.use('/api/auth',authRoutes);
app.use('/api/auth',foodRoutes);

export default app;

