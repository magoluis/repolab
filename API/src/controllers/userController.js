const mysqlConnection = require('../configurations/db');

const get = (req, res) => {
    mysqlConnection.query('SELECT * FROM User', (err, rows, fields) => {
        if (!err) {
            res.json({ "filas": rows });
        } else {
            console.log(err);
        }
    });

    return mysqlConnection;
}

const getOne = (req, res) => {
    const { idUser } = req.params;
    mysqlConnection.query('SELECT * FROM User WHERE idUser = ?', [idUser], (err, rows, fields) => {
        if (!err) {
            res.json(rows[0]);
        } else {
            console.log(err);
        }
    });
}

const insert = (req, res) => {
    const { idUser, name, email } = req.body;

    const query = `INSERT INTO User(idUser, name, email) values (?, ?, ?)`;

    mysqlConnection.query(query, [idUser, name, email], (err, rows, fields) => {
        if (!err) {
            res.json({ Status: 'User Saved!' });
        } else {
            console.log(err);
        }
    });
}

module.exports = {
    get: get,
    getOne: getOne,
    insert: insert
}