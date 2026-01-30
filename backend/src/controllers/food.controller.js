//const foodModel=require('../models/food.model');
import foodModel from "../models/food.model.js";
import storageService from "../services/storage.service.js";
import {v4 as uuid} from "uuid";

async function createFood(req,res){
    
    
    const fileUploadResult=await storageService.uploadFile(req.file.buffer,uuid())

    const foodItem=await foodModel.create({
        name:req.body.name,
        description:req.body.description,
        video:fileUploadResult.url,
        foodPartner:req.foodPartner._id
    })
    res.status(201).json({
        message:"food created successfully",
        food:foodItem
    })
    

    
    
    
}
async function getFoodItems(req,res){
    const foodItems=await foodModel.find({})
    res.status(200).json({
        message:"Food items fetched successfully",
        foodItems
    })
}

export default {
    createFood,
    getFoodItems
}