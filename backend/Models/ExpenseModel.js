const mongoose = require('mongoose');

const expenseSchema = new mongoose.Schema({
    description: {
        //reason 
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    category: {
        //in food medical in some other category
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now,
        // require: true,
    }
}, { timestamps: true })

const Expense = mongoose.model('Expense', expenseSchema);
module.exports = Expense;