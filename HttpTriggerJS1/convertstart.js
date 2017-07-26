var myconvertstart = function (fpath){

var apiKey = process.env.CONVERT_API_KEY;

console.log(fpath);
var filepath = fpath;

var request = require("request");
var fs = require('fs'),
    cloudconvert = new (require('cloudconvert'))(apiKey);


var res = cloudconvert.createProcess({
    "inputformat": "mobi",
    "outputformat": "epub"
}, function (a, process, b) {
        process.start({
            "input": "download",
            "file": filepath,
            "outputformat": "epub",
            "callback": process.env.CONVERT_CALLBACK_URI
        });
    }
);

}

exports.myConvertStart = myconvertstart;

