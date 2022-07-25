const express = require("express");
const userRoute = express.Router();
const service = require("./user.service");

userRoute.get("/game", async(req, res) => {
    const users = await service.getAllUsers();
    res.json(users);
});

userRoute.post("/game", async(req, res) => {
    const { username, password } = req.body;
    console.log(req.body);
    const newUser = await service.createUsers(username, password)
    res.json(newUser);
});

userRoute.put("/game/:userid", async(req, res) => {
    const { userid } = req.params;
    const { username, password } = req.body;
    const updateUser = await service.updateUsers(userid, username, password);
    res.send("berhasil di update");
});


userRoute.delete("/game/:userid", async(req, res) => {
    const { userid } = req.params;
    const deleteUser = await service.deleteUsers(userid);
    res.send("berhasil di hapus");
});

module.exports = userRoute;