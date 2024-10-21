import React, { useEffect } from 'react'; // Corrected hook import
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation

export const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Automatically navigate to the home page after 3 seconds
    const timer = setTimeout(() => {
      navigate("/");
    }, 3000);

    // Cleanup the timer when the component unmounts
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="not-found page">
      <h3>Page not found.</h3>
      <img
        src="https://cdn-icons-png.flaticon.com/512/2748/2748558.png"
        alt="not found"
      />

      <button onClick={() => navigate("/")}>Back to Home</button>
    </div>
  );
};
