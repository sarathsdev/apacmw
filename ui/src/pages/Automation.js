import React, { useState, useEffect } from "react";
import axios from "axios";
import './Automation.css';

const Automation = () => {
  const [tasks, setTasks] = useState([]);
  const [taskStatus, setTaskStatus] = useState([]);
  const [logs, setLogs] = useState([]);
  const [newTask, setNewTask] = useState({
    taskType: "",
    schedule: "",
    status: "Pending"
  });

  // Fetch existing tasks from an API (Middleware related tasks)
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/tasks");
        setTasks(response.data);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };

    fetchTasks();
  }, []);

  // Fetch logs of executed tasks
  useEffect(() => {
    const fetchLogs = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/logs");
        setLogs(response.data);
      } catch (error) {
        console.error("Error fetching logs:", error);
      }
    };

    fetchLogs();
  }, []);

  // Handle form input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewTask({ ...newTask, [name]: value });
  };

  // Add a new scheduled task
  const handleAddTask = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/tasks", newTask);
      setTasks([...tasks, response.data]);
      setNewTask({ taskType: "", schedule: "", status: "Pending" });
      alert("Task scheduled successfully!");
    } catch (error) {
      console.error("Error adding task:", error);
      alert("Error scheduling task.");
    }
  };

  return (
    <div className="automation-page-container">
      <h1 className="automation-page-heading">Middleware Automation Dashboard</h1>

      {/* Task Scheduling Section */}
      <div className="task-scheduling-container">
        <h2 className="sub-heading">Schedule New Task</h2>
        <form onSubmit={handleAddTask} className="task-form">
          <div className="task-form-input">
            <label htmlFor="taskType" className="form-label">Task Type:</label>
            <select
              id="taskType"
              name="taskType"
              value={newTask.taskType}
              onChange={handleChange}
              className="form-select"
              required
            >
              <option value="">Select Task</option>
              <option value="Backup">Backup</option>
              <option value="Restart Server">Restart Server</option>
              <option value="Deploy Configuration">Deploy Configuration</option>
              <option value="Log Rotation">Log Rotation</option>
            </select>
          </div>

          <div className="task-form-input">
            <label htmlFor="schedule" className="form-label">Schedule:</label>
            <input
              type="datetime-local"
              id="schedule"
              name="schedule"
              value={newTask.schedule}
              onChange={handleChange}
              className="form-input"
              required
            />
          </div>

          <button type="submit" className="submit-button">Schedule Task</button>
        </form>
      </div>

      {/* Task List Section */}
      <div className="task-list-container">
        <h2 className="sub-heading">Scheduled Tasks</h2>
        <ul className="task-list">
          {tasks.map((task, index) => (
            <li key={index} className="task-item">
              <p><strong>Task Type:</strong> {task.taskType}</p>
              <p><strong>Scheduled For:</strong> {task.schedule}</p>
              <p><strong>Status:</strong> {task.status}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* Logs Section */}
      <div className="logs-container">
        <h2 className="sub-heading">Action Logs</h2>
        <ul className="logs-list">
          {logs.map((log, index) => (
            <li key={index} className="log-item">
              <p><strong>{log.timestamp}</strong>: {log.message}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Automation;
