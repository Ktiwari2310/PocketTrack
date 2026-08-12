const expenseModel = require("../models/expense.model");

async function addExpense(req, res) {
    const { title, amount, category, date } = req.body;

    const expense = await expenseModel.create({
        title,
        amount,
        category,
        date,
        user: req.user.id
    });

    res.status(201).json({
        message: "Expense added successfully",
        expense
    });
}

async function updateExpense(req, res) {
    const { id } = req.params;
    const { title, amount, category, date } = req.body;

    const expense = await expenseModel.findOneAndUpdate(
        {
            _id: id,
            user: req.user.id
        },
        {
            title,
            amount,
            category,
            date
        },
        { new: true }
    );

    if (!expense) {
        return res.status(404).json({
            message: "Expense not found"
        });
    }

    res.json({
        message: "Expense updated successfully",
        expense
    });
}

async function deleteExpense(req, res) {
    const { id } = req.params;

    const expense = await expenseModel.findOneAndDelete({
        _id: id,
        user: req.user.id
    });

    if (!expense) {
        return res.status(404).json({
            message: "Expense not found"
        });
    }

    res.json({
        message: "Expense deleted successfully"
    });
}

async function getExpenses(req, res) {
    const expenses = await expenseModel.find({
        user: req.user.id
    });

    res.status(200).json({
        expenses
    });
}

module.exports = {
    addExpense,
    getExpenses,
    updateExpense,
    deleteExpense
};