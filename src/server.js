const Express = require("express");
const http = require("http");
const Dotenv = require("dotenv");
const Cors = require("cors")
const Rount = require("./Rounts/Rounts");

const app = Express();

// ตั้งค่า Middleware หรือใช้งาน Package 
app.use(Express.json());
app.use(Cors())
app.use(Express.urlencoded({ extended: true }));
Dotenv.config();

// ใช้งาน Rount ที่เรียกมาจากไฟล์อื่น
app.use(Rount);

// Set port จากไฟล์ .env
const PORT = process.env.PORT || 3000;
http.createServer(app).listen(PORT, () => {
  console.log(`\n[server]: Server is running at http://localhost:${PORT}`);
});
