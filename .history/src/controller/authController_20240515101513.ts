import { Request, Response } from "express";

export class AuthController {
  public async register(req:Request, res:Response) {
    try{
      const {name,email, password, contactNumber} = req.body;

     
    }catch(err){
        return res.status(500).json({status:false, message:err.message})
    }
  }
}