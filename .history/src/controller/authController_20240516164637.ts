import { Request, Response } from "express";
import User from "../model/user";

export class AuthController {
  public async register(req:Request, res:Response) {
    try{
      const {name,email, password, contactNumber} = req.body;

      const findUsers = await User.findOne({email:email});

      // if(!user)

    }catch(err:any){
        return res.status(500).json({status:false, message:err.message})
    }
  }
}