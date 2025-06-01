const express = require("express");
const cors = require("cors");
const prometheusRoutes = require("./routes/prometheus");

const app = express();
const PORT = 4000;

app.use(cors());
app.use("/api/prometheus", prometheusRoutes);

app.get("/", (req, res) => {
  res.send("Server is running. Use /api/prometheus/...");
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
