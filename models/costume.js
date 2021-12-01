const mongoose = require("mongoose") 
const costumeSchema = mongoose.Schema({ 
 costume_type: String, 
 size: String, 
 cost: {type:Number,min:15,max:100}
}) 
 
module.exports = mongoose.model("Costume", costumeSchema) 