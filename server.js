var express = require('express');

var app = express();

var handlebars = require('express-handlebars').create({defaultLayout:'main'});

app.disable('x-powered-by');

app.set('port', process.env.PORT || 3000);

app.use(express.static(__dirname + '/public'));



app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

//more imports here





app.get('/home', function(req, res){
    res.render('home');
 });

 app.get('/blog', function(req, res){
        res.render('blog');
     });

app.get('/quem-somos', function(req, res){
res.render('quem-somos');
});

app.get('/contato', function(req, res){
        res.render('contato');
        });

app.get('/galeria-de-videos', function(req, res){
        res.render('galeria-de-videos');
        });

app.get('/', function(req, res){
    res.render('home');
 });

app.get('/servicos', function(req, res){
        res.render('servicos');
     });

app.get('/post-modelo', function(req, res){
        res.render('post-modelo');
        });

app.get('/pessoas-fisicas', function(req, res){
        res.render('pessoas-fisicas');
        });

app.get('/empresas', function(req, res){
        res.render('empresas');
        });

app.get('/prefeituras', function(req, res){
        res.render('prefeituras');
        });

app.get('/advocacia', function(req, res){
        res.render('advocacia');
        });

app.get('/imobiliarias', function(req, res){
        res.render('imobiliarias');
        });




app.listen(app.get('port'), function(){
        console.log("Express started on http://localhost:" + app.get('port') + " press ctrl c to terminate.");
});