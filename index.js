const express = require('express')
const app = express()
var cb = require('./happy-cow');

app.set('port', (8080))
app.use(express.static(__dirname + '/public'))

app.get('/places/:page', function(request, response) {
  places(request, response)
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})

function places(request, response) {
	cb.places(request.params.serie).then(function(places) {
	response.send(places);
}, function(err){
	response.send(err);
});
}