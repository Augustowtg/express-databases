const mongoose = require('mongoose');

const login = 'root';
const password = 'root';
const hostname = '@cluster0.wwdi0.mongodb.net/capbara';


mongoose.connect(`mongodb+srv://${login}:${password}${hostname}`, {
    useNewUrlParser: true,
    retryWrites: true,
    w: "majority",
}).then(() => {
    console.log('Mongodb conectado')
}).catch((err) => {
    console.log("Error trying to connect to MongoDB :( " + err);
});


mongoose.Promise = global.Promise;