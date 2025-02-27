import { React, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";
import { Menu, Home as HomeIcon, Settings, Wrench } from "lucide-react";

import "./App.css";
import citiLogo from "./citibank-logo.png";
import Home from "./pages/Home";
import KnowledgeBase from "./pages/KnowledgeBase";
import Queries from "./pages/Queries";
import Automation from "./pages/Automation";
import BAU from "./pages/BAU";
import Contact from "./pages/Contact";
import Access from "./pages/Access";
import AddIssue from "./pages/AddIssue";

const Sidebar = ({ isOpen, toggleDrawer }) => {
  const navigate = useNavigate();

  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <button className="close-btn" onClick={toggleDrawer}>✖</button>
      <ul className="sidebar-links">
        <li><a href=""><HomeIcon size={20} />Confluence</a></li>
        <li><a href=""><Settings size={20} /> WAIS</a></li>
        <li><a href=""><Wrench size={20} />Service Now</a></li>
      </ul>
     
    </div>
  );
};

const Navbar = ({ toggleDrawer }) => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <button className="menu-btn" onClick={toggleDrawer}><Menu size={28} /></button>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/knowledge-base">Knowledge Base</Link></li>
          <li><Link to="/query">Queries</Link></li>
          <li><Link to="/automation">Automation</Link></li>
          <li><Link to="/access">iAccess</Link></li>
          <li><Link to="/bau">BAU</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

const App = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const toggleDrawer = () => setDrawerOpen(!drawerOpen);

  return (
    <Router>
      <div className="app-container">
        <header className="header">
          <div className="logo-container">
            <img src={citiLogo} alt="Citi Bank Logo" className="logo" />
            <h1>APAC Middleware</h1>
          </div>
          <Navbar toggleDrawer={toggleDrawer} />
        </header>
        <Sidebar isOpen={drawerOpen} toggleDrawer={toggleDrawer} />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/knowledge-base" element={<KnowledgeBase />} />
            <Route path="/query" element={<Queries />} />
            <Route path="/automation" element={<Automation />} />
            <Route path="/access" element={<Access />} />
            <Route path="/bau" element={<BAU />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/add" element={<AddIssue />} />
          </Routes>
        </main>
        
      </div>
    </Router>
  );
};

export default App;


/**
 <footer className="footer">
          <p>Copyright © 2025 | Contact us | Share Feedback</p>
        </footer>
 */