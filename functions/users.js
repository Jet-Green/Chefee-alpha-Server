const { User } = require('../mongo')

module.exports = {
    registerUser: (req, res) => {
        User.findOne({ email: req.body.email })
            .then((user) => {
                if (user) {
                    return res.status(400).send('User has already registered with email: ' + req.body.email)
                }
                let userData = req.body;

                const newUser = new User({
                    username: userData.username,
                    email: userData.email,
                    password: userData.password
                })

                newUser.save()
                return res.status(200).send('OK')
            })
    }
}