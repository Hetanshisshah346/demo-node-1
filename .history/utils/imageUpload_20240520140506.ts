import multer from "multer";

let storage = multer.diskStorage({
    destination: "./upload/images",
    filename: (req, file, cb) => {
        cb(null, Date.now() + file.originalname)
    }
})