var express = require('../../');
var path = require('path');

var app = (module.exports = express());

var FILES_DIR = path.join(__dirname, 'files');

// /files/* is accessed via req.params[0]
// but here we name it :file
app.get('/files/:file(*)', function (req, res, next) {
    res.download(req.params.file, { root: FILES_DIR }, function (err) {
        if (!err) return; // file sent
        if (err.status !== 404) return next(err); // non-404 error
        res.statusCode = 404;
        res.send('Cant find that file, sorry!');
    });
});

if (!module.parent) {
    app.listen(3000);
    console.log('Express started on port 3000');
}



