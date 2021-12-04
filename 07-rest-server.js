//from flask import Flask, request
//from flask_restx import Resource, Api
//app = Flask(__name__)
//api = Api(app)
const http = require('https');
const express = require('express');
const router = express.Router();
var app = express();


class MembershipManager{
    constructor(){
        this.database = {};
    }
    create(id, value){
        if (id in this.database){
            return {id: null}
        }else{
            this.database[id] = value;
        }
    }
    read(id){
        if (id in this.database){
            return {id : this.database[id]}
        } else{
            return {id: "None"}
        }
    }
    update(id, value){
        if (id in self.database){
            this.database[id] = value;
            return {id: this.database[id]}
        } else{
            return {id: "None"}
        }
    } 
    delete(id){
        if (id in self.database){
            delete self.database[id];
            return {id: "Removed"}
        } else{
            return {id: "None"}
        }
    }
}

class MembershipManager2{                   // 수정필요
    put (member_id){
        return member.create(member_id, );
    }
    get (member_id){
        return member.read(member_id);
    }
    post (member_id){
        return member.update(member_id, )
    }
    delete (member_id){
        return member.delete(member_id);
    }
}

var member = new MembershipManager;
var member_id = '33';

const webserver = http.createServer();
webserver.listen(5000);
// @router('/membership_api/<string:member_id>');
var temp = '/membership_api/' + member_id;


//app.run();
