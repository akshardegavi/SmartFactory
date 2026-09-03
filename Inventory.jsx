import { useState } from "react";
import Sidebar from "../components/Sidebar";
import "./Inventory.css";

function Inventory() {
  const [itemId, setItemId] = useState("");
  const [report, setReport] = useState(null);

  const checkInventory = () => {
    if (!itemId) {
      alert("Please enter Item ID");
      return;
    }

    const reports = [
      {
        item: "Steel Rod",
        stock: "245 Units",
        status: "In Stock",
        supplier: "ABC Industries",
        reorder: "Not Required",
      },
      {
        item: "Motor Bearing",
        stock: "18 Units",
        status: "Low Stock",
        supplier: "SKF India",
        reorder: "Required",
      },
      {
        item: "Hydraulic Pump",
        stock: "0 Units",
        status: "Out of Stock",
        supplier: "Bosch Rexroth",
        reorder: "Urgent",
      },
    ];

    const random = Math.floor(Math.random() * reports.length);
    setReport(reports[random]);
  };

  return (
    <>
      <Sidebar />

      <div className="page-container">
        <div className="inventory-card">

          <div className="page-icon">📦</div>

          <h1>Inventory Management</h1>
          <label>Item ID</label>

          <input
            type="text"
            placeholder="Enter Item ID"
            value={itemId}
            onChange={(e) => setItemId(e.target.value)}
          />

          <button onClick={checkInventory}>
            Check Inventory
          </button>

          {report && (
            <div className="report">

              <h2>Inventory Report</h2>

              <p><strong>Item ID:</strong> {itemId}</p>

              <p><strong>Item Name:</strong> {report.item}</p>

              <p><strong>Available Stock:</strong> {report.stock}</p>

              <p><strong>Status:</strong> {report.status}</p>

              <p><strong>Supplier:</strong> {report.supplier}</p>

              <p><strong>Reorder:</strong> {report.reorder}</p>

            </div>
          )}

        </div>
      </div>
    </>
  );
}

export default Inventory;