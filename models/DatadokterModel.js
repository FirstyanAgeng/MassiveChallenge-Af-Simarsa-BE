import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const DataDokter = db.define(
  "data-dokter",
  {
    name: DataTypes.STRING,
    spesialis: DataTypes.STRING,
    telp: DataTypes.INTEGER,
    password: DataTypes.STRING,
    role: DataTypes.STRING,
    no_izin_praktik: DataTypes.STRING,
    alamat: DataTypes.STRING,
    ttl: DataTypes.STRING,
    agama: DataTypes.STRING,
    jadwal_praktik: DataTypes.STRING,
  },
  {
    freezeTableName: true,
  }
);

export default DataDokter;

// (async()=>{
//     await db.sync();
// })();
