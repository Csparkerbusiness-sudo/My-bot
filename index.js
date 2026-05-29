const express = require("express");
const app = express();

// Test route (Render uses this to confirm it's alive)
app.get("/", (req, res) => {
  res.send("Bot is running 🚀");
});

// IMPORTANT: Render assigns its own port
const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
