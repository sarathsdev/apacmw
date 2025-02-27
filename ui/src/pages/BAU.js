import React from "react";
import "./BAU.css";

const BAU = () => {
  return (
    <div className="bau-container">
      <h1 className="bau-heading">BAU Activities Dashboard</h1>

      {/* Patching Section */}
      <div className="bau-card">
        <h2 className="bau-title">🔧 Patching Activities</h2>
        <p>Regular system patching is performed to ensure security and stability.</p>
        <ul>
          <li>🔹 Monthly OS and middleware patching</li>
          <li>🔹 Security vulnerability patches</li>
          <li>🔹 Emergency hotfix deployments</li>
          <li>🔹 Application downtime coordination</li>
        </ul>
        <button className="bau-button">View Patch Schedule</button>
      </div>

      {/* Certificate Renewal Section */}
      <div className="bau-card">
        <h2 className="bau-title">🔑 Certificate Renewal</h2>
        <p>SSL/TLS certificates must be renewed before expiration to avoid service disruption.</p>
        <ul>
          <li>🔹 Monitoring certificate expiry dates</li>
          <li>🔹 Requesting and generating new certificates</li>
          <li>🔹 Deploying renewed certificates in environments</li>
          <li>🔹 Testing and validating certificates</li>
        </ul>
        <button className="bau-button">Check Expiring Certificates</button>
      </div>

      {/* Other BAU Activities Section */}
      <div className="bau-card">
        <h2 className="bau-title">📌 Other BAU Activities</h2>
        <p>Day-to-day operational tasks to ensure smooth system functionality.</p>
        <ul>
          <li>🔹 Log monitoring and analysis</li>
          <li>🔹 Incident response and troubleshooting</li>
          <li>🔹 User access reviews and compliance</li>
          <li>🔹 Backup and restore verification</li>
        </ul>
        <button className="bau-button">View Activity Logs</button>
      </div>
    </div>
  );
};

export default BAU;
