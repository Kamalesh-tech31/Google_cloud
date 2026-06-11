const express = require("express");

const router = express.Router();

let onboardingData = {};

router.post("/", (req, res) => {
  onboardingData = req.body;

  res.json({
    message: "Onboarding saved successfully",
    data: onboardingData,
  });
});

router.get("/", (req, res) => {
  res.json(onboardingData);
});

module.exports = router;
