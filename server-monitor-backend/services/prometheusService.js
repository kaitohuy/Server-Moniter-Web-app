const axios = require("axios");

const PROM_URL = "http://localhost:9090";

async function getCPUUsage() {
  const query = '100 - (avg by(instance) (rate(node_cpu_seconds_total{mode="idle"}[1m])) * 100)';
  const url = `${PROM_URL}/api/v1/query?query=${encodeURIComponent(query)}`;
  try {
    const response = await axios.get(url);
    return response.data.data.result;
  } catch (error) {
    console.error(error);
    return [];
  }
}

module.exports = { getCPUUsage };
