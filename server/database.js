const sqlite = require('sqlite3').verbose();
const path = require('path')

const db = new sqlite.Database(path.resolve(__dirname, './pipstop.db'), sqlite.OPEN_READWRITE, (err) => {
    if (err)
        return console.error(err);
});

function getUser(email, callback) {
    db.get('SELECT * FROM user WHERE email = ?', [email], (err, row) => {
        if (err)
            callback(err, null);
        else
            callback(null, row);
    });
}

function insertUser(email, fname, lname, pnumber, tname, callback) {
    const insertQuery = 'INSERT INTO user (email, fname, lname, pnumber, teamname) VALUES (?, ?, ?, ?, ?)'; 
    db.run(insertQuery, [email, fname, lname, pnumber, tname], (err) => {
        if(err) {
            if (err.message.includes('UNIQUE constraint failed')) {
                callback(`User with email ${email} already exists!`, null);
            }
            else
                callback(err, null);
        }
            
        else
            callback(null, {email, fname, lname, pnumber});
    });
}

module.exports = {
    getUser,
    insertUser
}