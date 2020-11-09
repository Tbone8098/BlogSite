const { Author } = require("../models/models");

module.exports = {
    // C
    create: (req, res) => {
        Author.create(req.body)
            .then((data) => res.json(data))
            .catch((err) => {
                console.log("createAuthor error: ", err);
                res.json(err);
            });
    },
    // R
    getAll: (req, res) => {
        Author.find()
            .then((data) => res.json(data))
            .catch((err) => console.log("getAll error: ", err));
    },
    getOne: (req, res) => {
        Author.find({ _id: req.params.id })
            .then((data) => res.json(data))
            .catch((err) => console.log("getOne error: ", err));
    },
    // U
    // TODO finish working on updateOne
    updateOne: (req, res) => {
        Author.findOneAndUpdate({ _id: req.params.id }, req.body, {
            new: true,
            useFindAndModify: false,
            runValidators: true,
        })
            .then((data) => res.json(data))
            .catch((err) => {
                console.log("updateOne error: ", err);
                res.json(err);
            });
    },
    // D
    deleteOne: (req, res) => {
        Author.deleteOne({ _id: req.params.id })
            .then((data) => res.json(data))
            .catch((err) => console.log("delete error: ", err));
    },
};
