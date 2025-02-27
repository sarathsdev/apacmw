import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Access.css";

const Access = () => {
  const [cmpEntries, setCmpEntries] = useState([]);
  const [hostGroups, setHostGroups] = useState([]);
  const [dapPolicies, setDapPolicies] = useState([]);
  const [organizationalUnits, setOrganizationalUnits] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  // Fetch data from API (Dummy API Calls)
  const fetchData = async () => {
    try {
      const cmpResponse = await axios.get("http://localhost:5000/api/cmp");
      const hostGroupResponse = await axios.get("http://localhost:5000/api/hostgroups");
      const dapResponse = await axios.get("http://localhost:5000/api/dap");
      const ouResponse = await axios.get("http://localhost:5000/api/ou");

      setCmpEntries(cmpResponse.data);
      setHostGroups(hostGroupResponse.data);
      setDapPolicies(dapResponse.data);
      setOrganizationalUnits(ouResponse.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="iaccess-container">
      <h1 className="iaccess-heading">iAccess Management</h1>

      {/* CMP Entries Table */}
      <section className="iaccess-section">
        <h2 className="section-heading">CMP Entries</h2>
        <table className="iaccess-table">
          <thead>
            <tr>
              <th>Server Name</th>
              <th>IP Address</th>
              <th>Owner</th>
              <th>Environment</th>
            </tr>
          </thead>
          <tbody>
            {cmpEntries.map((entry, index) => (
              <tr key={index}>
                <td>{entry.serverName}</td>
                <td>{entry.ip}</td>
                <td>{entry.owner}</td>
                <td>{entry.environment}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Host Groups Section */}
      <section className="iaccess-section">
        <h2 className="section-heading">Host Groups</h2>
        <ul className="iaccess-list">
          {hostGroups.map((group, index) => (
            <li key={index} className="iaccess-list-item">{group.name} - {group.description}</li>
          ))}
        </ul>
      </section>

      {/* DAP Policies Section */}
      <section className="iaccess-section">
        <h2 className="section-heading">DAP Policies</h2>
        <ul className="iaccess-list">
          {dapPolicies.map((policy, index) => (
            <li key={index} className="iaccess-list-item">{policy.policyName} - {policy.accessLevel}</li>
          ))}
        </ul>
      </section>

      {/* Organizational Units Section */}
      <section className="iaccess-section">
        <h2 className="section-heading">Organizational Units (OU)</h2>
        <ul className="iaccess-list">
          {organizationalUnits.map((ou, index) => (
            <li key={index} className="iaccess-list-item">{ou.unitName} - {ou.department}</li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Access;
