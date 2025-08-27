// เรียกใช้งาน Express framework
const express = require('express');
const app = express(); // สร้าง object ส าหรับจัดการเว็บแอป
const PORT = 3000; // ก าหนด port ที่เซิร์ฟเวอร์จะรัน
// -------------------------
// Route Home (/)
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
// -------------------------
app.get('/', (req, res) => {
    // เมื่อผู้ใช้เปิด http://localhost:3000/
    res.render("index");
});
// -------------------------
// เริ่มต้นเซิร์ฟเวอร์
// -------------------------
app.listen(PORT, () => {
    // เมื่อเซิร์ฟเวอร์ท างานส าเร็จ จะแสดงข้อความใน Terminal
    console.log(`Server running at http://localhost:${PORT}`);
});