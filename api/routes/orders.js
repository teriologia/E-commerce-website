const express = require('express')
const router = express.Router()

// get all orders
router.get('/', (req, res, next) => {

})

// get individual order by order id
router.get('/:orderId', (req, res, next) => {
  const id = req.params.orderId
})

// create an order
router.post('/', (req, res, next) => {

})

// delete an order
router.delete('/', (req, res, next)=>{
  
})

module.exports = router