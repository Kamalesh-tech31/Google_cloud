const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    currentMission: "Crack Product-Based Company Interviews",

    conversation: [
      {
        id: "1",
        role: "assistant",
        content:
          "Hello Neeta! I'm your AI study assistant. How can I help you today?",
      },
      {
        id: "2",
        role: "user",
        content: "What should I focus on today?",
      },
      {
        id: "3",
        role: "assistant",
        content:
          "Focus on DSA practice, revise DBMS concepts, and complete one React project task.",
      },
    ],
  });
});

module.exports = router;