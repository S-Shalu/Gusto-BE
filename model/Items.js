const mongoose= require('mongoose')
const schema= mongoose.Schema({
    name:String,
    description:String,
    restaurantId:String

})

module.exports=mongoose.model('items',schema,'items')