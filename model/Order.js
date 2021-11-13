const mongoose= require('mongoose')
const schema= mongoose.Schema({
    placedBy:String,
    placedByUserId:String


})

module.exports=mongoose.model('Order',schema,'Order')