const jwt  = require('jsonwebtoken')
exports.verifyToken = (req, res, next) => {
    const token = req.cookies.access_token;
   
    if (!token) {
     return res.status(505).json("You are not authorized");
   }
   
   jwt.verify(token, process.env.TOKEN_PASS, (err, user) => {
     if (err) return next(createError(403, "Token is not valid!"));
     req.Selleremail = user;
     next();
   });
 };
 