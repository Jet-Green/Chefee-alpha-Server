const Router = require('express').Router
const router = Router()
const recipesController = require('../controllers/recipes-controller')

router.get('/get-all', recipesController.getAll)

module.exports = router;