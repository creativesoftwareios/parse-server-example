var api_key = 'key-b932884f8105196fbd78e3dd3304c028';
var domain = 'sandbox93a83c6dfe1b4404a8ca7f955389701d.mailgun.org';
var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});
var fs = require('fs');

Parse.Cloud.define("SendEmail", function(request, response) {

var template = fs.readFileSync('./email_template.html','utf8');

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

function setupHtmlBody() {
return '<html xmlns="http://www.w3.org/1999/xhtml"> <head> <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" /> <title>Demystifying Email Design</title> <meta name="viewport" content="width=device-width, initial-scale=1.0"/></head><body style="margin: 0; padding: 0;"><table align="center" bgcolor="#FE3668" border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse: collapse;"> <tr> <td align="center" style="padding: 40px 0 20px 0;"> <img src="http://files.parsetfss.com/642e8d52-0691-4d96-aee6-56189e460ccd/tfss-007850b9-a584-44ee-94b4-1139d20f9ac2-logo.png" alt="Creating Email Magic" width="160px" height="40px" style="display: block;" /></td></tr> <tr><td align="center" style="padding: 0px 0 10px 0;"><font color="#FFFFF">Life&#39;s too short to waste your time on Scrubs.</font></td></tr></table><table align="center" bgcolor="#FFFFFF" border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse: collapse;"> <tr> <td align="center" style="padding: 40px 0 10px 0;"> <font size="3px" >Your Beta Code: </font></td></tr> <tr><td align="center" style="padding: 0px 0 10px 0;"><font size="5px" ></font></td></tr></table><table align="center" bgcolor="#FFFFFF" border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse: collapse;"> <tr> <td align="center" style="padding: 200px 0 10px 0;"> <font size="2px" color="#B6B6B6" ></font></td></tr> </table></body></html>';
}
