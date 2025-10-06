import React, { useState } from "react";
import "./LeadManagement.css";
import "./Modal.css"; // CSS for login-style popup

// ✅ Reusable Modal Component
const Modal = ({ title, children, onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-window" onClick={(e) => e.stopPropagation()}>
        <h2>{title}</h2>
        {children}
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

function LeadManagement() {
  const [leads, setLeads] = useState([
    {
      firstName: "John",
      lastName: "Smith",
      email: "john.smith@email.com",
      company: "Smith Enterprises",
      propertyType: "Office",
      budget: "$500,000 - $750,000",
      status: "new",
      timeline: "3-6 months",
    },
    {
      firstName: "Sarah",
      lastName: "Johnson",
      email: "sarah.j@email.com",
      company: "Johnson Corp",
      propertyType: "Retail",
      budget: "$200,000 - $400,000",
      status: "contacted",
      timeline: "1-3 months",
    },
    {
      firstName: "Mike",
      lastName: "Davis",
      email: "mike.davis@email.com",
      company: "-",
      propertyType: "Warehouse",
      budget: "$300,000 - $500,000",
      status: "qualified",
      timeline: "6+ months",
    },
  ]);

  const [showImport, setShowImport] = useState(false);
  const [showAddLead, setShowAddLead] = useState(false);
  const [newLead, setNewLead] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    propertyType: "",
    budget: "",
    status: "",
    timeline: "",
  });

  // ✅ Add Lead Handler
  const handleAddLead = () => {
    setLeads([...leads, newLead]);
    setNewLead({
      firstName: "",
      lastName: "",
      email: "",
      company: "",
      propertyType: "",
      budget: "",
      status: "",
      timeline: "",
    });
    setShowAddLead(false);
  };

  return (
    <div className="container">
      <h1 className="title">Buyer Lead Management</h1>
      <p className="subtitle">Capture, manage, and track your buyer leads</p>

      {/* Toolbar */}
      <div className="toolbar">
        <input type="text" placeholder="Search leads..." className="search" />
        <select>
          <option>All Statuses</option>
        </select>
        <select>
          <option>All Property Types</option>
          <option>Residential</option>
          <option>Official</option>
        </select>
        <select>
          <option>All Timelines</option>
        </select>
        <button className="import" onClick={() => setShowImport(true)}>
          Import
        </button>
        <button className="export">Export</button>
        <button className="add" onClick={() => setShowAddLead(true)}>
          + Add Lead
        </button>
      </div>

      {/* Table */}
      <table>
        <thead>
          <tr>
            <th>FIRST NAME</th>
            <th>LAST NAME</th>
            <th>EMAIL</th>
            <th>COMPANY</th>
            <th>PROPERTY TYPE</th>
            <th>BUDGET RANGE</th>
            <th>STATUS</th>
            <th>TIMELINE</th>
            <th>ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {leads.map((lead, index) => (
            <tr key={index}>
              <td>{lead.firstName}</td>
              <td>{lead.lastName}</td>
              <td>{lead.email}</td>
              <td>{lead.company}</td>
              <td>{lead.propertyType}</td>
              <td>{lead.budget}</td>
              <td>
                <span className={`status ${lead.status}`}>{lead.status}</span>
              </td>
              <td>{lead.timeline}</td>
              <td>
                <button>👁</button>
                <button>✏</button>
                <button>🗑</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="footer">
        Showing 1 to {leads.length} of {leads.length} results
      </div>

      {/* ✅ Import Modal */}
      {showImport && (
        <Modal title="Import Leads (CSV)" onClose={() => setShowImport(false)}>
          <p>Upload your CSV file here:</p>
          <input type="file" accept=".csv" />
          <button>Upload</button>
        </Modal>
      )}

      {/* ✅ Add Lead Modal */}
      {showAddLead && (
        <Modal title="Add New Lead" onClose={() => setShowAddLead(false)}>
          <input
            type="text"
            placeholder="First Name"
            value={newLead.firstName}
            onChange={(e) =>
              setNewLead({ ...newLead, firstName: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Last Name"
            value={newLead.lastName}
            onChange={(e) =>
              setNewLead({ ...newLead, lastName: e.target.value })
            }
          />
          <input
            type="email"
            placeholder="Email"
            value={newLead.email}
            onChange={(e) => setNewLead({ ...newLead, email: e.target.value })}
          />
          <input
            type="text"
            placeholder="Company"
            value={newLead.company}
            onChange={(e) =>
              setNewLead({ ...newLead, company: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Property Type"
            value={newLead.propertyType}
            onChange={(e) =>
              setNewLead({ ...newLead, propertyType: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Budget Range"
            value={newLead.budget}
            onChange={(e) => setNewLead({ ...newLead, budget: e.target.value })}
          />
          <input
            type="text"
            placeholder="Status"
            value={newLead.status}
            onChange={(e) => setNewLead({ ...newLead, status: e.target.value })}
          />
          <input
            type="text"
            placeholder="Timeline"
            value={newLead.timeline}
            onChange={(e) =>
              setNewLead({ ...newLead, timeline: e.target.value })
            }
          />
          <button onClick={handleAddLead}>Add Lead</button>
        </Modal>
      )}
    </div>
  );
}

export default LeadManagement;
