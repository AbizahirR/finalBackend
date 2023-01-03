const { Router } = require('express')
const { checkJWT } = require('../middlewares/checkJWT')
const {
    createItem,
    deleteItem,
    getItem,
    getItems,
    updateItem
} = require('../controllers/products')

const router = Router()

router.get('/', getItems)
router.get('/:id', getItem)
router.post('/', createItem)
router.put('/:id', checkJWT, updateItem)
router.delete('/:id', checkJWT, deleteItem)

module.exports = router