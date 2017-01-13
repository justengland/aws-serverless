
var AWS = require('aws-sdk');
var phantomjs = require('phantomjs-prebuilt');

exports.handler = function(event, context, callback) {
    var bucketName = process.env.S3_BUCKET;

    var program = phantomjs.exec('phantomjs-script.js', 'arg1', 'arg2')
    // program.stdout.pipe(process.stdout)
    // program.stderr.pipe(process.stderr)

    program.on('exit', code => {
        callback(null, bucketName);
    })


}