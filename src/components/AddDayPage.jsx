import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddDayPage({ addDay }) {
  const [date, setDate] = useState('');
  const navigate = useNavigate();

  const handleAddDay = () => {
    if (date) {
      addDay(date);
      navigate('/');
    }
  };

  return (
    <div className="add-day-page">
      <h1>إضافة يوم جديد</h1>
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <button onClick={handleAddDay}>إضافة يوم</button>
    </div>
  );
}

export default AddDayPage;