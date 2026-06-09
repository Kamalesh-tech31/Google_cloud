const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    questions: [
      {
        question: "What is DBMS?",
        options: ["Database", "Compiler", "OS"],
        answer: "Database"
      }
    ]
  });
});

router.post("/submit", (req, res) => {
  res.json({
    score: 8,
    total: 10,
    message: "Quiz submitted"
  });
});

module.exports = router;