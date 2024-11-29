import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';  // Import Axios to optionally verify the token with the backend

const Dashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    
    if (!token) {
      navigate('/login');
    } else {
      // Optionally verify the token with your backend API
      axios.post('http://localhost:5000/api/verify', { token })
        .then((response) => {
          // If the token is valid, set the user
          setUser(response.data.user);  // Assuming the backend returns user data
        })
        .catch((err) => {
          // If token is invalid or expired, redirect to login
          console.error("Token verification failed", err);
          navigate('/login');
        });
    }
  }, [navigate]);

  if (!user) return <div>Loading...</div>;

  return (
    <div>
      <h1>Welcome, {user.email}</h1> {/* Display email next to Welcome */}
    </div>
  );
};

export default Dashboard;
