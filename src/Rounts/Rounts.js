const Express = require("express");
const Rounter = Express.Router();

/////////////////////////////////////////////////////////
// นำเข้าไฟล์ Controller จากไฟล์ข้างนอก
const TestController = require("../Controllers/TestControllers");
const CRUD = require("../Controllers/CRUD-Controller");

// api แบบปกติ
Rounter.get("/", TestController.hello);
//Rounter.get("/testconnect", TestController.TestConect); // ต้องมี Database
Rounter.get("/testfecth", TestController.TestFetch);

// CRUD
Rounter.get("/project/:project_id", CRUD.GetOneProject); // มี params
Rounter.post("/project", CRUD.PostOneProject);
Rounter.put("/project", CRUD.EditOneProject);
Rounter.delete("/project", CRUD.DeleteOneProject);


module.exports = Rounter;
