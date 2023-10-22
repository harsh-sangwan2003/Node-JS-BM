const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://harsh:Samay229@cluster0.oymn2pz.mongodb.net/taskdb?retryWrites=true&w=majority', {
    maxPoolSize: 5
});

module.exports = mongoose;