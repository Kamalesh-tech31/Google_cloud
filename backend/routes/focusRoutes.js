const express = require("express");

const router = express.Router();

let activeSession = false;

router.get("/", (req, res) => {
  res.json({
    activeSession,
    focusTime: 50,
    distractionsBlocked: 3
  });
});

router.post("/start", (req, res) => {
  activeSession = true;

  res.json({
    message: "Focus session started"
  });
});

router.post("/end", (req, res) => {
  activeSession = false;

  res.json({
    message: "Focus session ended"
  });
});

module.exports = router;