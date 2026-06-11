const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    generatedQuizzes: [
      {
        id: "1",
        title: "DSA Fundamentals",
        subject: "DSA",
        status: "Ready",
        questions: 15,
        createdAt: "Today"
      },
      {
        id: "2",
        title: "React Basics",
        subject: "React",
        status: "In Progress",
        questions: 10,
        createdAt: "Yesterday"
      }
    ],

    performance: {
      accuracy: 85,
      completionRate: 92,
      averageScore: 88
    },

    history: [
      {
        id: "1",
        title: "DBMS Quiz",
        date: "2025-06-08",
        score: 90,
        status: "Passed",
        accuracy: 88
      },
      {
        id: "2",
        title: "OS Quiz",
        date: "2025-06-07",
        score: 82,
        status: "Passed",
        accuracy: 80
      }
    ],

    suggestedSubjects: [
      "DSA",
      "React",
      "DBMS",
      "Operating Systems"
    ]
  });
});

module.exports = router;