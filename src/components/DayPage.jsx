import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function DayPage({ days, setDays }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const day = days.find((d) => d.id.toString() === id);

  const [taskText, setTaskText] = useState('');

  const addTask = () => {
    const newTask = { id: Date.now(), text: taskText, completed: false };
    const updatedDays = days.map((d) =>
      d.id.toString() === id ? { ...d, tasks: [...d.tasks, newTask] } : d
    );
    setDays(updatedDays);
    setTaskText('');
  };

  const toggleTaskCompletion = (taskId) => {
    const updatedDays = days.map((d) =>
      d.id.toString() === id
        ? {
            ...d,
            tasks: d.tasks.map((t) =>
              t.id === taskId ? { ...t, completed: !t.completed } : t
            ),
          }
        : d
    );
    setDays(updatedDays);
  };

  const deleteTask = (taskId) => {
    const updatedDays = days.map((d) =>
      d.id.toString() === id
        ? { ...d, tasks: d.tasks.filter((t) => t.id !== taskId) }
        : d
    );
    setDays(updatedDays);
  };

  return (
    <div className="day-page">
      <h1>مهام اليوم {day.date}</h1>
      <ul>
        {day.tasks.map((task) => (
          <li key={task.id} className="task-item">
            <div className="task-content">
              <span
                className="task-text"
                style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
              >
                {task.text}
              </span>
              <div className="task-actions">
                <button onClick={() => toggleTaskCompletion(task.id)}>
                  {task.completed ? 'غير مكتمل' : 'مكتمل'}
                </button>
                <button onClick={() => deleteTask(task.id)}>حذف</button>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <input
        type="text"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        placeholder="أضف مهمة جديدة"
      />
      <button onClick={addTask}>إضافة مهمة</button>
      <button onClick={() => navigate('/')}>العودة إلى الصفحة الرئيسية</button>
    </div>
  );
}

export default DayPage;