const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Bot is running 🚀");
});

// FIX: Render-safe port handling
const PORT = process.env.PORT || 10000;

app.listen(PORT, "0.0.0.0", () => {
  console.log("Server running on port " + PORT);
});
