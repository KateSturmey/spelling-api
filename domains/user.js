//setting variable to Mysql
 var mysql = require('mysql');

//Creating a connection to the database
var con = mysql.createConnection({
   host: "den1.mysql4.gear.host",
   database: "spelling1",
   user: "spelling1",
   password: "Orang3!"
 });

 //Connecting to the database
    con.connect(function(err) {
   if (err) throw err;
console.log("Connected!");
 });
 
var bcrypt = require('bcrypt')
//var auth = require('../auth.js')
 
   exports.getAll = function(req, res) {
     var sql = "select * from user_details;"
     con.query(sql, function(err, result){
         if (err) { res.status(400).send(err) }
           res.status(200).send(result)
     })
 };