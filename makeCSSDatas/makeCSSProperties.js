var URL = "http://localhost/CSSProperties.html";
//var URL = "https://www.w3.org/Style/CSS/all-properties";
var client = require("cheerio-httpcli");
client.fetch(URL, {}, function(err, $, res) {
  var result = {};
  $("#list tbody tr:not(.ed):nth-child(n+3)").each(function(index) {
    var anchor = ($(this).find("td:nth-child(2) a"));
    var propertyName = anchor.text();
    var property = result[propertyName];
    if (!property) {
      property = { "links": [], "test-datatypes": [], animatables:[] };
      result[propertyName] = property;
    }
    property.links.push(anchor.attr("href"));
  });
  console.log("var CSSProperties = ");
  console.log(stringify(result) + ";");
});

function stringify(resultObject) {
  return JSON.stringify(resultObject, null, 2);
}
