const express = require('express')
const app = express()
const port = 50000

app.get('/', (req, res) => res.send('<h1>Site down for maintenance!</h1>'))

app.listen(port, () => console.log(`Tofutexts app listening on port ${port}!`))
