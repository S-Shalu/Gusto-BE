const mongoose = require("mongoose");
const schema =new mongoose.Schema({
    location_id:Number,
     min_price:Number,
    cuisine_id:{
        type:Array,
    },
    cuisine:{
        type:Array,
    },

})

module.exports=mongoose.model('By_Id',schema,'Restaurant')
