import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { carRouter } from './routes/car.js'

const app = new Hono()

// Middleware CORS
app.use('*', cors({
    origin: ['http://localhost:5173', 'http://localhost:3000'],
    allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
}))

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
