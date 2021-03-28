'use strict'
var request = require('request');
var auth = require('./auth');
var _ = require('lodash');
function processData(data){
     data.forEach(obj => {
      request({
        url: process.env.OPENIMIS_URL,
        method: 'POST',
        headers : {
        "Authorization" : auth.user
        },
        json:obj
        }, function(error, response, body){
        return body
        });
     });
  
}

exports.processData = processData