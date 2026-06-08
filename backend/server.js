const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const onboardingRoutes = require("./routes/onboardingRoutes");

dotenv.config();

// Uncomment when MongoDB connection is working
// connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/onboarding", onboardingRoutes);

app.get("/", (req, res) => {
  res.json({ message: "Backend is running successfully!" });
});

app.get("/api/study-planner", (req, res) => {
  res.json({
    dailyPlan: [],
    weeklyPlan: [],
    upcomingSessions: [],
    priorityTasks: [],
    recommendations: [],
  });
});

app.get("/api/quiz", (req, res) => {
  res.json({
    generatedQuizzes: [],
    performance: {},
    history: [],
    suggestedSubjects: [],
  });
});

app.get("/api/focus-sessions", (req, res) => {
  res.json({
    activeSession: null,
    upcomingSessions: [],
    recentSessions: [],
    stats: {},
    suggestions: [],
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});