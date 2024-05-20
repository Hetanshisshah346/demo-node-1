import { Request, Response } from "express";
import User from "../model/user";

export class AuthController {
  public async register(req:Request, res:Response) {
    try{
      const {name,email, password, contactNumber} = req.body;

     const users = await User.create({name, email, password, contactNumber})

     await users.save();
     return res.status(200).json({status:true, message:"User addded successfully", data:users})
    }catch(err:any){
        return res.status(500).json({status:false, message:err.message})
    }
  }
}