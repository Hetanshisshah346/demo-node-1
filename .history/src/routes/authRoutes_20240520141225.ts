import { Router } from "express";
import { AuthController } from "../controller/authController";
import upload from "../../utils/multer";
import uploads from "../../utils/imageUpload";



export class AuthRoutes {
  private router: Router;
  public authController: AuthController;

  constructor() {
    this.router = Router();
    this.authController = new AuthController();
    this.setUpRoutes();
  }

  private setUpRoutes() {
    const { register, importExcelToDb, excelUserData , imageUpload} = this.authController;
    this.router.post("/register", register);
    this.router.post("/import/excel", upload.single('filePath'), importExcelToDb);
    this.router.get("/export/data", excelUserData);
    this.router.post("/image/upload", uploads.single("image"),imageUpload);
  }


  public getRouter() {
    return this.router;
  }
}
