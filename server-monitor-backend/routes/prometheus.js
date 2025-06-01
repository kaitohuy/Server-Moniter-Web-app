// routes/prometheus.js
const express = require("express");
const axios = require("axios");
const router = express.Router();

const PROMETHEUS_RANGE_URL = "http://prometheus:9090/api/v1/query_range";

// Lấy dữ liệu 5 phút gần nhất với step 10 giây
const getQueryRange = async (query) => {
  const now = Math.floor(Date.now() / 1000);
  const start = now - 5 * 60; // 5 phút trước
  const end = now;

  const response = await axios.get(PROMETHEUS_RANGE_URL, {
    params: {
      query,
      start,
      end,
      step: 10
    }
  });

  const values = response.data.data.result[0]?.values || [];

  return values.map(([timestamp, value]) => ({
    time: new Date(timestamp * 1000).toLocaleTimeString(),
    value: parseFloat(value)
  }));
};

// CPU Usage
router.get("/cpu", async (req, res) => {
  try {
    const query =
      "100 - (avg by (instance)(rate(node_cpu_seconds_total{mode=\"idle\"}[1m])) * 100)";
    const result = await getQueryRange(query);
    res.json(result);
  } catch (err) {
    console.error("Error fetching CPU data:", err.message);
    res.status(500).json({ error: "Failed to fetch CPU data" });
  }
});

// RAM Usage
router.get("/ram", async (req, res) => {
  try {
    const query =
      "(1 - (node_memory_MemAvailable_bytes / node_memory_MemTotal_bytes)) * 100";
    const result = await getQueryRange(query);
    res.json(result);
  } catch (err) {
    console.error("Error fetching RAM data:", err.message);
    res.status(500).json({ error: "Failed to fetch RAM data" });
  }
});

// Disk Usage
router.get("/disk", async (req, res) => {
  try {
    const query =
      "(node_filesystem_size_bytes - node_filesystem_free_bytes) / node_filesystem_size_bytes * 100";
    const result = await getQueryRange(query);
    res.json(result);
  } catch (err) {
    console.error("Error fetching Disk data:", err.message);
    res.status(500).json({ error: "Failed to fetch Disk data" });
  }
});

// Network IO
router.get("/network", async (req, res) => {
  try {
    const query =
      "rate(node_network_receive_bytes_total[1m]) + rate(node_network_transmit_bytes_total[1m])";
    const result = await getQueryRange(query);
    res.json(result);
  } catch (err) {
    console.error("Error fetching Network data:", err.message);
    res.status(500).json({ error: "Failed to fetch Network data" });
  }
});

module.exports = router;
