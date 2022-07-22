const express = require('express');
const app = express();
const router = require('./routes');
const helmet = require('helmet');
const cors = require('cors');

require('dotenv').config();


const PORT = process.env.PORT;

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use(router);

app.listen(PORT, () => {
    console.log(`App listen port ${PORT}`)
})
