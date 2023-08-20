const { decodedToken } = require('../helpers/jwt')
const { User } = require('../models')

const authenticationUser = async (req, res, next) => {
    try {
        const access_token = req.headers.access_token
        if(!access_token){
            throw { name: 'InvalidToken' }
        }

        const data = decodedToken(access_token)
        const user = await User.findByPk(data.id)
        if(!user){
            throw { name: 'InvalidToken'}
        }
        req.user = {id: user.id, name:user.email}
        next()
    } catch (error) {
        next(error)
    }
}

module.exports = { authenticationUser }