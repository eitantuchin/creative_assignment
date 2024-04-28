import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './navbar';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AddProductView from './addProduct';
import DeleteProductView from './deleteProduct';
import UpdateProductView from './updateProduct';
import StudentInfo from './studentInfo';
import Store from './fakestore';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/store" element={<Store />} />
        <Route path="/create-product" element={<AddProductView />} />
        <Route path="/update-product" element={<UpdateProductView />} />
        <Route path="/delete-product" element={<DeleteProductView />} />
        <Route path="/student-info" element={<StudentInfo />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
