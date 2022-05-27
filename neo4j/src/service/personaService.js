const DbConection = require('../database/neo4j');

const personaCreate = async (req, res, next) => {

    const session = DbConection.session();

    const { name } = req.body;
    console.log(name)

    try {
        const result = await session.run(
            'CREATE (p:Persona {name: $name}) RETURN p',
            { name: name }
        )
        const singleRecord = result.records[0]
        const node = singleRecord.get(0)

        console.log(node.properties.name)
        await session.close()
        res.status(201).json({ message: node.properties.name })
    }
    catch (err) {
        console.log(err)
        await session.close()
        res.status(200).json({ message: "Deu merda" })
    }
}

const personMovieMatch = async (req, res, next) => {
    const session = DbConection.session();
    const { movie, person } = req.body;
    try {
        const query = "CREATE (p:Person {name: $personName})-[:LIKES]->(m:Movie {title: $movieName})"
        const result = await session.run(
            query,
            {
                personName: person,
                movieName: movie
            })
        const singleRecord = result.records[0]
        const node = singleRecord.get(0)

        console.log(node.properties.name)
        await session.close()
        res.status(201).json({ message: node.properties.name })
    }
    catch (err) {
        console.log(err)
        await session.close()
        res.status(200).json({ error: err, message: "Deu ruim" })
    }
}
module.exports = {
    personaCreate,
    personMovieMatch
}