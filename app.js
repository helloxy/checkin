
/**
 * Module dependencies.
 */

var express = require('express')
  , http = require('http')
  , path = require('path')
  , fs = require('fs');

var app = express();
var pkg = JSON.parse(fs.readFileSync('./package.json'));

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.cookieParser('your secret here'));
app.use(express.session());
app.use(app.router);
app.use(require('less-middleware')({ src: __dirname + '/public' }));
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.locals({
    sys: pkg
});

app.get('/', require('./routes/index').index);
app.get('/api/checkin/:uid', require('./routes/index').checkin)

http.createServer(app).listen(app.get('port'), function(){
  console.log('Checkin server listening on port ' + app.get('port'));
});
