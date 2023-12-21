const mongoose =require('mongoose')

// 가급적 required true는 지양해주세요. 일일히 작성해야할 필요가 있습니다!
// 해당옵션 말고 default:"default내용"의 옵션을 넣으면 따로 작성하지 않아도 default내용이 해당 필드에 작성됩니다.
const OrderSchema = new mongoose.Schema({
    order_no: {
        type: Number, 
        unique:true 
        //unique옵션을 넣어둔다면 해당 오더번호와 중복된 값이 작성될경우 에러 처리에서도 유용하게 작성할 수 있을거에요 
    },
    user_id: {
        type:String,
        required: true
    },
    user_name: {
        type:String,

    },
    user_phone: {
        type:String,
    },
    user_address: {
        type:String,
    },
    product_info:{
        type: [],
    },
    total_price: {
        type:Number,
    },
    order_status: {
        type:String,
        enum: ["상품준비중", "배송중", "배송완료"],
        required: true, 
        default: "상품준비중"
    },
    create_at: {
        type: Date,
        required: true,
        default: Date.now()
    }
})

const Order = mongoose.model('Order',OrderSchema)
module.exports = {Order}