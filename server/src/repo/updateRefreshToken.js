const {Token} = require('../models/Token')

module.exports= async function updateRefreshToken(user_id,token){
    try {
        await Token.updateOne({user_id:user_id},{refreshToken:token})
    } catch (error) {
        console.error(error)
    }
}