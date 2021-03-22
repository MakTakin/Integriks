const express = require('express')
const cors = require('cors')
const voteRouter = require('./routers/vote')
const db = require('./database/database')
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 8080

const app = express()

app.use(bodyParser.json());

app.use(cors())

app.use('/vote', voteRouter)

async function start() {
    try {
        await db.sync()
        await app.listen(PORT, function () {
            console.log(`Server listens http://localhost:${PORT}`)
        })
    } catch (e) {
        console.log(e)
    }
}

start()