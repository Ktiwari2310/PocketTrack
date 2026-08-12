const express = require("express");

const {
    addExpense,
    updateExpense,
    deleteExpense,
    getExpenses
} = require("../controllers/expense.controller");

const { authUser } = require("../middlewares/auth.middleware");

const router = express.Router();

router.post("/", authUser, addExpense);
router.put("/:id", authUser, updateExpense);
router.delete("/:id", authUser, deleteExpense);
router.get("/", authUser, getExpenses);

module.exports = router;