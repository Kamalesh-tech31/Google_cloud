const studyPlannerRoutes = require("./routes/studyPlannerRoutes");
const focusRoutes = require("./routes/focusRoutes");
const quizRoutes = require("./routes/quizRoutes");
const aiAssistantRoutes = require("./routes/aiAssistantRoutes");
const dashboardsRoutes = require("./routes/dashboardsRoutes");

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
app.use("/api/study-planner", studyPlannerRoutes);
app.use("/api/focus-sessions", focusRoutes);
app.use("/api/quiz", quizRoutes);
app.use("/api/ai-assistant", aiAssistantRoutes);
app.use("/api/dashboard", dashboardsRoutes);

app.get("/", (req, res) => {
  res.json({ message: "Backend is running successfully!" });
});



const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});