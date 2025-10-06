import React, { useState } from "react";
import "./LeadManagement.css";
import "./ImportCSV.css";

function ImportCSV({ onClose }) {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = () => {
    if (file) {
      alert(`Uploading file: ${file.name}`);
      onClose();
    } else {
      alert("Please select a CSV file first.");
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Import Leads from CSV</h2>

        <label className="drop-zone">
          {file ? file.name : "Click here or drag & drop CSV file"}
          <input
            type="file"
            accept=".csv"
            style={{ display: "none" }}
            onChange={handleFileChange}
          />
        </label>

        <div className="modal-actions">
          <button onClick={handleUpload}>Upload</button>
          <button className="cancel-btn" onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default ImportCSV;
