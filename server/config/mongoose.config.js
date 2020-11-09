const mongoose = require("mongoose");

mongoose
    .connect("mongodb://localhost/my_blog", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("connected to the db"))
    .catch((err) => console.log("something went wrong", err));
