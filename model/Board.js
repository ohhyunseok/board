var mongoose = require("mongoose");

var boardSchema = mongoose.Schema({
    title: { type: String, required: true },
    contents: { type: String },
    created: { type: Date, default: Date.now }
});

var Board = mongoose.model("board", boardSchema);

module.exports = Board;