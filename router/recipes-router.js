const Router = require('express').Router
const router = Router()
const recipesController = require('../controllers/recipes-controller')

router.get('/get-all', recipesController.getAll)
router.get('/get', recipesController.getById)
router.get('/get-by-str', recipesController.getAll)
router.post('/change-rating', recipesController.changeRating)
// использовать это, чтобы добавить тестовые рецепты
// router.get('/test-insert', recipesController.insertOne)

module.exports = router;