const jwt = require ('jsonwebtoken')
const { JWT_TOKEN_KEY } = require('../config/index')
module.exports = async (token)=>{
   try{
    const decoded = await jwt.verify(token,JWT_TOKEN_KEY)
    return decoded
   }catch(e){
    return false
   }
}

const accessJWTGenerator = require('../utils/accessJWTGenerator');
const checkRefreshToken = require('../repo/checkRefreshToken');
const verifyToken = require('../utils/verifyToken');

