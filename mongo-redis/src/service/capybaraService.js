const redis = require("../database/redisDB");

const capyRegister = (req,res, next) => {
    const { name } = req.body;
     redis.set("name", name);
     return res.status(201).json({ message: 'create' })
}

const capyFind = (req, res, next) => {
    redis.get('name', (err, result) => {
        if(err){
            return res.status(200).json({ error: err })
        }
        else {
            return res.status(200).json({ message: result })
        }
    })
}


module.exports = {
    capyRegister,
    capyFind
}