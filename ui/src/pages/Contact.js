import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <h1 className="contact-heading">Contact Information</h1>

      {/* Manager 1 */}
      <div className="contact-card">
        <h2 className="contact-title"></h2>
        <p><strong>Name:</strong> Antony Geogi</p>
        <p><strong>Email:</strong> <a href="mailto:john.doe@example.com">geogi@example.com</a></p>
        <p><strong>Phone:</strong> +1 123-456-7890</p>
      </div>

      {/* Manager 2 */}
      <div className="contact-card">
        <h2 className="contact-title"></h2>
        <p><strong>Name:</strong> Vinay Kumar Balthi</p>
        <p><strong>Email:</strong> <a href="mailto:jane.smith@example.com">vinay@example.com</a></p>
        <p><strong>Phone:</strong> +1 987-654-3210</p>
      </div>

      {/* Team Distribution List */}
      <div className="contact-card">
        <h2 className="contact-title">Team DL</h2>
        <p><strong>Email:</strong> <a href="mailto:team@example.com">apacmiddleware@example.com</a></p>
      </div>

      {/* Other Important Information */}
      <div className="contact-card">
        <h2 className="contact-title">Other Information</h2>
        <p><strong>Office Location:</strong>Old Mahabalipuram road , Chennai</p>
        <p><strong>Support Hours:</strong> Mon-Fri, 9 AM - 6 PM (IST)</p>
        <p><strong>Emergency Contact:</strong> +1 800-999-9999</p>
      </div>
    </div>
  );
};

export default Contact;
