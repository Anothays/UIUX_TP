import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { carRouter } from './routes/car.js'

const app = new Hono()

app.use(async (c, next) => {
    const start = performance.now()
    await next()
    const end = performance.now()
    c.res.headers.set('X-Response-Time', `${end - start}`)
})

app.get('/', (c) => {
    return c.text('Welcome to the Car API')
})

app.route('/api', carRouter)

serve({ fetch: app.fetch, port: 3000 }, (info) => {
    console.log(`Server is running on http://localhost:${info.port}`)
})
