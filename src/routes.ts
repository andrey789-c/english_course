import { Request, Response, Router } from "express";
import { Word } from "./models/Words.js";
import WordController from "./controllers/WordController.js";
import multer from "multer";
import path from "path";
import sequelize from "./db.js";

const storage = multer.diskStorage({
  destination: (req, res, cb) => {
    cb(null, './src/images')
  },
  filename: (req, file, cb) => {
    const fileName = Date.now() + "." + file.originalname.split('.')[1]
    console.log(fileName);
    
    cb(null, fileName)
  }
})

const router = Router()

router.get('/words', WordController.getAll)
router.post('/words', multer({storage}).single('img'), WordController.create)
router.delete('/words/:id', WordController.delete)
router.put('/words', WordController.update)

export default router