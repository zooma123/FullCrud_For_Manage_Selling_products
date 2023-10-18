const SellerSchema = require('../models/seller.js');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const seller = require('../models/seller.js');

const validEmail = (email)=>{
    const re =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return re.test(email);
    }

exports.register =  async (req,res) =>{
  

    const {username,password,email} =  await req.body
  
  const Seller =  await SellerSchema.findOne({email});
  console.log(Seller)
  if(Seller){
    return res.json({ status: 'error', error: 'User Already Exist' })
  }
  if(!validEmail(email)){
    return res.json({ status: 'error', error: 'Invalid Email' })
  
  
  }
  
  
  if(password.length< 6 ){
    return res.json({
      error: 'Password too small. Should be atleast 6 characters'
    })
  }
  
  
  const hashedPassword =  bcrypt.hashSync(password,10);
  console.log(hashedPassword)
  
  try{
  
    const newSeller = await SellerSchema.create({username , password :hashedPassword ,email })
   return res.status(200).json({
message: "You Have Done The Email"

  })
   
  }catch(error){
  
    return res.status(401).json({ status: 'error', error: error.message})
  
  
  }
    
    
  }


  exports.login =  async (req,res)=>{
try{

  const email =  await req.body.email
  var password = await  req.body.password
  if(!email || !password){
  return res.status(404).json({
  message : "You Should Provide an email and password"
  
  })
  
  }
  
  const Selleremail = await SellerSchema.findOne({email})
  console.log(Selleremail)
  const isPasswordCorrect =  await bcrypt.compare(password , Selleremail.password)
  if(!isPasswordCorrect){
  return res.status(404).json({
  message : "User Name Or Password are in Correct"
  
  })   }

  const token = jwt.sign({id : Selleremail._id }, process.env.TOKEN_PASS)
  var {password , ...otherDetails} = Selleremail._doc;
    res.cookie("access_token",token,{
      httpOnly:true 
    }).status(200).json({...otherDetails});
    

}catch(err){
return res.status(400).json({
error : err.message

})




}
  }
