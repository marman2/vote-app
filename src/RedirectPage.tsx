import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid'; // Make sure to install the `uuid` library

const RedirectPage = () => {
  let history = useHistory();

  useEffect(() => {
    const uniqueId = uuidv4(); // Generate a unique ID
    history.push(`/vote?id=${uniqueId}`); // Redirect to the vote page with the unique ID
  }, [history]);

  return (
    <div>
      <p>Redirecting to the voting page...</p>
      {/* Optionally add a loader here */}
    </div>
  );
};

export default RedirectPage;
