const Product = require('../models/product')


exports.get_all_products = (req, res, next) => {
  Product.find()
    .select("_id name price categories type discount stock")
    .exec()
    .then(docs => {
      const response = {
        count: docs.length,
        products: docs.map(doc => {
          return {
            _id: doc._id,
            name: doc.name,
            price: doc.price,
            categories: doc.categories,
            type: doc.type,
            discount: doc.discount,
            stock: doc.stock,
            request: {
              type: "GET",
              url: process.env.BASE_URL + "/products/" + doc._id
            }
          }
        })
      }

      res.status(200).json(response)
    })
    .catch(err => { res.status(500).json({ error: err }) })
}

exports.get_singleProduct = (req, res, next) => {
  const id = req.params.productId
  Product.findById(id)
    .then(doc => {
      res.status(200).json(doc)
    })
    .catch(err => { res.status(500).json({ error: err }) })
}

exports.create_new_product = (req, res, next) => {
  const product = new Product({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    price: req.body.price,
    categories: req.body.categories ? req.body.categories : null,
    type: req.body.type ? req.body.type : "general",
    discount: req.body.discount ? req.body.discount : 0.0,
    stock: req.body.stock ? req.body.stock : 0
  })
  product.save()
    .then(result => {
      res.status(201).json({ message: 'product created', createdProduct: result })
    })
    .catch(err => { res.status(500).json({ error: err }) })
}

exports.update_product = (req, res, next) => {
  const productId = req.params.productId
  const updateOps = {}

  for (const ops of req.body) {
    updateOps[ops.propName] = ops.value
  }
  Product.update({ _id: productId }, { $set: updateOps })
    .exec()
    .then(result => {
      res.status(200).json(result)
    })
    .catch(err => { res.status(500).json({ error: err }) })
}

exports.delete_product = (req, res, next) => {
  const productId = req.params.productId
  Product.remove({ _id: productId })
    .exec()
    .then(result => {
      res.status(200).json(result)
    })
    .catch(err => { res.status(500).json({ error: err }) })
}