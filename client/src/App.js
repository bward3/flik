import React from "react";
import { BroswerRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<BookSearch />} />
          <Route path="*" element={<h1>Wrong page!</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
