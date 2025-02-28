import React, { useState } from "react";
import axios from "axios";
import './IssueForm.css'

const IssueForm = () => {
  const [formData, setFormData] = useState({
    productType: "",
    issueType: "",
    problemStatement: "",
    solution: "",
    fixType: "Permanent",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://apacmw.onrender.com/api/issues/save", formData);
      alert("Issue saved successfully!");
      console.log(response.data);
    } catch (err) {
      alert("Error saving the issue.");
      console.error(err);
    }
  };

  return (
    <div className="issue-form-container">
      <h2 className="issue-form-heading">Issue Form</h2>
      <form onSubmit={handleSubmit} className="issue-form-grid">
        {/* Form Grid for better responsiveness */}
        <div className="issue-form-select-grid">
          {/* Product Type */}
          <div className="issue-form-input">
            <label className="issue-form-label">Product Type</label>
            <select
              name="productType"
              value={formData.productType}
              onChange={handleChange}
              required
              className="issue-form-select"
            >
              <option value="">Select</option>
              <option value="WAS">WebSphere</option>
              <option value="WLS">WebLogic</option>
              <option value="Tomcat">Tomcat</option>
              <option value="Apache">Apache HTTP Server</option>
              <option value="IHS">IBM HTTP Server</option>
              <option value="OHS">Oracle HTTP Server</option>
              <option value="Nginx">Nginx</option>
              <option value="Liberty">Websphere Liberty</option>
            </select>
          </div>

          {/* Issue Type */}
          <div className="issue-form-input">
            <label className="issue-form-label">Issue Type</label>
            <select
              name="issueType"
              value={formData.issueType}
              onChange={handleChange}
              required
              className="issue-form-select"
            >
              <option value="">Select</option>
              <option value="Configuration">Configuration</option>
              <option value="Application">Application</option>
              <option value="Hardware/Performance">Hardware/Performance</option>
              <option value="VTM">VTM</option>
            </select>
          </div>

          {/* Fix Type */}
          <div className="issue-form-input">
            <label className="issue-form-label">Fix Type</label>
            <select
              name="fixType"
              value={formData.fixType}
              onChange={handleChange}
              required
              className="issue-form-select"
            >
              <option value="Permanent">Permanent</option>
              <option value="Temporary">Temporary</option>
            </select>
          </div>
        </div>

        {/* Problem Statement */}
        <div className="issue-form-input">
          <label className="issue-form-label">Problem Statement</label>
          <textarea
            name="problemStatement"
            value={formData.problemStatement}
            onChange={handleChange}
            required
            className="issue-form-textarea"
            rows="4"
          ></textarea>
        </div>

        {/* Solution */}
        <div className="issue-form-input">
          <label className="issue-form-label">Solution</label>
          <textarea
            name="solution"
            value={formData.solution}
            onChange={handleChange}
            required
            className="issue-form-textarea"
            rows="4"
          ></textarea>
        </div>

        {/* Buttons */}
        <div className="issue-form-button-group">
          <button
            type="submit"
            className="issue-form-button-submit"
          >
            Save
          </button>
          <button
            type="reset"
            onClick={() =>
              setFormData({
                productType: "",
                issueType: "",
                environment: "",
                problemStatement: "",
                solution: "",
                fixType: "Permanent",
              })
            }
            className="issue-form-button-clear"
          >
            Clear
          </button>
        </div>
      </form>
    </div>
  );
};

export default IssueForm;
