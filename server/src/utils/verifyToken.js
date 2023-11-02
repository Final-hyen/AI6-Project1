const jwt = require ('jsonwebtoken')
const { JWT_TOKEN_KEY } = require('../config/index')
module.exports = async (token)=>{
   try{
    // console.log(token)
    const decoded = await jwt.verify(token,JWT_TOKEN_KEY)
    console.log('decode1', decoded)
    return decoded
   }catch(e){
    return false
   }
}

const accessJWTGenerator = require('../utils/accessJWTGenerator');
const checkRefreshToken = require('../repo/checkRefreshToken');
const verifyToken = require('../utils/verifyToken');

