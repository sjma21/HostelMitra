const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/HostelMitra";

main().then(()=>{
    console.log("Connected to db");
}).catch(err=>{
   console.log(err);
});
async function main(){
    await mongoose.connect(MONGO_URL);
}

const initDB = async ()=>{
  await Listing.deleteMany({});
  initData.data = initData.data.map((obj)=>({...obj , owner : "6709e4bdc3ac1a2fab0b00a5"}))
  await Listing.insertMany(initData.data);
  console.log("Data was initialised");
}
initDB();
