//setting variable to Mysql
 var mysql = require('mysql');

//Creating a connection to the database
var pool      =    mysql.createPool({
   connectionLimit : 100, //important
   host: "den1.mysql4.gear.host",
   database: "spelling1",
   user: "spelling1",
   password: "Orang3!",
   debug    :  false
 });

 
 exports.getAll = function(req, res) {
        pool.getConnection(function(err,connection){
        if (err) {
          res.json({"code" : 100, "status" : "Error in connection database"});
          return;
		  console.log("User - Connected!");
        }   
        console.log('connected as id ' + connection.threadId);
        
        
		connection.query("select * from user_details",function(err,rows){
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
