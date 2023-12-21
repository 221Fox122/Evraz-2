const fastify = require('fastify')({
    logger: true
})

// fastify.get('/hello2', async (request, reply) => {
//     return { hello: 'world' }
// })
fastify.post('/test', async function (request, reply) {
    const data = await axios.get( url: 'https://fakestoreapi.com/products')

catch (e) {
        console.log(e)
    }
    reply.send(data.data);
})
/**
 * Run the server!
 */
const start = async () => {
    try {
        await fastify.listen({ port: 3000 })
    } catch (err) {
        fastify.log.error(err)
        process.exit(1)
    }
}
start()