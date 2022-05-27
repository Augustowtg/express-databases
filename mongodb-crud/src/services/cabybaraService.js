const Capybara = require("../models/capybara");

const cabypbarasList = async (req, res, next) => {
    const cabybaraList = await Capybara.find()

    if (!cabybaraList) {
        return res.status(404).json({ error: "Cabypbaras not exist" })
    }

    return res.status(200).json({ message: cabybaraList })
}

const cabybaraRegister = (req, res, next) => {
    const { name, weight } = req.body;
    const cabybara = new Capybara()
    cabybara.name = name
    cabybara.weight = weight

    cabybara.save((err) => {
        if (!err) {
            return res.status(200).json({ message: cabybara })
        }
        else {
            return res.status(400).json({ err: err })
        }
    })
}

const cabybaraFindByName = async (req, res, next) => {
    const { name } = req.params;
    try {
        return await Capybara.findOne({ name: name },
            (err, result) => {
                if (!err) {
                    return res.status(404).json({ error: err })
                }
                else {
                    return res.status(200).json({ message: result })
                }
            });
    }
    catch (err) {
        console.log(err)
        return res.status(400).json({ error: err })
    }
}

const cabybaraUpdate = async (req, res, next) => {
    const { name, weight } = req.body;
    try {
        return await Capybara.findOneAndUpdate({ name: name }, {
            weight,
            name
        })
    }
    catch (err) {
        return res.status(400).json({ error: err })
    }
}

const cabybaraDelete = async (req, res, next) => {
    const { id } = req.body;
    try {
        return await Capybara.findOneAndDelete({ _id: id },
            (err) => {
                if (!err) {
                    return res.status(400).json(err)
                }
                return res.status(200).json({ message: `Cabybara foi removida` })
            })
    }
    catch (err) {
        return res.status(400).json({ error: err })
    }
}

module.exports = {
    cabypbarasList,
    cabybaraRegister,
    cabybaraFindByName,
    cabybaraUpdate,
    cabybaraDelete
}
