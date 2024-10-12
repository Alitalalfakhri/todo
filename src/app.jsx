import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './components/Homepage';
import DayPage from './components/DayPage';
import AddDayPage from './components/AddDayPage';
import './App.css';

function App() {
  const [days, setDays] = useState([]); // Ensure this is an array

  const addDayWithDate = (date) => {
    const newDay = { id: Date.now(), date, tasks: [] };
    setDays([...days, newDay]);
  };

  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Homepage days={days} />} />  {/* Pass `days` properly */}
          <Route path="/add-day" element={<AddDayPage addDay={addDayWithDate} />} />
          <Route path="/day/:id" element={<DayPage days={days} setDays={setDays} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;