const express = require("express");
const app = express();
const bodyParser=require('body-parser');
const db = require("./db/user")

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.post("/user", async (req, res) => {
    const results = await db.createUser(req, body);
    res.status(201).json({ id: results[0] })
});

app.listen(9000, () => console.log("Listening at port: 9000"))