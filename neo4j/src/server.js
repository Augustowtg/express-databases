const express = require('express');
require('dotenv').config();

const app = express();
app.use(express.json());

require('./controller/movieController')(app);
require('./controller/personaController')(app);


app.listen(3000, () => {
    console.log('Funcionou')
})