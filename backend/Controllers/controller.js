const Expense = require('../Models/Expensemodel');
const expenseGet = async(req, res) => {
    try {
        const getres = await Expense.find();
        return await res.json(getres);
    } catch (error) {
        console.error('Error fetching expenses:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }

}
const expensePost = async(req, res) => {
    try {
        const { description, amount, category } = req.body || {};

        if (!description || !amount || !category) {
            return res.status(400).send("Please fill all the fields");
        }

        const newExpense = await Expense.create({ description, amount, category });

        console.log(`Data posted successfully`);
        res.status(200);
    } catch (error) {
        console.error('Error creating expense:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const expenseDelete = async(req, res) => {
    try {
        const { id } = req.params;
        const deletedExpense = await Expense.findByIdAndDelete(id);
        console.log(`Data deleted successfully: ${deletedExpense}`);
        res.status(200).send(`Data deleted successfully`);
    } catch (error) {
        console.error('Error deleting expense single:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

//delete all data 

const expenseDeleteAll = async(req, res) => {
    try {
        const deletedExpenses = await Expense.deleteMany();
        console.log(`Data deleted successfully: ${deletedExpenses.deletedCount} expenses`);
        res.status(200).send(`Data deleted successfully: ${deletedExpenses.deletedCount} expenses`);
    } catch (error) {
        console.error('Error deleting all expenses:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports = { expenseDeleteAll };


//update data 
const expenseUpdateData = async(req, res) => {
    try {
        const { id } = req.params.id;
        const { description, amount, category } = req.body || {};
        const updateExpense = Expense.findByIdAndUpdate(id, req.body);
        console.log(`ID updated successfully: ${updateExpense.id}`);
        res.status(200).send(`ID updated successfully: ${updateExpense.id}`);
    } catch (error) {
        console.error(`error in updating expense:`, error)
        res.status(500).send(`Error deleting expense:`, error);
    }
}

module.exports = { expenseGet, expensePost, expenseDelete, expenseDeleteAll, expenseUpdateData };