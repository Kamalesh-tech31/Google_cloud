const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    dailyPlan: [
      "Solve 3 DSA problems",
      "Revise DBMS",
      "Practice Aptitude"
    ],
    weeklyPlan: [
      "Complete React Module",
      "Mock Interview",
      "Resume Improvement"
    ],
    recommendations: [
      "Focus more on DSA",
      "Maintain consistency"
    ]
  });
});

module.exports = router;