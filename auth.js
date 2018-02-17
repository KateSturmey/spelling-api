var mysql = require('mysql')
var bodyParser=require('body-parser');

var con = mysql.createConnection({
   host: "den1.mysql4.gear.host",
   database: "spelling1",
   user: "spelling1",
   password: "Orang3!"
 });

 //Connecting to the database
    con.connect(function(err) {
   if (err) throw err;
console.log("Auth -Connected!");
 });
 
//var bcrypt = require('bcrypt');

 exports.getUserDetails = function(req, res) {
     var sql = "SELECT user_name, password_hash FROM user_details;"
     con.query(sql, function(err, result){
         if (err) { res.status(400).send(err) }
           res.status(200).send(result) 
     })
 };

exports.login = function(req,res){
	var password_hash = req.body.password_hash
	var sql = "SELECT user_name, password_hash FROM user_details WHERE user_name = ?"
     con.query(sql,[req.body.user_name] ,function(err, result){
    if(result.length > 0){
		if(password_hash==result[0].password_hash){
			res.status(200);
			res.end(JSON.stringify({login:'success'}))
			}
		else {
			res.status(401);
			res.end(JSON.stringify({login:'error'}))
		}
	}
});
}		