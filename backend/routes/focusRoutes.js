const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    activeSession: {
      id: "1",
      title: "DSA Practice Session",
      subject: "Data Structures & Algorithms",
      duration: "45 min",
      technique: "Pomodoro",
      progress: 60
    },

    recentSessions: [
      {
        id: "1",
        title: "Arrays Practice",
        subject: "DSA",
        duration: "30 min",
        technique: "Pomodoro",
        progress: 100
      },
      {
        id: "2",
        title: "DBMS Revision",
        subject: "DBMS",
        duration: "40 min",
        technique: "Deep Work",
        progress: 80
      },
      {
        id: "3",
        title: "React Hooks",
        subject: "React",
        duration: "50 min",
        technique: "Pomodoro",
        progress: 100
      }
    ],

    stats: {
      dailyFocusMinutes: 180,
      focusStreak: 7,
      sessionsCompleted: 12
    }
  });
});

module.exports = router;