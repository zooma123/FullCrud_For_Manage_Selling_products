const mongoose =require('mongoose');


const SellerSchema = new mongoose.Schema({

username : {
type : String ,
required : true ,

},

password : {
type : String,
required : true,

}
, 
email : {
type : String ,
required : true 

},

products : {
type : [{ type: mongoose.Schema.Types.ObjectId , required:false  , ref: 'BillSchema' }]
}


})


module.exports = mongoose.model("SellerSchema" , SellerSchema)