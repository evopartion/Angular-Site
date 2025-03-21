const express =require("express");
const app = express();
const cors=require("cors");
const connection = require("./database/db");


app.use(express.json());
app.use(cors());

connection();

//mongodb+srv://evopartion:<db_password>@eticaretdb.skcno.mongodb.net/?retryWrites=true&w=majority&appName=ETicaretDb

const port = process.env.PORT || 5000;
app.listen(port,()=>console.log("uygulama ayağa kalktı"));

