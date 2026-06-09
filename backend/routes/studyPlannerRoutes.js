const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    dailyPlan: [
      {
        id: "1",
        title: "Solve 3 DSA Problems",
        topic: "DSA",
        scheduled: "9:00 AM",
        duration: "60",
        priority: "High",
        status: "Pending",
      },
      {
        id: "2",
        title: "Revise DBMS",
        topic: "DBMS",
        scheduled: "11:00 AM",
        duration: "45",
        priority: "Medium",
        status: "Completed",
      },
      {
        id: "3",
        title: "Practice Aptitude",
        topic: "Aptitude",
        scheduled: "4:00 PM",
        duration: "30",
        priority: "Low",
        status: "Pending",
      },
    ],

    weeklyPlan: [
      {
        id: "1",
        weekLabel: "Week 1",
        completion: 60,
        highlight: "Complete React Module",
      },
      {
        id: "2",
        weekLabel: "Week 2",
        completion: 30,
        highlight: "Mock Interview",
      },
      {
        id: "3",
        weekLabel: "Week 3",
        completion: 10,
        highlight: "Resume Improvement",
      },
    ],

    upcomingSessions: [
      {
        id: "1",
        title: "System Design Session",
        topic: "Placements",
        scheduled: "Tomorrow",
        duration: "60",
        priority: "High",
        status: "Planned",
      },
    ],

    recommendations: [
      {
        id: "1",
        title: "Focus More on DSA",
        detail: "Spend at least 30 minutes daily solving DSA problems.",
      },
    ],
  });
});

module.exports = router;