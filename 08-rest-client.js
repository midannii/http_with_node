// import requests
const https = require('https');
var request = require('request');
var express = require('express');

const url = 'http://localhost:5000/membership_api/0001';
const url2 = 'http://localhost:5000/membership_api/0002';

console.log(url);

// Reads a non registered member : error-case
request.get(url, (err, res, body) => {
    var status = res.statusCode; 
    var r= res.body;
    console.log("#1 Code: "+ status + " >>  JSON: " + r + '>> JSON Result: ' + r['0001'])
})

request.put(url+"/?data={'0001':'apple'}", (err, res, body) => {
    var status = res.statusCode; 
    var r= res.body;
    console.log("#2 Code: "+ status + " >>  JSON: " + r + '>> JSON Result: ' + r['0001'])
})

request.get(url, (err, res, body) => {
    var status = res.statusCode; 
    var r= res.body;
    console.log("#3 Code: "+ status + " >>  JSON: " + r + '>> JSON Result: ' + r['0001'])
})

request.put(url+"/?data={'0001':'xpple'}", (err, res, body) => {
    var status = res.statusCode; 
    var r= res.body;
    console.log("#4 Code: "+ status + " >>  JSON: " + r + '>> JSON Result: ' + r['0001'])
})

request.post(url2+"/?data={'0002':'xrange'}", (err, res, body) => {
    var status = res.statusCode; 
    var r= res.body;
    console.log("#5 Code: "+ status + " >>  JSON: " + r + '>> JSON Result: ' + r['0001'])
})

request.put(url2+"/?data={'0002':'xrange'}", (err, res, body) => {

})
request.post(url2+"/?data={'0002':'orange'}", (err, res, body) => {
    var status = res.statusCode; 
    var r= res.body;
    console.log("#6 Code: "+ status + " >>  JSON: " + r + '>> JSON Result: ' + r['0001'])
})

request.delete(url, (err, res, body) => {
    var status = res.statusCode; 
    var r= res.body;
    console.log("#7 Code: "+ status + " >>  JSON: " + r + '>> JSON Result: ' + r['0001'])
})

request.delete(url, (err, res, body) => {
    var status = res.statusCode; 
    var r= res.body;
    console.log("#8 Code: "+ status + " >>  JSON: " + r + '>> JSON Result: ' + r['0001'])
})

/*

var req = https.get(url, function(response){
    var status = response.statusCode;
    console.log("#1 Code: "+ status + " >>  JSON: " + response.json() + '>> JSON Result: ' + r.json()['0001']);

})
// Creates a new registered member : non-error case
r = requests.put(url, data={'0001':'apple'})
console.log("#2 Code:", r.status_code, ">>", "JSON:", r.json(), ">>", "JSON Result:", r.json()['0001'])

// Reads a registered member : non-error case
r = requests.get(url)
console.log("#3 Code:", r.status_code, ">>", "JSON:", r.json(), ">>", "JSON Result:", r.json()['0001'])

// Creates an already registered member : error case
r = requests.put(url, data={'0001':'xpple'})
console.log("#4 Code:", r.status_code, ">>", "JSON:", r.json(), ">>", "JSON Result:", r.json()['0001'])

// Updates a non registered member : error case
r = requests.post(url2, data={'0002':'xrange'})
console.log("#5 Code:", r.status_code, ">>", "JSON:", r.json(), ">>", "JSON Result:", r.json()['0002'])

// Updates a registered member : non-error case
r = requests.put(url2, data={'0002':'xrange'})
r = requests.post(url2, data={'0002':'orange'})
console.log("#6 Code:", r.status_code, ">>", "JSON:", r.json(), ">>", "JSON Result:", r.json()['0002'])

// Delete a registered member : non-error case
r = requests.delete(url)
console.log("#7 Code:", r.status_code, ">>", "JSON:", r.json(), ">>", "JSON Result:", r.json()['0001'])

// Delete a non registered member : non-error case
r = requests.delete(url)
console.log("#8 Code:", r.status_code, ">>", "JSON:", r.json(), ">>", "JSON Result:", r.json()['0001'])
*/