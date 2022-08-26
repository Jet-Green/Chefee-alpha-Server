const User = require('./models/user-model')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { validationResult } = require('express-validator')
const { secret } = require('./config')

function generateAccessToken(username, id) {
    const payload = {
        username,
        id
    }
    return jwt.sign(payload, secret, { expiresIn: '12h' })
}

class authController {
    async registration(req, res) {
        try {

            // валидация
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors })
            }

            const { username, name, password } = req.body
            // мы пока не знаем, есть ли он
            const candidate = await User.findOne({ username })
            if (candidate) {
                return res.status(400).json({ message: 'Такой пользователь уже есть' })
            }

            // хеширование пароля
            const hashedPassword = bcrypt.hashSync(password, 7)
            const user = new User(
                {
                    username,
                    name,
                    password: hashedPassword
                }
            )
            user.save()

            return res.json({ message: 'Пользователь успешно зарегистрирован' })
        } catch (err) {
            console.log(err)
        }
    }

    async login(req, res) {
        try {
            const { username, name, password } = req.body;

            const user = await User.findOne({ username })

            if (!user) {
                return res.status(400).json({ message: `Пользователь ${username} не найден` })
            }

            const validPassword = bcrypt.compareSync(password, user.password)

            if (!validPassword) {
                return res.status(400).json({ message: 'Введён неверный пароль' })
            }

            const token = generateAccessToken(user.username, user._id)

            return res.json({ token })
        } catch (err) {
            console.log(err)
        }
    }
}

module.exports = new authController()