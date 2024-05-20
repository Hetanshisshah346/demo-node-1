import { Request, Response } from "express";
import User from "../model/user";
import xlsx from "xlsx";

export class AuthController {
  public async register(req: Request, res: Response) {
    try {
      const { name, email, password, contactNumber } = req.body;

      const users = await User.create({ name, email, password, contactNumber });

      await users.save();
      return res
        .status(200)
        .json({
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
      const excelFilePath = req.body.filePath;

      const wrokbook = xlsx.readFile(excelFilePath);

      const sheetName = wrokbook.SheetNames[0];
      const workSheet = wrokbook.Sheets[sheetName];

      const data = xlsx.utils.sheet_to_json(workSheet);

      const insertData = await User.insertMany(data);

      return res
        .status(200)
        .json({
          status: true,
          message: "Data imported successfully",
          data: insertData,
        });
    } catch (err: any) {
      return res.status(500).json({ status: false, message: err.message });
    }
  }
}
