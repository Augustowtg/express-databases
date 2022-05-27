const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_API, {
    useNewUrlParser: true,
    retryWrites: true,
    w: "majority",
}).then(() => {
    console.log('Mongodb conectado')
}).catch((err) => {
    console.log("Error trying to connect to MongoDB :( " + err);
});


mongoose.Promise = global.Promise;