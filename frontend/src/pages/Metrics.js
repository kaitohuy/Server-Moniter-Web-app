import { useState, useEffect } from "react";
import axios from "axios";

const Metrics = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:5000/metrics")
      .then(response => setData(response.data))
      .catch(error => console.error("Error:", error));
  }, []);

  return (
    <div>
      <h1>Metrics Data</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default Metrics;
