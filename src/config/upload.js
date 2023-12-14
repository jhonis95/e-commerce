const multer  = require('multer')
// original tutorial https://www.freecodecamp.org/news/simplify-your-file-upload-process-in-express-js/
// Set up storage for uploaded files
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'src/storage/products');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

// Create the multer instance
const upload = multer({ storage: storage });
module.exports=upload