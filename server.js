const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const port = process.env.PORT || 8000

const router = express.Router()

router.get('/', function (req, res) {
  res.json({message: 'It Works'})
})

app.use('/api', router)
app.listen(port)
console.log('<< Server Runnig >>')
