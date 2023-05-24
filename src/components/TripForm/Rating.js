import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlaneDeparture } from '@fortawesome/free-solid-svg-icons';

const Rating = () => {
  const [rating, setRating] = useState(0);

  const handleClick = (value) => {
    setRating(value);
  };

  const stars = [];
  for (let i = 1; i <= 5; i++) {
    const star = (
      <FontAwesomeIcon
        key={i}
        icon={faPlaneDeparture}
        color={i <= rating ? '#ffc107' : '#e4e5e9'}
        onClick={() => handleClick(i)}
      />
    );
    stars.push(star);
  }

  return (
    <div className='d-flex flex-column align-items-center'>
      <div>{stars}</div>
      <div className='text-center'>
        {`You rated this ${rating} out of 5 stars.`}
      </div>
    </div>
  );
};

export default Rating;
