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
    const { register, importExcelToDb, excelUserData , singleImageUpload, multipleImageUpload } = this.authController;
    this.router.post("/register", register);
    this.router.post("/import/excel", upload.single('filePath'), importExcelToDb);
    this.router.get("/export/data", excelUserData);
    this.router.post("/single/image/upload", uploads.single("image"),singleImageUpload);
    this.router.post("/multiple/image/upload", uploads.single("image"),singleImageUpload);
  }


  public getRouter() {
    return this.router;
  }
}
