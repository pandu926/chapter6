const express = require("express");
const app = express();
const port = 8000;
const userRoute = require("./src/user/user.route");

app.get("/", (req, res) => {
    res.send("berhasil");
})
app.use(express.json());
app.use(userRoute);

app.listen(port, () => {
    console.log("sukses");
})