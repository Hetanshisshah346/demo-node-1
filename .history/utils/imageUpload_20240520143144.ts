import multer from "multer";

let storage = multer.diskStorage({
  destination: "./upload/images",
  filename: (req, file, cb) => {
    cb(null, Date.now() + file.originalname);
  },
});

// let uploads= multer({
//   storage: storage,
// //   limits: { fileSize: 1024 * 1024 },
//   fileFilter: (res, file, cb) => {
//     if (
//       file.mimetype == "image/jpeg" ||
//       file.mimetype == "image/jpg" ||
//       file.mimetype == "image/png" ||
//       file.mimetype == "image/gif"
//     ) {
//       cb(null, true);
//     } else {
//       cb(null, false);
     
      
//       cb(new Error("Only jpeg, jpg, png, and gif Image allow"));
//     }
//   },
const uploads = multer({
    storage: storage,
    limits: { fileSize: 1024 * 1024 }, // Limit file size to 1MB
    fileFilter: (req, file, cb) => {
      // Check file type
      const allowedMimes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif'];
      // Check if MIME type is valid
      const isValidMimeType = allowedMimes.includes(file.mimetype);
      // Check if file size is within limit
      const isFileSizeValid = file.size <= 1024 * 1024;
  
      // If both MIME type and file size are valid, accept the file
      if (isValidMimeType && isFileSizeValid) {
        cb(null, true);
      } else {
        // If either MIME type or file size is invalid, reject the file
        let error = '';
        if (!isValidMimeType && !isFileSizeValid) {
          error = 'File type and size limit exceeded (max 1MB)';
        } else if (!isValidMimeType) {
          error = 'Only jpeg, jpg, png, and gif images are allowed';
        } else {
          error = 'File size limit exceeded (max 1MB)';
        }
        cb(new Error('File size limit exceeded (max 1MB)'));
      }
    },
});

export default uploads
