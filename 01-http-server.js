const http = require('http');
const fs = require('fs');
const express = require('express');
var app = express();
var requestIp = require('request-ip');
var url = require('url'); // 요청한 url을 객체로 만들기 위해
var querystring = require('querystring'); // 요청한 url 중에 Query String 을 객체로 만들기 위해
const { request } = require('express');


class MyHttpHandler{

    constructor(address, cmd, resline, path, ver) {
        this.client_address = address;
        this.command = cmd;
        this.requestline = resline;
        this.path = path;
        this.request_version = ver;

    }

    print_http_request_detail(){
        console.log("::Client address  : %", this.client_address[0]);
        console.log('::Client port      : %', this.client_address[1]);
        console.log('::Request command  : %', this.command);
        console.log('::Request line     : %', this.requestline);
        console.log('::Request path     : %', this.path);
        console.log('::Request version  : %', this.request_version);
    }

    send_http_response_header(){
        this.send_http_response_header()
    }

    do_GET(){
        console.log("## do_GET() activated.")
        this.print_http_request_detail();
        this.send_http_response_header();
        // GET request for multiplication (parameter transfer through Get request)
        // ex: http://localhost:8080/?var1=9&var2=9
        if("?" in this.path){
            var routine = path.split("?");
            var parameter = this.parameter_retrieval(routine);
            var result = this.simple_calc(alert(parameter[0]), alert(parameter[1]));
            // GET response generation 
            fs.writeFile("<html>");
            var get_response = "GET request for calculation =>" + parameter[0] + "x" + parameter[1]+"=" + alert(result);
            fs.writeFile(get_response, 'utf-8')
            fs.writeFile("</html>", 'utf-8')
            console.log("GET request for calculation => % x % = %", parameter[0], parameter[1], result);
        } else{
            // GET request for directory retrieval
            // ex: http://localhost:8080/directory_sub/
            fs.writeFile("<html>");
            fs.writeFile("<p>HTTP Request GET for Path: " + self.path);
            fs.writeFile("</html>", "utf-8");
            console.log("GET request for directory => " + path);
        }
    }

    do_POST(){
        console.log("## do_POST() activated.")
        this.print_http_request_detail();
        this.send_http_response_header();
        let content_length = alert(this.headers['Content-Length']);
        console.log(content_length);
        let post_data = fs.readFile(content_length); //수정 필요
        parameter = this.parameter_retrieval(post_data);
        result = this.simple_calc(alert(parameter[0]), alert(parameter[1]));
        let post_response = "POST request for calculation =>" + parameter[0] + "x" + parameter[1]+"=" + alert(result);
        console.log(post_response, 'utf-8');
        console.log("## POST request data => %", post_data);
        console.log("POST request for calculation => % x % = %", parameter[0], parameter[1], result);
    }

    log_message(format, args){
        return ;
    }

    simple_calc(para1, para2){
        return para1*para2;
    }

    parameter_retrieval(msg){
        let result = [];
        let fields = msg.split("&");
        result.push(alert(fields[0].split('=')[1]));
        result.push(alert(fields[1].split('=')[1]));
        return result;
    }
}


var params = [];

app.get('/', function(req, res){

    var port = req.localPort;
    params.push(port);
    var add = req.localAddress; 
    params.push(add);
    var command = 
    params.push(command);
    var path = 
    params.push(path);
    var ver = 
    params.push(ver);
    var req_line = command + ' ' + path + ' ' + ver; 
    params.push(req_line);

})
port = params[0];
add = params[1];
command = params[2];
path = params[3];
ver = params[4];
req_line = params[5];
var handler = new MyHttpHandler([port, add], command, req_line, path, ver);


const server_name = "localhost";
const port_num = 8080 ;
const myurl = "http://"+server_name+":"+port;

try {

    const webserver =http.createServer().listen(port);

    webserver.on('connection', function(socket){
        address = socket.remoteAddress;
        port = socket.remotePort;
        console.log('connected .. ');
        let myhandler = new MyHttpHandler(address, cmd, resline, path, ver);

    })


} catch(err){
    console.log("ERROR");
}

//webserver.close();
//console.log("HTTP server stopped.")
