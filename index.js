import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
// import Users from "./models/UserModel.js";
import Pasien from "./models/PasienModel.js";
import Contacts from "./models/ContactsModel.js";
import db from "./config/Database.js";
import router from "./routes/index.js";

dotenv.config();
const app = express();

try {
    await db.authenticate();
        (async()=>{
    await Pasien.sync();
})();
    console.log('Database Connected...');
} catch (error) {
    console.error(error);
}


app.use(cors({ credentials:true, origin:'http://localhost:3000' }));
app.use(cookieParser());
app.use(express.json());
app.use(router);
// app.use(PasienRouter);

app.listen(5100, ()=> console.log('Server running at port 5100'));