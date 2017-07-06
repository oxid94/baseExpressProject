const express = require('express');
const Twig = require("twig");

const app = express();
// folder of archives
app.use(express.static('public'));

// Start configure Twig options
app.set('views', __dirname + '/views');
app.set('view engine', 'twig');
app.set('twig options', {
    strict_variables: false
});
// End configure Twig options


app.get('/', function(req, res){
  res.render('index.twig', {
    name : "Marc"
  });
});

app.listen(3000, () => {
    console.log('You are connected in port 3000')
});