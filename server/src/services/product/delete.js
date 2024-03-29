
const deleteOneProduct = require('../../repo/deleteOneProduct')

const removeProduct = async (req, res)=>{
    try {
        await deleteOneProduct(req);
        return res.status(200).send({ message: "상품 삭제 성공" });
      } catch (err) {
        console.error(err)        
        return res.status(400).send({ message: "상품 삭제 실패" });
      }
}
module.exports = removeProduct