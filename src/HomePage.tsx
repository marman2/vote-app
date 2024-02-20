import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

const HomePage = () => {
  let navigate = useNavigate();
  let [searchParams] = useSearchParams();

  useEffect(() => {
    // Check if an 'id' query parameter is already present
    let id = searchParams.get('id');
    if (!id) {
      // If not, generate a unique ID
      id = uuidv4();
      // Redirect to the vote page with the new unique ID as a query param
      navigate(`/vote?id=${id}`);
    } else {
      // If an 'id' query parameter exists, simply navigate to the vote page without changing the URL
      navigate(`/vote?id=${id}`, { replace: true });
    }
  }, [navigate, searchParams]);

  // Render some loading state if needed
  return <div>Redirecting to the vote page...</div>;
};

export default HomePage;
