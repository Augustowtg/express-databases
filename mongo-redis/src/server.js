const express = require("express");
const cors = require("cors");
require('dotenv').config()

const app = express();

app.use(express.json());
app.use(cors());

require("./controllers/capybaraController")(app)

app.get('/', (req, res) => {
    res.status(200).json({ message: 'API: ONLINE' })
});

app.listen(process.env.API_PORT, ()=> {
    console.log(`[API] Start on port: ${process.env.API_PORT}`)
})
