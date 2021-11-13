const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    content: String,
    image: String,
    meal_type: String

})



const model=mongoose.model('Mealtypes',schema,"Mealtype")
module.exports=model