const express = require('express');
const morgan = require('morgan')
require('./database/config')
const app = express();

const port = 3000
app.use(express.json());
app.use(morgan('dev'));

app.get('/', (req, res) => {
    res.status(200).json({ message: 'API: ONLINE' })
});

require("./controllers/capybaraControllers")(app);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});
