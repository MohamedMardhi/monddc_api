const Sequelize = require('sequelize');

// Option 1: Passing parameters separately
const newSequelize = new Sequelize('sampledb', 'sampleusername', 'samplepassword', {
    host: 'localhost:8080',
    dialect: 'mysql'
});

newSequelize.authenticate().
    then(() => console.log('authentication success'))
    .catch(err => console.log(err));

module.exports.newSequelize = newSequelize;