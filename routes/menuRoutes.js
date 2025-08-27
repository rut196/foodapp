// routes/menuRoutes.js
const express = require('express');
const router = express.Router();
const menuController = require('../controllers/menuController');
// หน าแรก
router.get('/', menuController.getHome);
// หนา เมนูทั้งหมด
router.get('/menu', menuController.getMenu);
// หน าเมนูตาม้id
router.get('/menu/:id', menuController.getMenuDetail);
// หน้าเมนู about
router.get('/about', menuController.getAbout);
module.exports = router;