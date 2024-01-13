import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../app/store';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../services/useAuth';

const DashboardPage: React.FC = () => {
  const user = useSelector((state: RootState) => state.auth.user);
  const Navigate = useNavigate();
  const {  logout } = useAuth();

  const handleLogout = () => {
    console.log('Logout button clicked');
    logout();
    Navigate("/signin")
  };

  return (
    <div style={{ padding: '20px' }}>
      <header style={{ backgroundColor: '#333', color: '#fff', padding: '10px', textAlign: 'center' }}>
        <h2>Welcome to the Dashboard, {user?.name}!</h2>
      </header>

      <section style={{ marginTop: '20px' }}>
        <h3>Recent Activity</h3>
        <ul>
          <li>User {user?.name} logged in.</li>
        </ul>
      </section>

      <section style={{ marginTop: '20px' }}>
        <h3>Account Information</h3>
        <p>Email: {user?.email}</p>
        <p>Role: {user?.role}</p>
        {/* Add more account information as needed */}
      </section>

      <section style={{ marginTop: '20px' }}>
        <h3>Tasks</h3>
        <ul>
          <li>Complete task A</li>
          <li>Review project proposal</li>
       
        </ul>
      </section>

      <section style={{ marginTop: '20px' }}>
      </section>

      {/* Logout button */}
      <button onClick={handleLogout} style={{ backgroundColor: '#333', color: '#fff', padding: '10px 15px', border: 'none', cursor: 'pointer', fontSize: '16px', marginTop: '20px' }}>
        Logout
      </button>
    </div>
  );
};

export default DashboardPage;

