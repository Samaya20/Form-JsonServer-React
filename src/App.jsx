import React, { useState, useEffect } from "react";
import "./App.css";
import Students from "./components/Students";
import Form from "./components/Form";
import axios from "axios";

function App() {
  const [students, setStudents] = useState([]);

  const fetchStudents = async () => {
    try {
      const response = await axios.get("http://localhost:3000/students");
      setStudents(response.data);
    } catch (error) {
      console.error("Error fetching students:", error);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  const handleFormSubmit = async (formData) => {
    try {
      await axios.post("http://localhost:3000/students", formData);
      fetchStudents();
    } catch (error) {
      console.error("Error posting the student data!!!!", error);
    }
  };

  return (
    <div className="app">

      <div className="content">
        <Form onFormSubmit={handleFormSubmit} />
        <Students students={students} />
      </div>
    </div>


  );

}

export default App;
