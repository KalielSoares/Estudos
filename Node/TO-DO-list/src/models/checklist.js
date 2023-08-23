const mongoose = require('mongoose');

const checklistSchema = mongoose.Schema({
    name: {type: String, required: true},
    tasks: [{
        tasks: mongoose.Schema.Types.ObjectId,
        ref: 'Task'
    }]
})

module.exports = mongoose.model('Checklist', checklistSchema);