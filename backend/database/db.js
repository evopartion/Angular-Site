const mongoose=require("mongoose");

const uri = "mongodb+srv://evopartion:123@eticaretdb.skcno.mongodb.net/?retryWrites=true&w=majority&appName=ETicaretDb";

const connection =()=>{
    mongoose.connect(uri,{
        useNewUrlParser:true,
        useUnifiedTopology:true

    }).then(()=>console.log("MongoDb bağlantısı başarılı"))
    .catch((err)=>console.log("Bağlantı Hatası! Hata"+err.message));
}

module.exports=connection;