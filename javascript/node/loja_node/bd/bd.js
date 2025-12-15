
import {Sequelize} from "sequelize"
const sequelize = new Sequelize('mysql://root:password@127.0.0.1:3306/loja_node') // Example for postgres


export default sequelize