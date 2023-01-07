import {Sequelize} from "sequelize";

const db = new Sequelize('auth_db','root','Wilaga@26',{
    host: "localhost",
    dialect: "mysql",
    port: 3306
});

export default db;