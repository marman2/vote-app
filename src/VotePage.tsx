import { useState } from 'react';
import './Vote.css'; // This is where you would put your CSS
import { useSearchParams } from 'react-router-dom';

// A functional component for the voting page
const VotePage = () => {
  let [searchParams] = useSearchParams();
  let uniqueId = searchParams.get('id');

  console.log(uniqueId);

  const [selectedVote, setSelectedVote] = useState(null);

  const handleVoteChange = (vote: any) => {
    setSelectedVote(vote);
  };

  const submitVote = () => {
    // Submit the selected vote to a server or another state management layer
    console.log('Vote submitted for:', selectedVote);
  };

  return (
    <div className='vote-page'>
      <h1>Vota per l'esibizione 1</h1>
      <div className='design-choices'>
        <div className='design-option'>
          <img src='path-to-modern-house-image.jpg' alt='Modern House Design' />
          <h2>Modern House Design</h2>
          <p>Team: Modern Artisans</p>
          <p>
            Description: Blending modern aesthetics with traditional
            craftsmanship, our design is the perfect balance of elegance and
            functionality.
          </p>
        </div>
        <div className='design-option'>
          <img src='path-to-garden-shed-image.jpg' alt='Garden Shed Design' />
          <h2>Garden Shed Design</h2>
          <p>Team: Green Fingers</p>
          <p>
            Description: Our shed is more than a storage space—it's a cozy
            retreat for you to unwind and connect with nature.
          </p>
        </div>
      </div>
      <div className='vote-slider'>
        {[6, 7, 8, 9, 10].map((vote) => (
          <button
            key={vote}
            className={`vote-button ${selectedVote === vote ? 'selected' : ''}`}
            onClick={() => handleVoteChange(vote)}
          >
            {vote}
          </button>
        ))}
      </div>
      <button className='submit-button' onClick={submitVote}>
        Submit vote
      </button>
      <button className='cancel-button'>Cancel</button>
    </div>
  );
};

export default VotePage;
