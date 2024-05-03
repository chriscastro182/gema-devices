import express from 'express'
import morgan from 'morgan'
import pkg from '../package.json'
import cors from 'cors'

import authRoutes from './routes/auth.routes'
import userRoutes from './routes/user.routes'

const app = express()
//const cors = requre('cors')
//createRoles();

app.set('pkg', pkg)

app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

app.get('/', (req, res)=> {
    res.json({
        name: app.get('pkg').name,
        description: app.get('pkg').description,
        version: app.get('pkg').version,
        author: app.get('pkg').name,
    })
})

app.use('/api/users',userRoutes)
app.use('/api/auth',authRoutes)


export default app;