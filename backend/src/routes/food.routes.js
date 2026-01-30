import express from "express";
import foodController from "../controllers/food.controller.js";
import {authFoodPartnerMiddleware, authUserMiddleware} from "../middlewares/auth.middleware.js"

const router=express.Router();
import multer from "multer";

const upload=multer({
    storage:multer.memoryStorage(),
})

/*POST/api/food/[protected]*/
//we need api to be protected so we used middleware
//firstly the rqst is going to middleware if it verified then going to controller
//router.post('/',authMiddleware.authFoodPartnerMiddleware,foodController.createFood)
router.post("/",
     authFoodPartnerMiddleware,
     upload.single("video") ,
     foodController.createFood);

     /*GET/api/food/[protected]*/
     router.get("/",
       authUserMiddleware,
     foodController.getFoodItems
     )


export default router;