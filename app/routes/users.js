const { Router } = require('express')
const { checkJWT } = require('../middlewares/checkJWT')
const {
    createItem,
    deleteItem,
    getItem,
    getItems,
    updateItem
} = require('../controllers/users')

const router = Router()

router.get('/', checkJWT, getItems)
router.get('/:id', checkJWT, getItem)
router.post('/', createItem)
router.put('/:id', checkJWT, updateItem)
router.delete('/:id', checkJWT, deleteItem)

module.exports = router