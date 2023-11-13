const findOneUserInfo = require('../../repo/findOneUserInfo');

const read = async (req, res)=>{
      try {
        const user = req.user
        console.log('user : ', user)
          const userinfo = await findOneUserInfo(user);
          return res.status(200).send({message:"SUCCESS READ PROFILE",
        userinfo:userinfo});
        } catch (err) {      
          return res.status(400).send({ message: "FAIL READ RPOFILE" });
        }
  }
  module.exports = read