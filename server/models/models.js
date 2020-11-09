const mongoose = require("mongoose");

const TestSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            minlength: [2, "must be at least 2 chars"],
        },
    },
    { timestamps: true }
);

const Test = mongoose.model("Test", TestSchema);
module.exports = Test;
