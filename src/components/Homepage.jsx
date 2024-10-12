import React from 'react';
import { Link } from 'react-router-dom';

function Homepage({ days = [] }) {  // Ensure `days` defaults to an empty array
  return (
    <div className="homepage">
      <h1>قائمة الأيام</h1>
      {days.length === 0 ? (
        <p>لا توجد أيام مضافة بعد.</p>
      ) : (
        <ul>
          {days.map((day) => (
            <li key={day.id}>
              <Link to={`/day/${day.id}`}>اليوم {day.date}</Link>
            </li>
          ))}
        </ul>
      )}
      <Link to="/add-day">
        <button>إضافة يوم</button>
      </Link>
    </div>
  );
}

export default Homepage;