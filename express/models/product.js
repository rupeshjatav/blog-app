const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    price: Number,
    description: String
});

const Product = mongoose.model('Product', productSchema);
// model name: 'Product' will be used to turn into a collection name in DB
// 'Product' => 'product' + 's' => products
const Prod = new Product({
    title: "remiscience of seeker",
    price: 8,
    description: "hello my name is zuzi"
});
Prod.save()
module.exports = Product