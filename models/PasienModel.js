import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Pasien = db.define('pasien',{
    nik:{
        type: DataTypes.INTEGER,
        unique: true
    },
    nrk:{
        type: DataTypes.INTEGER,
        unique: true
    },
    name:{
        type: DataTypes.STRING
    },
    telp:{
        type: DataTypes.INTEGER
    },
    jenis_kelamin:{
        type: DataTypes.STRING
    },
    poli:{
        type: DataTypes.STRING
    },
    dokter:{
        type: DataTypes.STRING
    },
    jadwal:{
        type: DataTypes.STRING
    },
    jam:{
        type: DataTypes.STRING,
        allowNull: true
    },
    keluhan:{
        type: DataTypes.STRING
    }
},{
    freezeTableName:true
});

export default Pasien;

// (async()=>{
//     await db.sync();
// })();