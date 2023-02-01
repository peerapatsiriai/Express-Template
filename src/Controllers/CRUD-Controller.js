/////////////////////////////////////////////////////////////////////////
module.exports.GetOneProject = async (req, res) => {
  // GET
  try {
    // เขียนได้ 2 แบบ
    const { project_id } = req.params;
    // const project_id = req.params.project_id
    res.status(200).json({ response: `Project ID Is: ${project_id} ` });
  } catch (err) {
    res.status(500).json({ err: err });
  }
};

/////////////////////////////////////////////////////////////////////////
module.exports.PostOneProject = async (req, res) => {
  // Post
  try {
    // เขียนได้ 2 แบบ
    const { project_id } = req.body;
    // const project_id = req.body.project_id
    res.status(200).json({ response: `Insert Project ID Is: ${project_id} Successed` });
  } catch (err) {
    res.status(500).json({ err: err });
  }
};

/////////////////////////////////////////////////////////////////////////
module.exports.EditOneProject = async (req, res) => {
  // put
  try {
    // เขียนได้ 2 แบบ
    const { project_id } = req.body;
    // const project_id = req.body.project_id
    res.status(200).json({ response: `Edit Project ID Is: ${project_id} Successed` });
  } catch (err) {
    res.status(500).json({ err: err });
  }
};

/////////////////////////////////////////////////////////////////////////
module.exports.DeleteOneProject = async (req, res) => {
  // delete
  try {
    // เขียนได้ 2 แบบ
    const { project_id } = req.body;
    // const project_id = req.body.project_id
    res.status(200).json({ response: `Delete Project ID Is: ${project_id} Successed` });
  } catch (err) {
    res.status(500).json({ err: err });
  }
};
