const DbConection = require('../database/neo4j');

const movieCreate = async (req, res, next) => {
    const session = DbConection.session();
    
    const { movie } = req.body;

    try {
        const result = await session.run(
            'CREATE (m:Movie {name: $name}) RETURN m',
            { name: movie }
        )
        const singleRecord = result.records[0]
        const node = singleRecord.get(0)

        console.log(node.properties.name)
        await session.close()
        res.status(201).json({ message: node.properties.name })
    }
    catch {
        await session.close()
        res.status(200).json({ message: "Deu merda" })
    }
}


module.exports = {
    movieCreate
}