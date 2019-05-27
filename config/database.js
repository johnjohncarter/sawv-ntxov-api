const mongoose = require('mongoose');

let database_conection = process.env.DB_CONNECTION;
let database_host = process.env.DB_HOST;
let database_port = process.env.DB_PORT;
let database_name = process.env.DB_DATABASE;
let database_username = process.env.DB_USERNAME;
let database_password = process.env.DB_PASSWORD;

module.exports = {
    connection: function () {
        mongoose.connect(
            database_conection + '://'
            + database_username + ':'
            + database_password + '@'
            + database_host + ':'
            + database_port + '/'
            + database_name
        );

        let database = mongoose.connection;

        database.once('open', function () {
            console.log('connect database mongo_bd successfully!!!')
        });

        database.on('error', function (err) {
            console.log('error', err)
        });
    }
};