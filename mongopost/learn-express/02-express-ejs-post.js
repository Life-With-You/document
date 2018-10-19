const express = require('express');
const app = express();
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({
    extended: false
}));
app.set('views', './views');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    // res.send('Hello World!');
    res.send('from');
});

app.post('/', (req, res) => {

});
app.listen(8080, () => {
    console.log('Example app listening on port 8080!');
});

//Run app, then load http://localhost:8080 in a browser to see the output.