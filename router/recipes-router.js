const Router = require('express').Router
const router = Router()
const recipesController = require('../controllers/recipes-controller')

const authMiddleware = require('../middleware/auth-middleware')

router.get('/get-all', recipesController.getAll)
router.get('/get', recipesController.getById)
router.get('/get-by-str', recipesController.getAll)
router.get('/get-by-str-request', recipesController.findByString)
router.post('/like', authMiddleware, recipesController.like)
router.post('/share', authMiddleware, recipesController.share)
// использовать это, чтобы добавить тестовые рецепты
// router.get('/test-insert', recipesController.insertOne)
// router.get('/test-delete-all', recipesController.deleteAll)

module.exports = router;