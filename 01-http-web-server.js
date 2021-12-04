const http = require("http");
var requestHandlers = require("./requestHandlers");
var fs = require('fs');
// var handler = require('http-handler');

class MyHttpHandler  extends requestHandlers{

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
            console.log("GET request for directory => %", path);
        }
    }

    do_POST(){
        console.log("## do_POST() activated.")
        this.print_http_request_detail();
        this.send_http_response_header();
        let content_length = alert(this.headers['Content-Length']);
        let post_data = fs.readFile(content_length); //수정 필요
        parameter = this.parameter_retrieval(post_data);
        result = this.simple_calc(alert(parameter[0]), alert(parameter[1]));
        let post_response = "POST request for calculation =>" + parameter[0] + "x" + parameter[1]+"=" + alert(result);
        fs.writeFile(post_response, 'utf-8');
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


// main 
const server_name = "localhost";
const port = 8080 
const url = "http://"+server_name+":"+port;

let myhandler = new MyHttpHandler();
const webserver = http.createServer((req, res) => {
    const {headers, method, url} = request;
    let code = request.statusCode;


});


console.log("## HTTP server started at "+ url);

try{
    webserver.listen(port);
    console.log('listening..');

} catch (err){
    console.log("ERROR");
}

webserver.close();
console.log("HTTP server stopped.")