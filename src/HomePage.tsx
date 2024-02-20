import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

const HomePage = () => {
  let navigate = useNavigate();

  useEffect(() => {
    // Generate a unique ID
    const uniqueId = uuidv4();
    // Redirect to the vote page with the unique ID as a query param
    navigate(`/vote?id=${uniqueId}`);
  }, [navigate]);

  // Render some loading state if needed
  return <div>Redirecting to the vote page...</div>;
};

export default HomePage;
