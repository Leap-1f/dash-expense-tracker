const express = require('express')
const app = express()
const port = 3000;
import { user } from "./mock/user.js";

app.get('/user', (req, res) => {
    res.send(user);
    // res.send('Hello World!')
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});