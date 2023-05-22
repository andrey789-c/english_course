import { NextFunction, Request, Response } from "express";
import { Word } from "../models/Words.js";
import { ApiError } from "../error/ApiError.js";

class WordController {
  async getAll(req: Request, res: Response) {
    const words = await Word.findAll()
    return res.status(200).json(words)
  }

  async create(req: Request, res: Response, next: NextFunction) {

    try {
      const {rus, eng, example, transcription} = req.body
      const word = {
        rus, eng,
        example: example || null,
        transcription: transcription || null,
        img: req.file?.filename
      }
      
      
      const createWord = await Word.create(word)

      return res.status(200).json(createWord)
    } catch (e: any) {
      next(ApiError.badRequest(e.message))
    }
    
  }

  async delete(req: Request, res: Response, next: NextFunction) {
    const {id} = req.params
    if(!id) {
      return next(ApiError.badRequest('Не задан id'))
    }

    const word = Word.destroy({
      where: {
        id
      }
    })

    return res.json(word)
  }

  async update(req: Request, res: Response, next: NextFunction) {
    const {id, rus, eng} = req.body

    if(!id) {
      return next(ApiError.badRequest('Не задан id'))
    }

    console.log(id);
    

    const word = await Word.update({rus, eng}, {
      where: {
        id
      }
    })

    return res.json(word)
  }
}

export default new WordController()