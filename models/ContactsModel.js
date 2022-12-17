import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Contacts = db.define('saran',{
    name:{
        type: DataTypes.STRING
    },
    email:{
        type: DataTypes.STRING
    },
    subjek:{
        type: DataTypes.STRING
    },
    pesan:{
        type: DataTypes.STRING
    }
},{
    freezeTableName:true
});

export default Contacts;

// (async()=>{
//     await db.sync();
// })();