const router = require("express").Router();
const read_controller = require("../controller/reader.controller");
const multer = require('multer')

const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'./public/uploads')

    },
    filename:(req,file,cb)=>{
        cb(null,file.originalname)

    }
})

const uploads = multer({storage:storage})
router.post('/importdata',uploads.single('file'),read_controller.importData)
router.get('/data',read_controller.data)



module.exports = router;