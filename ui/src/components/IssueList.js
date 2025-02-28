import React, { useState, useEffect } from "react";
import axios from "axios";
import "./IssueList.css";

const IssueList = () => {
  const [issues, setIssues] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredIssues, setFilteredIssues] = useState([]); // Only set filtered issues when a suggestion is clicked
  const [selectedProduct, setSelectedProduct] = useState("");
  const [suggestions, setSuggestions] = useState([]); // Live suggestions

  useEffect(() => {
    const fetchIssues = async () => {
      try {
        const response = await axios.get("https://apacmw.onrender.com/api/issues");
        setIssues(response.data);
      } catch (err) {
        console.error("Error fetching issues:", err);
      }
    };

    fetchIssues();
  }, []);

  // Live search suggestions
  useEffect(() => {
    if (searchQuery.trim() === "") {
      setSuggestions([]); // No suggestions if the search query is empty
      return;
    }

    const filtered = issues.filter(
      (issue) =>
        issue.problemStatement.toLowerCase().includes(searchQuery.toLowerCase()) &&
        (selectedProduct ? issue.productType === selectedProduct : true)
    );

    setSuggestions(filtered.slice(0, 5)); // Show top 5 suggestions
  }, [searchQuery, issues, selectedProduct]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleProductChange = (e) => {
    setSelectedProduct(e.target.value);
  };

  const handleSelectSuggestion = (suggestion) => {
    setSearchQuery(suggestion.problemStatement);
    setSuggestions([]); // Hide suggestions after selecting one
    setFilteredIssues([suggestion]); // Show only the selected issue in results
  };

  const handleClearSearch = () => {
    setSearchQuery("");
    setSuggestions([]);
    setFilteredIssues([]);
  };

  return (
    <div className="issue-list-container">
      <h1 className="issue-list-heading">Search Issues</h1>

      {/* Product Dropdown */}
      <div className="select-product-container">
        <label htmlFor="product-select" className="select-product-label">Select Product</label>
        <select
          id="product-select"
          value={selectedProduct}
          onChange={handleProductChange}
          className="select-product"
        >
          <option value="">All Products</option>
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

      {/* Search Bar with Clear Button */}
      <div className="search-bar-container">
        <input
          type="text"
          placeholder="Enter error code or problem statement..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="search-bar"
        />
        {searchQuery && (
          <button className="clear-btn" onClick={handleClearSearch}>Clear</button>
        )}

        {/* Suggestions Dropdown */}
        {suggestions.length > 0 && (
          <ul className="suggestions-dropdown">
            {suggestions.map((suggestion, index) => (
              <li key={index} onClick={() => handleSelectSuggestion(suggestion)}>
                {suggestion.problemStatement}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Search Result Display - Only show after selecting a suggestion */}
      {filteredIssues.length > 0 ? (
        <div className="issue-card">
          {filteredIssues.map((issue, index) => (
            <div key={index}>
              <p><strong>Problem:</strong> {issue.problemStatement}</p>
              <p><strong>Solution:</strong> {issue.solution}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="no-issues-text">{searchQuery ? "Please click a suggestion to view the result." : ""}</p>
      )}
    </div>
  );
};

export default IssueList;
