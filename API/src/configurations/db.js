const mysql = require('mysql');

mysqlConnection = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    //host: "192.168.1.10",
    host: "localhost",
    //port: "3307",
    port: "6602",
    user: "root",
    password: "1234",
    database: "tweet_app_db"
});

mysqlConnection.connect(function(err) {
    if (err) {
        console.log(err);
        return;
    } else {
        console.log("DB is connected!");
    }
});

module.exports = mysqlConnection;
