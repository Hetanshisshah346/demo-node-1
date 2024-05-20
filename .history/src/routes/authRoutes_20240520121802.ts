import { Router } from "express";
import { AuthController } from "../controller/authController";
import upload from "../../utils/multer";


export class AuthRoutes {
  private router: Router;
  public authController: AuthController;

  constructor() {
    this.router = Router();
    this.authController = new AuthController();
    this.setUpRoutes();
  }

  private setUpRoutes() {
    const { register, importExcelToDb, excelUserData } = this.authController;
    this.router.post("/register", register);
    this.router.post("/import/excel", upload.single('filePath'), importExcelToDb);
    this.router.get("/export/data", excelUserData);
  }


  public getRouter() {
    return this.router;
  }
}
