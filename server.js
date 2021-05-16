var express = require('express')
var app = express()

app.use(express.static('./dist/service-provider'));

app.get('/*', function (req, res) {
    res.sendFile('index.html', { root: 'dist/service-provider/' }
    );
});

app.listen(process.env.PORT || 8080);   