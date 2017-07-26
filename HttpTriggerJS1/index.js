module.exports = function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    if (req.query.filename || (req.body && req.body.filename)) {
        context.res = {
            // status: 200, /* Defaults to 200 */

            body: "Hello " + (req.query.filename || req.body.filename)

        };
    }
    else {
        context.res = {
            status: 400,
            body: "Please pass a name on the query string or in the request body"
        };
    }

    var converter = require('./convertstart.js');
    converter.myConvertStart(req.query.filename);

    context.done();
};