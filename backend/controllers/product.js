const BillSchema = require('../models/productCrud')
exports.GetallProduct = async(req,res)=>{
try{

const AllData = await BillSchema.find({})
res.status(200).json({
AllData

})


}catch(err){

res.status(404).json({
    
    error : err.message,
})

}


}


exports.sellProduct = async(req,res)=>{
try{
    const title = req.body.title
    const count = req.body.count
    const price = req.body.price *count
    const taxes = req.body.taxes
    const ads = req.body.ads
    const discount = req.body.discount
    const category = req.body.category
    const userid = req.Selleremail.id
    const data =  await BillSchema.create({
        title : title,
        price : price ,
        taxes : taxes,
        ads:ads,
        discount:discount,
        count:count,
        total : +price- (+taxes + +ads + +discount),
        category:category,
        seller: userid
        })
res.status(200).json("You Successfully Created The Product")

}catch(err){console.log(err.message)
res.status(400).json({
error:err.message

})

}
    

}


exports.DeleteProduct = async(req,res)=>{
try{

    await BillSchema.findByIdAndDelete(req.params.id)

}catch(err){
res.status(404).message("You Successfully Deleted The Product")
}
    








}
exports.getmyProduct  = async(req,res)=>{
try{
    const userid =  await req.Selleremail.id
    const products = await BillSchema.find({seller : userid })
return res.status(200).json({
products

})    

}catch(err){
return res.status(404).json({
error : err.message

})

}
    






}