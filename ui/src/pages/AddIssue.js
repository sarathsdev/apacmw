import React from "react";
//import { Link } from "react-router-dom";
import IssueForm from "../components/IssueForm";
import "./AddIssue.css";

const AddIssue = () => {
  return (
    <div className="add-issue-container">
      <div className="add-issue-header">
       
        
      </div>
      <IssueForm />
    </div>
  );
};

export default AddIssue;


 /*<h1 className="add-issue-title">Add New Issue</h1> 
 
 <Link to="/">
          <button className="back-button">
            Back to Home
          </button>
        </Link>
 
 */