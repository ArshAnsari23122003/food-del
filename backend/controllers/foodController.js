import { log } from "console";
import foodModel from "../models/foodModel.js";
import fs from 'fs'
import multer from "multer";


// add food item 
    
const addFood = async (req, res) => {
    try {
        console.log("Received request body:", req.body);
        console.log("Received file:", req.file);

        if (!req.file) {
            return res.json({ success: false, message: "No image uploaded" });
        }

        let image_filename = req.file.filename;

        const { name, description, price, category } = req.body;
        if (!name || !description || !price || !category) {
            return res.json({ success: false, message: "Missing required fields" });
        }

        const food = new foodModel({
            name,
            description,
            price: Number(price),
            image: image_filename,
            category
        });

        await food.save();
        res.json({ success: true, message: "Food Added" });
    } catch (error) {
        console.error("Error while adding food:", error);
        res.status(500).json({ success: false, message: error.message });
    }
};

// all food list
const listFood = async (req,res) => {
     try {
        const foods = await foodModel.find({});
        res.json({success:true,data:foods})
     } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"})
     }
}

// remove food item
const removeFood = async (req,res) =>{
    try {
        const food = await foodModel.findById(req.body.id);
        fs.unlink(`uploads/${food.image}`, ()=>{})

        await foodModel.findByIdAndDelete(req.body.id);
        res.json({success:true, message:"Food Removed"})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"})
    }
}

export {addFood, listFood,removeFood}