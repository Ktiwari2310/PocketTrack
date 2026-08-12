const express = require("express");

const {
    addExpense,
    updateExpense,
    deleteExpense,
    getExpenses
} = require("../controllers/expense.controller");

const { authUser } = require("../middlewares/auth.middleware");

const router = express.Router();

router.post("/addExpense", authUser, addExpense);
router.put("/updateExpense/:id", authUser, updateExpense);
router.delete("/deleteExpense/:id", authUser, deleteExpense);
router.get("/", authUser, getExpenses);

module.exports = router;