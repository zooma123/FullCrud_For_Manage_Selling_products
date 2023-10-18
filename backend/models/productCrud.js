const  mongoose =require('mongoose')


const BillSchema = new mongoose.Schema({

    title:{
  type:String ,
  required : true ,
  
    }
  , 
  
  price:{
    type : Number,
    required:true
  }, 
    
  
    taxes:{
      type:Number ,
   
      
        }
      , 
      
    
      ads:{
        type:Number ,
      
        
          }
        , 
        
      discount:{
        type:Number ,        
          }
        ,
        total:{
  type : Number , 
  default : 0 
  
        } ,
        count:{
          type : Number , 
          required : true ,
          default : 1
          
                } ,
                category:{
                  type : String , 
                  required : true ,
                  
                        }  , 
                        
seller :{

type :  mongoose.Schema.Types.ObjectId , 
required:true  , 
ref: 'SellerSchema' 

}}
                  
 , {timestamps : true}
  )
  
  
  
  module.exports = mongoose.model("BillSchema" , BillSchema)