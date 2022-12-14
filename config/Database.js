import {Sequelize} from "sequelize";

const db = new Sequelize('cuth_db','root','',{
    host: "localhost",
    dialect: "mysql"
});

export default db;