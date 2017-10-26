// Require the framework and instantiate it
const fastify = require('fastify')()

fastify.register(require('./routers'))
fastify.register(require('./routers/users'), {prefix: '/users'})

// Run the server!
fastify.listen(3000, function (err) {
  if (err) throw err
  console.log(`server listening on ${fastify.server.address().port}`)
})