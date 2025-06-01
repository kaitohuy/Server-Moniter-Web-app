import { useEffect, useState } from "react";
import CpuChart from "../components/CpuChart";
import RamChart from "../components/RamChart";
import DiskChart from "../components/DiskChart";
import NetworkChart from "../components/NetworkChart";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Dashboard() {
  const [cpuData, setCpuData] = useState([]);
  const [ramData, setRamData] = useState([]);
  const [diskData, setDiskData] = useState([]);
  const [networkData, setNetworkData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/api/prometheus/cpu")
      .then(res => res.json())
      .then(data => setCpuData(data.map(d => ({ time: d.time, cpu: d.value }))));
    fetch("http://localhost:4000/api/prometheus/ram")
      .then(res => res.json())
      .then(data => setRamData(data.map(d => ({ time: d.time, ram: d.value }))));
    fetch("http://localhost:4000/api/prometheus/disk")
      .then(res => res.json())
      .then(data => setDiskData(data.map(d => ({ time: d.time, disk: d.value }))));
    fetch("http://localhost:4000/api/prometheus/network")
      .then(res => res.json())
      .then(data => setNetworkData(data.map(d => ({ time: d.time, net: d.value }))));
  }, []);

  return (
    <div className="dashboard-container min-h-screen bg-cream-50">
      <Header />
      <div className="main-body flex">
        <Sidebar />
        <div className="metrics-grid flex-1 p-6 grid grid-cols-2 gap-6">
          <CpuChart data={cpuData} />
          <RamChart data={ramData} />
          <DiskChart data={diskData} />
          <NetworkChart data={networkData} />
        </div>
      </div>
      <Footer />
    </div>
  );
}