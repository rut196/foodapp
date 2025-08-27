const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Import routes
const menuRoutes = require('./routes/menuRoutes');

// ตั้งค่าให้ Express ใช้ EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// ให้ Express เสิร์ฟไฟล์ static (css, js, รูปภาพ) จากโฟลเดอร์ public
app.use(express.static(path.join(__dirname, "public")));

// ใช้ routes
app.use('/', menuRoutes);

app.listen(PORT, () => {
  // เมื่อเซิร์ฟเวอร์ทำงานสำเร็จ จะแสดงข้อความใน Terminal
  console.log(`Server running at http://localhost:${PORT}`);
});