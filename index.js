
var AWS = require('aws-sdk');
var phantomjs = require('phantomjs-prebuilt');

exports.handler = function(event, context, callback) {
    var bucketName = process.env.S3_BUCKET;

    var phantom = phantomjs.exec('phantomjs-script.js', 'arg1', 'arg2')
    phantom.stdout.pipe(process.stdout)
    phantom.stderr.pipe(process.stderr)

    phantom.on('exit', code => {
        callback(null, bucketName);
    })


}