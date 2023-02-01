const mysql = require("mysql");
const util = require("util");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password:"",
  database: "project_mgt",
});

connection.query = util.promisify(connection.query);//ถ้าไม่มีอันนี้ใช้ await ไม่ได้

// ทดสอบว่าเชื่อมต่อได้หรือไม่
connection.connect(function(err) {
  if (err) throw err;
  console.log(`[Database]: Database Connected\n`);
});

module.exports = connection;