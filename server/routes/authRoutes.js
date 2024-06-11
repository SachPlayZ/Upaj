const express = require('express');
const router = express.Router();
const cors = require('cors');
const { test, registerUser, loginUser, getProfile } = require('../controllers/authControllers');

router.use(cors({
    origin: 'http://upaj.vercel.app',
    credentials: true
    }));
router.get('/', test);
router.post('/signup', registerUser);
router.post('/login', loginUser);
router.get('/profile', getProfile)

module.exports = router;    