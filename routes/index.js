import express from "express";
import { getUsers, Register, Login, Logout } from "../controllers/Users.js";
import { getPasien,
    getPasienById, 
    createPasien, 
    updatePasien, 
    deletePasien 
} from "../controllers/Pasien.js";
import { getContacts, createContacts } from "../controllers/Contacts.js";

import { verifyToken } from "../middleware/VerifyToken.js";
import { refreshToken } from "../controllers/RefreshToken.js";

const router = express.Router();

router.get('/users', verifyToken, getUsers);
router.post('/users', Register);
router.post('/login', Login);
router.get('/token', refreshToken);
router.delete('/logout', Logout);

// daftar pasien
router.get('/pasien', getPasien);
router.get('/pasien/:id', getPasienById);
router.post('/pasien', createPasien);
router.patch('/pasien/:id', updatePasien);
router.delete('/pasien/:id', deletePasien);

// hubungi kami
router.get('/saran', getContacts);
router.post('/saran', createContacts);



export default router;