require('./conf/conf')

const express = require('express')
const app = express()
const bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

app.get('/usuario', function (req, res) {
  res.json('GET usuario')
})

app.post('/usuario', function (req, res) {

    if(req.body.nombre === undefined) {
        res.status(400).json({
            ok: false,
            message: 'No se envio el parametro de nombre'
        });
    } else{
        res.json({
            persona: req.body
        });
    }
})

app.put('/usuario/:id', function (req, res) {
    let id = req.params.id;
    res.json({
        id
    });
})
 
 app.delete('/usuario', function (req, res) {
    res.json('DELETE usuario')
})

app.listen(process.env.PORT, ()=>{
    console.log(`servidor escuchando en el puerto ${process.env.PORT}`);
});