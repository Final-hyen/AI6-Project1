const {Product} = require('../models/Product')

module.exports= async function deleteProduct(req){
    try {
        const deletProudctOne = await Product.deleteOne({_id:req.params.id})
        return deletProudctOne
    } catch (error) {
        console.error(error)
        return false
    }
}