import { Router } from "express";
import { AuthController } from "../controller/authController";

export class AuthRoutes {
    private router: Router;
    public authController : AuthController

    constructor(){
        this.router = Router()
        this.authController = new AuthController();
        this.setUpRoutes()
        
    }
}