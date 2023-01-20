import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
// import Users from "./models/UserModel.js";
import Pasien from "./models/PasienModel.js";
import DataDokter from "./models/DatadokterModel.js";
import Contacts from "./models/ContactsModel.js";
import db from "./config/Database.js";
import router from "./routes/index.js";
import pdf from "html-pdf";
import bodyParser from "body-parser";
import pdfTemplate from "./document/index.js";

dotenv.config();
const app = express();
// const pdfTemplate = require('./documents/index.js');

try {
  await db.authenticate();
  (async () => {
    await db.sync();
  })();
  console.log("Database Connected...");
} catch (error) {
  console.error(error);
}

app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
// app.use(bodyParser.urlencoded({extended: true}));
// app.use(bodyParser.json());

app.use(cookieParser());
app.use(express.json());
app.use(router);
// app.use(PasienRouter);

// app.post('/create-pdf', (req, res) => {
//     pdf.create(pdfTemplate(req.body), {}).toFile('result.pdf', (err) => {
//         if(err) {
//             res.send(Promise.reject());
//         }

//         res.send(Promise.resolve());
//     });
// });

// app.get('/fetch-pdf', (req, res) => {
//     res.sendFile(`${__dirname}/result.pdf`)
// })

app.listen(5100, () => console.log("Server running at port 5100"));
