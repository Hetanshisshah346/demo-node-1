import { Request, Response } from "express";
import xlsx from "xlsx";
import User from "../src/model/user";

const importExcelToDb = async(req:Request, res:Response) => {
    const excelFilePath = req.body.filePath;

    const wrokbook = xlsx.readFile(excelFilePath);

    const sheetName = wrokbook.SheetNames[0];
    const workSheet = wrokbook.Sheets[sheetName];

    const data = xlsx.utils.sheet_to_json(workSheet);

 const insertData = await User.insertMany(data);
 console.log("Data imported successfully")




}