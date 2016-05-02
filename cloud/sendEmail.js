var api_key = 'key-b932884f8105196fbd78e3dd3304c028';
var domain = 'sandbox93a83c6dfe1b4404a8ca7f955389701d.mailgun.org';
var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});
 
Parse.Cloud.define("SendEmail", function(request, response) {

var data = {
  from: request.params.fromText,
  to: request.params.toText,
  subject: request.params.subjectText,
  text: request.params.textText
};

mailgun.messages().send(data, function (error, body) {
  console.log(body);
});
 
});
