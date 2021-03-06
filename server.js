const express = require('express')
const path = require('path')
const routes = require('./routes')

const app = express()

const PORT = process.env.PORT || 4001

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')))

app.use(routes)

app.listen(PORT, () => {
    console.log(`Server now listening on port ${PORT}`)
})