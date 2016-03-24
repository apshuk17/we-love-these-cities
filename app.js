var express = require('express'),
app = express();

var routes = require('./routes/route.js');

app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));


app.get('/', routes.home );


app.get('/:city', routes.city );
var port = process.env.PORT || 3000;

var server=app.listen(port,function(req,res){
    console.log("Server is running at port:"+port);
});