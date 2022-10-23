const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize;

console.log("process.env.JAWSDB_URL1", process.env.JAWSDB_URL);
if (process.env.JAWSDB_URL) {
    sequelize = new Sequelize(process.env.JAWSDB_URL, {logging: true});
} else {
    sequelize = new Sequelize(
        process.env.DB_NAME,
        process.env.DB_USER,
        process.env.DB_PASSWORD,
        {
            host: 'localhost',
            dialect: 'mysql',
            port: 3306
        }
    );
}

console.log("process.env.JAWSDB_URL", process.env.JAWSDB_URL);
try {
    sequelize.authenticate().then(()=>{
        console.log("sequelize connect success")
    })

} catch (error) {
    console.log("sequelize connect error", error)
}

module.exports = sequelize;