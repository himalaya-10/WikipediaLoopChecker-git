const express=require('express');
const cors = require('cors');

const app=express();
app.use(cors());

const port=8000;

app.use(express.json())

app.use("/api",require("./routes/reqinfo.js"))

app.listen(port,()=>{
    console.log(`listening at port ${port}`);
})