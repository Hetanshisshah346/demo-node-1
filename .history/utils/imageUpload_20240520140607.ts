import multer from "multer";

let storage = multer.diskStorage({
    destination: "./upload/images",
    filename: (req, file, cb) => {
        cb(null, Date.now() + file.originalname)
    }
})

let upload = multer({storage: storage, fileFilter: (res,file,cb) => {
    if (
        file.mimetype == "image/jpeg" ||
        file.mimetype == "image/jpg" ||
        file.mimetype == "image/png" ||
        file.mimetype == "image/gif"
      ) {
        cb(null, true);
      } else {
        cb(null, false);
        cb(new Error("Only jpeg, jpg, png, and gif Image allow"));
      }
}})