const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const db = require('./app/models/index')

db.mongoose
    .connect(db.url, {
        // useNewUrlParser: true,
        // useUnifiedTopology : true,
    })
    .then(() => {
        console.log('Database Connected')
    }).catch((err) => {
        console.log('Cannot connect to the database!', err)
        process.exit()
    })
    


app.get('/', (req, res) => {
    res.json({
        message: "Welcome To SPK SAW API"
    })
})

require('./app/routes/post.routes')(app)
require('./app/routes/paket.routes')(app)

const PORT = 5000
app.listen(PORT, () => {
    console.log('Server is running on http://localhost:'+ PORT)
})