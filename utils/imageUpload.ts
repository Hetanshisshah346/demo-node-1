import multer from "multer";

let storage = multer.diskStorage({
  destination: "./upload/images",
  filename: (req, file, cb) => {
    cb(null, Date.now() + file.originalname);
  },
});

let uploads= multer({
  storage: storage,
//   limits: { fileSize: 1024 * 1024 },
  fileFilter: (res, file, cb) => {
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
  },
})

export default uploads
