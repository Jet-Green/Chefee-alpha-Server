const { User } = require('../mongo/schemas')

module.exports = {
    registerUser: (req, res) => {
        User.findOne({ email: req.body.email })
            .then((user) => {
                if (user) {
                    return res.status(400).send('User has already registered with email: ' + req.body.email)
                }
                let userData = req.body;

                const newUser = new User({
                    name: userData.name,
                    email: userData.email,
                    password: userData.password
                })

                newUser.save()
                return res.status(200).send('OK')
            })
    },
    authentificateUser: (req, res) => {
        let data = req.body;
        User.findOne({ email: data.email }, function (err, user) {
            if (user) {
                // test a matching password
                user.comparePassword(data.password, function (err, isMatch) {
                    console.log(data.password, isMatch); // -> Password123: true
                    res.json({ correct: isMatch });
                });
            } else {
                res.json({ correct: false });
            }
        });
    }
}