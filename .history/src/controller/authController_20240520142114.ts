import { Request, Response } from "express";
import User from "../model/user";
import xlsx from "xlsx";
import ExcelJs from "exceljs";
import fs from "fs";

export class AuthController {
  public async register(req: Request, res: Response) {
    try {
      const { name, email, password, contactNumber } = req.body;

      const users = await User.create({ name, email, password, contactNumber });

      await users.save();
      return res.status(200).json({
        status: true,
        message: "User addded successfully",
        data: users,
      });
    } catch (err: any) {
      return res.status(500).json({ status: false, message: err.message });
    }
  }

  public async importExcelToDb(req: Request, res: Response) {
    try {
      if (!req.file) {
        return res
          .status(400)
          .json({ status: false, message: "No file uploaded." });
      }

      const buffer = req.file.buffer;

      const workbook = xlsx.read(buffer, { type: "buffer" });

      const sheetName = workbook.SheetNames[0];
      const workSheet = workbook.Sheets[sheetName];

      const data = xlsx.utils.sheet_to_json(workSheet);

      const insertData = await User.insertMany(data);

      return res.status(200).json({
        status: true,
        message: "Data imported successfully",
        data: insertData,
      });
    } catch (err: any) {
      return res.status(500).json({ status: false, message: err.message });
    }
  }

  public async excelUserData(req: Request, res: Response) {
    try {
      const users = await User.find();
      const workbook = new ExcelJs.Workbook();
      const wrokSheet = workbook.addWorksheet("User Data");
      wrokSheet.columns = [
        { header: "ID ", key: "_id", width: 10 },
        { header: "Name ", key: "name", width: 20 },
        { header: "Email ", key: "email", width: 30 },
        { header: "Password ", key: "password", width: 40 },
        { header: "ContactNumber ", key: "contactNumber", width: 50 },
      ];
      users.forEach((user) => {
        wrokSheet.addRow(user);
      });
      const folderPath = "excelFile";
      if (!fs.existsSync(folderPath)) {
        fs.mkdirSync(folderPath);
      }

      const filePath = `${folderPath}/user_data.xlsx`;

      await workbook.xlsx.writeFile(filePath);
      return res
        .status(200)
        .json({ status: true, message: "Excel data successfully" });
    } catch (err: any) {
      return res.status(500).json({ status: false, message: err.message });
    }
  }
  public async imageUpload(req:Request, res:Response){
    try{

      
      if(!req.file){
        return res.status(200).json({status:false, message:"File not uploaded"})
      }
  
      if (req.file.size > 1024 * 1024) {
        return res.status(200).json({ status: false, message: 'File size limit exceeded (max 1MB)' });
      }
       const users = await User.create({image:"upload/images/" + req.file.filename});
       await users.save();
       return res.status(200).json({status:true, message:"Image uploaded.", data: users})
    }catch(err:any){
      return res.status(500).json({status:false, message:err.message})
    }
  }
}
