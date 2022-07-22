const express = require('express');
const app = express();
const routesUsers = require('./routes/routesUsers');
const routesPost = require('./routes/routesPost');
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

app.listen(PORT, () => {
    console.log(`App listen port ${PORT}`)
})
