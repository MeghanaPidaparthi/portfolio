import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Portfolio from "./Portfolio"; // your main page
import PageNotFound from "./PageNotFound"; // 404 page
import Contact from "./Contact";
import ProjectDetails from "./ProjectDetails";
import './index.css'
function App() {
  return (
    <Router>
      <Routes>
        {/* Define your main routes */}
        <Route path="/" element={<Portfolio />} />
        
        {/* Catch-all route for 404 */}
        <Route path="*" element={<PageNotFound />} />
        <Route path="/get-in-touch" element={<Contact />} />
        <Route path="/project-details/:id" element={<ProjectDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
