const express = require('express');
const app = express();
const ejs = require("ejs");
app.set("view engine", "ejs")
const userRouter = require("./routes/userRoutes");
const port = 3000;

app.get("/", (req, res) => {
    try{
        res.status(200).send("<h1>Welcome to Mann's Server</h1>");
    }
    catch(error){
        console.log("Error: ", error);
    }
})

app.use("/users", userRouter);

app.listen(port, () => {
    console.log(`Connection Successful, Listining on port ${port}`);
})