const http = require("http");
const request = require('request');

console.log("## HTTP client started.");
console.log("## GET request for http://localhost:8080/temp/");

var hname = 'localhost';
var portnum = 8080;
var options = {
    hostname: hname, 
    port: portnum, 
    path: '/temp', 
    // agent : false
};

console.log("## GET response [start]");
http.request(options, function(response){

})
var req  = http.request(options);
req.end();

http.get(options, (res) => {
   console.log(res.data);
    console.log('---')
});
console.log("## GET response [end]");

console.log("## GET request for http://localhost:8080/?var1=9&var2=9");
console.log("## GET response [start]");
request.get(url, (res) => {
    res.send(1); // var2
    res.send(9); // var2
    console.log(res);
})
console.log("## GET response [end]");
console.log("## POST response [start]");
console.log("## POST request for http://localhost:8080/ with var1 is 9 and var2 is 9");
request.post(url, (res) => {
    res.send(1); // var2
    res.send(9); // var2
    console.log(res);
})
console.log("## POST response [end]");

console.log("## HTTP client completed.");
