const UserService = require('../../services/user')

module.exports = (fastify, opts, next) => {

  fastify.get('/', async (req, rep) => {
    const user = await UserService.find(18);
    rep.send(user)
  })
  next()
}