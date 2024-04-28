import React from 'react';

export function StudentInfo() {
  return (
    <div className="container mt-3">
      <h2>Student Information</h2>
      <div>
        <h4>Team Members:</h4>
        <ul>
          <li>Eitan Tuchin - eitant18@iastate.edu</li>
        </ul>
      </div>
      <div>
        <h4>Course Information:</h4>
        <p>Course Number: CS 319 </p>
        <p>Course Name: Introduction to Web Development</p>
        <p>Date: April 25, 2024</p>
        <p>Professor: Dr. Aldaco</p>
        <p>Team Number: 143</p>
      </div>
      <div>
        <h4>Project Introduction:</h4>
        <p>
          Our project is focused on developing a web application for managing a store catalog. 
          The application allows users to add, update, delete, and view products in the store catalog. 
        The backend is managed by a MongoDB   database and the frontent by React. We invite you to 
        try out all of the functionalities of the website.
        </p>
      </div>
    </div>
  );
}

export default StudentInfo;