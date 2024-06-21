// Import express
const express = require("express");
const cors = require('cors');

// Create an express application
const app = express();

// Disable CORS for all routes and all origins
app.use(cors());

// Use JSON middleware to automatically parse JSON
app.use(express.json());

// Routes to accept any GET, POST, and PUT request
app.get("/download-srt", async (req, res) => {
  // console.log(req.body);
  try {
    const data = {"status": "available", "srt_content": "1\n00:00:00,200 --> 00:00:05,839\nWhat kind of car you drive anyway? It's an A-Lexus, 430 L. That's like a Toyota.\n\n2\n00:00:07,319 --> 00:00:09,019\nIt's a Lexus.\n\n"};
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to read response file" });
  }
});

app.post("/upload-video", async (req, res) => {
  // console.log(req.body);
  try {
    const data = {
      "status": "success",
      "message":"Succesfully uploaded video to AI server"
      };
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to read response file" });
  }
});

app.post("/test", async (req, res) => {
  console.log(req.body);
  try {
    res.json({req: req.body});
  } catch (error) {
    res.status(500).json({ error: "Failed to read response file" });
  }
});

// Set the server to listen on port 3033
const PORT = process.env.PORT || 3033;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
