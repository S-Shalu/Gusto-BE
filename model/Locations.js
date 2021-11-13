const mongoose = require('mongoose')

const schema = new mongoose.Schema(
    {
        "name": String, 
        "city_id": Number,
         "location_id": Number,
          "city":String, 
          "country_name": String
    }
)

const model=mongoose.model('Locations',schema,"Locations")
module.exports=model