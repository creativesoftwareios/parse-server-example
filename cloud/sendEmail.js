var api_key = 'key-b932884f8105196fbd78e3dd3304c028';
var domain = 'sandbox93a83c6dfe1b4404a8ca7f955389701d.mailgun.org';
var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});
var fs = require('fs');
var path = require('path');
var _ = require('underscore');

Parse.Cloud.define("SendEmail", function(request, response) {

var filename = 'email_template.html';
var filepath = path.join(__dirname, filename);
var template = fs.readFileSync(filepath, 'utf8');

// var compiled = _.template(template);
// var html = compiled(
//     {
//       'link': request.params.fromText
//     }
// );

var data = {
  from: request.params.fromText,
  to: request.params.toText,
  subject: request.params.subjectText,
  html: template
};

mailgun.messages().send(data, function (error, body) {
  console.log(body);
});
 
});
