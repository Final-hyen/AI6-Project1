const {Product} = require('../models/Product')

module.exports= function findOneProduct (req){
    try {
        return Product.findOne({_id:req.params.id}) //상품 넘버로 조회하기
    } catch (error) {
        throw error
    }
}
