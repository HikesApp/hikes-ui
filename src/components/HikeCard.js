import React, { PropTypes } from 'react';

const HikeCard = ({ hike, onDelete }) => (
  <div>{hike.name} - {hike.startDate}
    <button onClick={() => onDelete(hike.id)}>DELETE</button>
  </div>
);

HikeCard.propTypes = {
  hike: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default HikeCard;
