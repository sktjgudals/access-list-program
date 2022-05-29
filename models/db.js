let mysql = require('mysql');
 let db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'Asflsnrtm2016@',
    database:'first_app'
  });
  db.connect();

 module.exports =db; 