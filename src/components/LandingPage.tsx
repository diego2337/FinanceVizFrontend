import React, { useEffect } from "react";

const LandingPage: React.FC = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/your-endpoint`);
        const data = await response.json();
        console.log("Backend data:", data);
      } catch (error) {
        console.error("Error fetching backend data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Welcome to the Landing Page</h1>
    </div>
  );
};

export default LandingPage;
