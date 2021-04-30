module.exports = {
    HOST: "127.0.0.1:8080",
    USER: "sampleuser",
    PASSWORD: "samplepassword",
    DB: "sampledb",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
};