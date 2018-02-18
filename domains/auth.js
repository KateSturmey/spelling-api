var mysql = require('mysql')
var bodyParser=require('body-parser');

var pool = mysql.createPool({
   connectionLimit : 100, //important
   host: "den1.mysql4.gear.host",
   database: "spelling1",
   user: "spelling1",
   password: "Orang3!",
   debug:  false
 });
 console.log("connected to auth.js");

 exports.getUserDetails = function(req, res) {
        pool.getConnection(function(err,connection){
        if (err) {
          res.json({"code" : 100, "status" : "Error in connection database"});
          return;
		  console.log("AUTH - Connected!");
        }   
        console.log('connected as id ' + connection.threadId);
        
        
		connection.query("SELECT user_name, password_hash FROM user_details;",function(err,rows){
            connection.release();
            if(!err) {
                res.json(rows);
            }           
        });

        connection.on('error', function(err) {      
              res.json({"code" : 100, "status" : "Error in connection database"});
              return;     
        });
	});
  }
  
exports.login = function(req,res){
	pool.getConnection(function(err,connection){
	var password_hash = req.body.password_hash
	var sql = "SELECT user_name, password_hash FROM user_details WHERE user_name = ?"
     
	 if (err) {
          res.json({"code" : 100, "status" : "Error in connection database"});
          return;
		  console.log("AUTH - Connected!");
        }   
        console.log('connected as id ' + connection.threadId);
	 
	 connection.query(sql,[req.body.user_name] ,function(err, result){
		 connection.release();
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
	 connection.on('error', function(err) {      
              res.json({"code" : 100, "status" : "Error in connection database"});
              return;     
        });
});
}		