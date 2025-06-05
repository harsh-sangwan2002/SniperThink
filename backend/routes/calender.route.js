const express = require("express");
const router = express.Router();
const {
    getAuthURL,
    oauth2callback,
    getFreeSlots,
    scheduleMeeting,
} = require("../controllers/calender.controller");

// Step 1: Get Google OAuth2 consent URL
router.get("/auth/url", getAuthURL);

// Step 2: Google redirects to this route after consent
router.get("/auth/google/callback", oauth2callback);

// Step 3: Fetch available 30-min free slots
router.get("/free-slots", getFreeSlots);

// Step 4: Schedule a new meeting
router.post("/schedule", scheduleMeeting);

module.exports = router;
