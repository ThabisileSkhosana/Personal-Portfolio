import express from 'express'
const app = express()
import bodyParser from 'body-parser'
import adminUserRoutes from './routes/adminUser.routes.js'
import userRoutes from './routes/user.routes.js'
import pool from './config/db.config.js'
import 'dotenv/config'


app.use(express.json())
app.use(bodyParser.json())

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/', (req, res) => {
  res.json({ info: 'Node.js, Express, and Postgres API' })
})

pool.query('SELECT NOW()', (err, res) => {
  if(err){
    console.error('Error connecting to db',err)
  } else{
    console.log('Succesfully connected')
  }
})
app.use('/api', adminUserRoutes)
app.use('/api', userRoutes)

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}.`)
  })
