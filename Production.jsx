import { useState } from "react";
import Sidebar from "../components/Sidebar";
import "./Production.css";

function Production() {
  const [machineId, setMachineId] = useState("");
  const [report, setReport] = useState(null);

  const analyzeProduction = () => {
    if (!machineId) {
      alert("Please enter Machine ID");
      return;
    }

    const reports = [
      {
        shift: "Morning",
        production: "1250 Units",
        efficiency: "95%",
        downtime: "10 Minutes",
        utilization: "92%",
        recommendation: "Production is running efficiently."
      },
      {
        shift: "Afternoon",
        production: "980 Units",
        efficiency: "84%",
        downtime: "28 Minutes",
        utilization: "80%",
        recommendation: "Reduce machine idle time."
      },
      {
        shift: "Night",
        production: "1420 Units",
        efficiency: "98%",
        downtime: "5 Minutes",
        utilization: "97%",
        recommendation: "Excellent production performance."
      }
    ];

    const random = Math.floor(Math.random() * reports.length);
    setReport(reports[random]);
  };

  return (
    <>
      <Sidebar />

      <div className="page-container">
        <div className="production-card">

          <h1>🏭 Production Analytics</h1>

          <label>Machine ID</label>

          <input
            type="text"
            placeholder="Enter Machine ID"
            value={machineId}
            onChange={(e) => setMachineId(e.target.value)}
          />

          <button onClick={analyzeProduction}>
            Analyze Production
          </button>

          {report && (
            <div className="report">

              <h2>Production Report</h2>

              <p><strong>Machine ID:</strong> {machineId}</p>

              <p><strong>Shift:</strong> {report.shift}</p>

              <p><strong>Production:</strong> {report.production}</p>

              <p><strong>Efficiency:</strong> {report.efficiency}</p>

              <p><strong>Downtime:</strong> {report.downtime}</p>

              <p><strong>Machine Utilization:</strong> {report.utilization}</p>

              <p><strong>Recommendation:</strong> {report.recommendation}</p>

            </div>
          )}

        </div>
      </div>
    </>
  );
}

export default Production;