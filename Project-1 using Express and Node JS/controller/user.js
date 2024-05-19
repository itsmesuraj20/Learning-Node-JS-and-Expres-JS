const User = require("../models/user");

async function handleGetAllUsers(req, res) {
  const allDBUsers = await User.find({});
  return res.json(allDBUsers);
}

async function handlegetUserByID(req, res) {
  const user = await User.findById(req.params.id);
  // const id = Number(req.params.id);
  // const user = users.find((user) => user.id === id);
  if (!user) return res.status(404).json({ error: "user not found" });
  return res.json(user);
}

async function updateUserByID(req, res) {
  await User.findByIdAndUpdate(req.params.id, { lastName: "Changed" }); //Change is hardcoded in this
  return res.json({ status: "Sucess" });
}

async function deleteUserByID(req, res) {
  await User.findByIdAndDelete(req.params.id);
  return res.json({ status: "Success" });
}

async function handleCreateNewUser(req, res) {
  const body = req.body;
  if (
    !body ||
    !body.first_name ||
    !body.last_name ||
    !body.email ||
    !body.gender ||
    !body.job_title
  ) {
    return res.status(400).json({ msg: "All fields are req..." });
  }
  const result = await User.create({
    firstName: body.first_name,
    lastName: body.last_name,
    email: body.email,
    gender: body.gender,
    job_title: body.job_title,
  });

  console.log("Result", result);

  return res.status(201).json({ msg: "Success", id: result._id });

  //In MongoDB we dont to need to push by this method
  // users.push({ ...body, id: users.length + 1 });
  // fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
  //   return res.status(201).json({ status: "success", id: users.length });
  // });
}

module.exports = {
  handleGetAllUsers,
  handlegetUserByID,
  updateUserByID,
  deleteUserByID,
  handleCreateNewUser,
};
