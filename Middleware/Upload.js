const multer = require('multer');
const Path = require('path');

const storage = multer.diskStorage({
    destination : function(req,file,cb){
        cb(null, 'uploads/');
    },
    filename : function(req,file,cb){
        cb(null, Date.now() + Path.extname(file.originalname))
    }
    });

    const uploads = multer({storage :storage});

module.exports = uploads;