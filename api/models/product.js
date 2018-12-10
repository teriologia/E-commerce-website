const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  categories: {
    type: [String],
    required: false
  },
  type: {
    type: String,
    required: true
  },
  discount: {
    type: Number,
    required: true
  },
  stock: {
    type: Number,
    required: true
  }
})

module.exports = mongoose.model("Product", productSchema)