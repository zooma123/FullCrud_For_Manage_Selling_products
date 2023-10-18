const express = require("express");
const  mongoose = require("mongoose");
const http = require("http");
const url = require("url");
const  cors = require ("cors") ;
const  dotenv = require ("dotenv") ;
const product =require('./routes/product.js')
const user = require('./routes/uers.js')
const cookieParser = require('cookie-parser');

dotenv.config();
const app = express();
app.use(cors());
 app.use(express.json())
 app.use(express.urlencoded({extended :true}))
 //MiddleWare Method For Get The Time For Any Action
 app.use(cookieParser());
 app.use((req,res,next)=>{
  req.requestTime = new Date().toISOString();
  
  next();
  })
  app.get('/', (req, res) => {
try{
  res.send('GET request to the homepage')


}catch(err){
console.log(err.message)

}
  
  
  })
  app.use('/product' , product)
  app.use('/user',user)
//Validation
 
 app.all("*" , (req,res,next)=>{
  res.status(404).json({
  
  
  status : "fail" ,
  message : `Cant Find ${req.originalUrl} on This Server`
  
  })
  
  
  })
  
  
  

// Connect To Mongo Db 
mongoose.connect(process.env.MONGO_URI,{
  useNewUrlParser: true,
  useUnifiedTopology: true, 
}).then(con=>{
console.log("Connected To Data Base")
  
})




















const port = process.env.PORT;


app.listen(port, () =>{

console.log(`app is  Running on ${port}`);

});