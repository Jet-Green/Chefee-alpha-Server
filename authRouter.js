const Router = require('express')
const router = new Router()
const controller = require('./authController')
const { check } = require('express-validator')
const authMiddleware = require('./middleware/authMiddleware')

router.post('/registration', [
    check('username', 'Имя пользователя не может быть пустым').notEmpty(),
    check('name', 'Имя не может быть пустым').notEmpty(),
    check('password', 'Пароль дольжен быть больше 4 и меньше 17 символов').isLength({
        min: 4,
        max: 16
    }),
], controller.registration)
router.post('/login', controller.login)
// authMiddleware передаём вторым параметром

module.exports = router