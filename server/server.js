const express = require('express')
const cors = require('cors')
const mysql = require('mysql')
const bodyParser = require('body-parser')
const app = express()

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json({ limit: '10mb' }))

const credentials = {
    host: '127.0.0.1',
    user: 'root',
    password: 'password',
    database: 'FHIR'
}

app.get('/', (req, res) => {
    res.send("server.js app.get activation")
})

app.post('/login', (req, res) => {
    const { id, password } = req.body
    const values = [id, password]
    var connection = mysql.createConnection(credentials)
    connection.query("SELECT * FROM FHIR.Account WHERE id=? AND password=?", values, (err, result) => {
        if (err) {
            res.status(500).send(err)
        } else {
            if (result.length > 0) {
                res.status(200).send({
                    "id": result[0].id,
                    "username": result[0].username,
                    "identity": result[0].identity
                })
            } else {
                res.status(400).send('Account no exist')
            }
        }
    })
    connection.end()
})

app.listen(7001, () => console.log(`Server Running...`))
  