import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import { fetchHikes, deleteHike } from '../actions/hikeActions';
import HikeCard from './HikeCard';

class HikeList extends React.Component {

  componentDidMount() {
    this.props.fetchHikes();
  }

  render() {
    const { errorMessage, hikes, deleteHike, fetchHikes } = this.props;

    const deleteHandler = (id) => deleteHike(id).then(fetchHikes);
    const renderHike = (hike) => <HikeCard key={hike.id} hike={hike} onDelete={deleteHandler} />;

    if (errorMessage) {
      return <div>{errorMessage}</div>;
    }

    return (
      <ul>
        {hikes.map(renderHike)}
      </ul>
    );
  }
}

HikeList.propTypes = {
  hikes: PropTypes.array.isRequired,
  fetchHikes: PropTypes.func.isRequired,
  deleteHike: PropTypes.func.isRequired,
  errorMessage: PropTypes.string,
};

const mapStateToProps = ({ hikes }) => ({
  hikes: hikes.items,
  errorMessage: hikes.errorMessage,
});

const mapActionCreatorsToDispatch = {
  fetchHikes,
  deleteHike,
};

export default connect(mapStateToProps, mapActionCreatorsToDispatch)(HikeList);
