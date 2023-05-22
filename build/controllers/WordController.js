import { Word } from "../models/Words.js";
import { ApiError } from "../error/ApiError.js";
class WordController {
    async getAll(req, res) {
        const words = await Word.findAll();
        return res.status(200).json(words);
    }
    async create(req, res, next) {
        var _a;
        try {
            const { rus, eng, example, transcription } = req.body;
            const word = {
                rus, eng,
                example: example || null,
                transcription: transcription || null,
                img: (_a = req.file) === null || _a === void 0 ? void 0 : _a.filename
            };
            const createWord = await Word.create(word);
            return res.status(200).json(createWord);
        }
        catch (e) {
            next(ApiError.badRequest(e.message));
        }
    }
    async delete(req, res, next) {
        const { id } = req.params;
        if (!id) {
            return next(ApiError.badRequest('Не задан id'));
        }
        const word = Word.destroy({
            where: {
                id
            }
        });
        return res.json(word);
    }
    async update(req, res, next) {
        const { id, rus, eng } = req.body;
        if (!id) {
            return next(ApiError.badRequest('Не задан id'));
        }
        console.log(id);
        const word = await Word.update({ rus, eng }, {
            where: {
                id
            }
        });
        return res.json(word);
    }
}
export default new WordController();
//# sourceMappingURL=WordController.js.map