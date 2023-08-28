const updateRefreshToken = require('../../repo/updateRefreshToken')

const logout = async (req,res)=>{
    const user = req
    //로그아웃시 cookie dbtoken 초기화
    await updateRefreshToken(user._id,null)
    res.cookie('refreshToken','',{maxAge:0});
    res.cookie('accessToken','',{maxAge:0});
    res.status(200).send({message:"complete logout"})
}
module.exports = logout