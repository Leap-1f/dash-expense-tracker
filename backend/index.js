import express from "express"
const app = express()
const port = 3000;
import { sql } from "./config/database.js"
import { user } from "./src/router/user.js";

app.get('/users', async (req, res) => {
    const data = await sql`SELECT * FROM users`;
    console.log(data);
    res.send('Hello World!')
});
   
app.post('/users', async (req, res) => {
    const post = await sql`INSERT INTO users(name,email) VALUES('Dashaa','dashaa@gmail.com') RETURNING *`  
    res.send('Hi')
});

app.post('/users/postTable', async (req, res) => {
    const table = await sql`INSERT INTO users(name,email) VALUES('Jamuux','dashaa@gmail.com') RETURNING *`
    console.log(table);
    res.send('Hi')
  });
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});