const Router = require('express').Router
const userController = require('../controllers/user-controller')
const router = Router()
const { body } = require('express-validator')

const authMiddleware = require('../middleware/auth-middleware')

router.post('/registration', body('email').isEmail(), body('password').isLength({ min: 4, max: 32 }), userController.registration)
router.post('/login', userController.login)
router.post('/logout', userController.logout)
router.get('/activate/:link', userController.activate)
router.get('/refresh', userController.refresh)
router.get('/users', authMiddleware, userController.getUsers)

module.exports = router