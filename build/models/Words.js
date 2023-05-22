import { DataTypes } from 'sequelize';
import sequelize from '../db.js';
export const Word = sequelize.define("words", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    rus: {
        type: DataTypes.STRING,
        allowNull: false
    },
    eng: {
        type: DataTypes.STRING,
        allowNull: false
    },
    img: {
        type: DataTypes.STRING
    },
    example: {
        type: DataTypes.STRING
    },
    transcription: {
        type: DataTypes.STRING
    }
});
//# sourceMappingURL=Words.js.map