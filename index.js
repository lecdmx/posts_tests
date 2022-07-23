const express = require('express');
const app = express();
const routesUsers = require('./src/routes/routesUsers');
const routesPost = require('./src/routes/routesPost');
const routesComments = require('./src/routes/routesComments');
const routesLogs = require('./src/routes/routesLogs');
const routesPermissions = require('./src/routes/routesPermissions');
const helmet = require('helmet');
const cors = require('cors');

require('dotenv').config();


const PORT = process.env.PORT;

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use(routesUsers);
app.use(routesPost);
app.use(routesComments);
app.use(routesLogs);
app.use(routesPermissions);

app.listen(PORT, () => {
    console.log(`App listen port ${PORT}`)
})

module.exports = app;
