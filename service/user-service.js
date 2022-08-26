const UserModel = require('../models/user-model');
const bcrypt = require('bcryptjs');

class UserService {
    async registration(email, password) {
        const candidate = await UserModel.findOne({ email })
        if (candidate) {
            throw new Error(`Пользователь с почтой ${email} уже существует`)
        }

        const hashPassword = bcrypt.hash(password, 5)
        const user = await UserModel.create({ email, password: hashPassword })

    }
}

module.exports = new UserService()