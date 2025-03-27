const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(cors());

const PORT = 5000;
const PROMETHEUS_URL = "http://localhost:9090/api/v1/query?query=node_cpu_seconds_total";

app.get("/", (req, res) => {
    res.send("Server is running...");
});

app.get("/metrics", async (req, res) => {
    try {
        const response = await axios.get(PROMETHEUS_URL);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch Prometheus data" });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}/metrics`);
});