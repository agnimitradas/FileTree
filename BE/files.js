var fs = require('fs'),
    path = require('path'),
    express = require('express'),
    bodyParser = require('body-parser'),
    cors = require('cors');

var app = express();
var port = 7070;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors())

var fileRouter = express.Router();

fileRouter.route('/allFiles')
    .get(function(req, res) {
        var formatedFiles = dirTree('\\\\10.56.166.248\\Users\\ad00440946\\Downloads\\Angular2-GettingStarted-master')
        res.json(formatedFiles);
    })

    .post(function(req,res){
        var path = req.body.path;
        console.log(path);
       // var formattedPath = path.replace(/\\/g, "\\\\");
        //console.log(formattedPath);
        var formatedFiles = dirTree(path)
        res.json(formatedFiles);
})

function dirTree(filename) {
    var stats = fs.lstatSync(filename),
        info = {
            path: filename,
            name: path.basename(filename)
        };

    if (stats.isDirectory()) {
        info.type = "folder";
        info.children = fs.readdirSync(filename).map(function(child) {
            return dirTree(filename + '/' + child);
        });
    } else {
        info.type = "file";
    }
    return info;
}

//if (module.parent == undefined) {
//    console.log(dirTree('\\\\10.56.166.248\\Users\\ad00440946\\Downloads'));
//}

app.use('/api', fileRouter);


app.listen(port, function() {
    console.log('Running on port no:' + port);
});