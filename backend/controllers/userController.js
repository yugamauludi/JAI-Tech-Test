const {
    comparePassword
} = require('../helpers/password');
const {
    User
} = require('../models')
const {
    sign
} = require('../helpers/jwt')
const {
    OAuth2Client
} = require("google-auth-library")

class Controller {

    static async register(req, res, next) {
        try {
            let {
                username,
                email,
                password
            } = req.body
            let newUser = await User.create({
                username,
                email,
                password
            })
            res.status(201).json({
                id: newUser.id,
                email: newUser.email,
                username: newUser.username
            })
        } catch (error) {
            next(error)
        }
    }

    static async login(req, res, next) {
        try {
            const {
                email,
                password
            } = req.body
            if (!email || !password) {
                throw {
                    name: 'BadRequest'
                }
            }
            const user = await User.findOne({
                where: {
                    email
                }
            })
            if (!user) {
                throw {
                    name: 'Unauthorized'
                }
            } else {
                const compare = comparePassword(password, user.password)
                if (!compare) {
                    throw {
                        name: 'Unauthorized'
                    }

                } else {
                    const {
                        id
                    } = user
                    const access_token = sign({
                        id
                    })
                    res.status(201).json({
                        access_token,
                        email: user.email
                    })
                }
            }

        } catch (error) {
            next(error)
        }
    }

    static async googleSignIn(req, res, next) {
        try {
            let googleToken = req.headers.google_token
            let CLIENT_ID = process.env.CLIENT_ID

            const client = new OAuth2Client(CLIENT_ID)

            const ticket = await client.verifyIdToken({
                idToken: googleToken,
                audience: CLIENT_ID
            })
            const googlePayload = ticket.getPayload()

            const [user, create] = await User.findOrCreate({
                where: {
                    email: googlePayload.email
                },
                defaults: {
                    email: googlePayload.email,
                    password: "abcd1234",
                },
                hooks: false
            })

            let payload = {
                id: user.id,
            };

            let access_token = sign(payload);
            res
            .status(200)
            .json({
                access_token,
                email: user.email
            });
            
        } catch (error) {
            next(error)
        }
    }
}


module.exports = Controller