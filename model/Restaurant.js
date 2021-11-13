const mongoose = require("mongoose");
const schema =new mongoose.Schema({
    location_id:Number

})

module.exports=mongoose.model('By_Id',schema,'Restaurant')