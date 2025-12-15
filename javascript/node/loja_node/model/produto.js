import { Sequelize, DataTypes } from "sequelize"
import db from "../bd/bd.js"


export default db.define("produto", {
    codigo: { type: Sequelize.INTEGER.UNSIGNED, primaryKey: true, autoINcrement: true, allowNull: false },
    nome: { type: DataTypes.STRING, allowNull: false },
    qtd: { type: DataTypes.INTEGER, allowNull: true },

}, { timestamps: false })