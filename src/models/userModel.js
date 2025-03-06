// filepath: /express-mysql-migration-app/express-mysql-migration-app/src/models/userModel.js
const mysql = require('mysql2/promise');
const { DB_HOST, DB_USER, DB_PASSWORD, DB_NAME } = process.env;

const pool = mysql.createPool({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME,
});

class User {
    static async create(userData) {
        const [result] = await pool.query('INSERT INTO users SET ?', userData);
        return result.insertId;
    }

    static async findAll() {
        const [rows] = await pool.query('SELECT * FROM users');
        return rows;
    }

    static async findById(id) {
        const [rows] = await pool.query('SELECT * FROM users WHERE id = ?', [id]);
        return rows[0];
    }

    static async update(id, userData) {
        await pool.query('UPDATE users SET ? WHERE id = ?', [userData, id]);
    }

    static async delete(id) {
        await pool.query('DELETE FROM users WHERE id = ?', [id]);
    }
}

module.exports = User;