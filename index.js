const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const db = require('./db/db');
const port = process.env.PORT || 5000;;

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.get('/', (req, res) => {
    db.query(`SELECT * FROM posts`, (err, rows, fields) => {
        if (err) {
            const error = { message: 'Error occured during fetching posts', error: err }
            res.status(500).send(error)
        } else {
            res.send(rows)
        }
    })
})

app.listen(port, () => console.log(`App listening at http://localhost:${port}`))