// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Welcome to the Cinema Website</h1>
      <p>
        <Link to="/register">Go to Register Page</Link>
      </p>
    </div>
  );
}

export default Home;
