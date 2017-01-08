import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchHikes } from '../actions/hikeActions';

class HikeList extends React.Component {

  componentDidMount() {
    this.props.fetchHikes();
  }

  render() {
    const renderHike = (hike, index) => <li key={index}>{hike.name} - {hike.startDate}</li>;
    return (
      <ul>
        {this.props.hikes.map(renderHike)}
      </ul>
    );
  }
}

HikeList.propTypes = {
  hikes: PropTypes.array.isRequired,
  fetchHikes: PropTypes.func.isRequired,
};

const mapStateToProps = ({ hikes }) => ({
  hikes: hikes.hikesList,
});

const mapActionCreatorsToDispatch = {
  fetchHikes,
};

export default connect(mapStateToProps, mapActionCreatorsToDispatch)(HikeList);
