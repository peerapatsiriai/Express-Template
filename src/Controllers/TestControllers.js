

//const Connection = require("../Database/Connection");
const Axios = require("axios");
const { response } = require("express");

/////////////////////////////////////////////////////////////////////////
module.exports.hello = async (req, res) => {
  res.status(200).json({ response: "Hello" });
};

/////////////////////////////////////////////////////////////////////////
module.exports.TestConect = async (req, res) => {
  try {
    //ถ้าทุกอย่างปกติทำใน try
    const datas = await Connection.query("SELECT * FROM projects");
    //ปิด Connection ตลอดเน้อ
    Connection.end();
    res.status(200).json({ response: datas });
  } catch (err) {
    //ถ้าแตกจะดีดลงมาทำใน catch
    res.status(500).json({ err: err });
  }
};

/////////////////////////////////////////////////////////////////////////
module.exports.TestFetch = async (req, res) => {
  try {
    Axios.get(
      "https://covid19.ddc.moph.go.th/api/Cases/today-cases-all"
    )
    .then(response => {
      res.status(200).json({ response: response.data });
    })
  } catch (err) {
    res.status(500).json({ err: err });
  }
};

