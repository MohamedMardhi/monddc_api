
const express = require('express');
const dotenv = require('dotenv');
const cors = require("cors");
const morgan = require('morgan');
//var fs = require('fs')
//var path = require('path')
// Route Files
const dossierdc = require('./src/routes/dossierdecompetences');

dotenv.config({path: './config/config.env'});

const app = express();

  
app.use(cors());
// LOGS  MIDDLEWARE only on dev mode
if(process.env.NODE_ENV === 'developement'){
    app.use(morgan('dev'))
    // app.use(morgan('common', {
    //     stream: fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })
    // }))
}


app.use('/api/v1/dossierdc', dossierdc)
 
 const PORT = process.env.PORT || 8000;

 app.listen(PORT, () => {
     console.log(`App listening on port ${PORT} running on ${process.env.NODE_ENV} mode!`);
 });