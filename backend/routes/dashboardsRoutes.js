const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    mission: "Crack Product-Based Placements",

    currentPhase: "DSA Mastery",

    missionHealth: "On Track",

    successProbability: 82,

    nextMilestone: "Complete 100 DSA Problems",

    focusScore: 84,

    todayFocusMinutes: 180,

    currentStreak: 7,

    roadmap: [
      {
        id: "1",
        title: "Learn DSA Fundamentals",
        status: "complete",
      },
      {
        id: "2",
        title: "Practice LeetCode",
        status: "in-progress",
      },
      {
        id: "3",
        title: "Mock Interviews",
        status: "pending",
      },
    ],

    recommendations: [
      {
        action: "Solve 5 Tree Problems",
        reason: "Tree questions are frequently asked in interviews.",
      },
    ],

    studyPlan: [
      {
        id: "1",
        title: "Arrays Revision",
        scheduled: "9:00 AM",
        duration: "60 min",
        priority: "High",
        status: "Pending",
      },
      {
        id: "2",
        title: "DBMS Notes",
        scheduled: "2:00 PM",
        duration: "45 min",
        priority: "Medium",
        status: "Pending",
      },
    ],

    weeklyFocusTrend: [65, 72, 78, 80, 85, 88, 92],

    studyHours: 24,

    missionProgress: 68,

    analyticsInsight:
      "Your focus score has improved this week. Continue DSA practice and maintain consistency.",
  });
});

module.exports = router;