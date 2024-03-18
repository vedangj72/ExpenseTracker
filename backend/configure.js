require('dotenv').config();
const pass = process.env.PASSWORD;
const url = `mongodb+srv://vsjoshi772:${pass}@expensecluster.kclqrkd.mongodb.net/ExpenseDB`;

module.exports = url;