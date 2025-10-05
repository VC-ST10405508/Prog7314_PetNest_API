import express from 'express';

const app = express();

//res - response req- request
app.get("/", (req,res) => {
res.send("server is ready :D")
})

app.listen(5000, () => {
    console.log("Server started at http://localhost:5000 heelo")
})