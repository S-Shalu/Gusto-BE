const mongoose= require('mongoose')
const schema= new mongoose.Schema(
    {"email":String,
    "password":String,
    "firstName":String,
    "lastName":String
}
)

module.exports= mongoose.model('user',schema)