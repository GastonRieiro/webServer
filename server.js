const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers');
const port = process.env.PORT || 8080 || 3000;

app.use(express.static(__dirname + '/public'));

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
})


//Express HBS engine
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'gastón'
    });
})

app.get('/about', (req, res) => {
    res.render('about');
})