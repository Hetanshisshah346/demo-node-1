import { Router } from "express";
import { AuthController } from "../controller/authController";
import { register } from "ts-node";

export class AuthRoutes {
    private router: Router;
    public authController : AuthController

    constructor(){
        this.router = Router()
        this.authController = new AuthController();
        this.setUpRoutes()
    }

    private setUpRoutes(){
        const {register} = this.authController
        this.router.post("/register", register);
    }

   
 public getRouter(){
    return this.router;
 }
}