// main server app file
const express = require('express');
const path = require('path');
const logger = require('morgan');

const app = express();

app.set('port', process.env.PORT || 3015);
app.use(logger('dev'));

app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname, './public/index.html'));
});

app.listen(app.get('port'), function(err) {
	console.log(`Express Server listening on ${app.get('port')} in ${app.get('env')} mode`);
});
