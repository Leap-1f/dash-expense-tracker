import express from "express"
import cors from 'cors'

const app = express();
const port = 3000;

app.use(logRequest);
app.use("/users", user);

const logRequest = (req, res, next) => {
    console.log("req", req);
    if(req.body.name === "bat"){
        res.send("baitg oruulaxq")
    }
    next();
};

app.listen(port, () => {
    console.log(`Example app lestening on port ${port}`);
})