import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchHikes } from '../actions/hikeActions';

class HikeList extends React.Component {

  componentDidMount() {
    this.props.fetchHikes();
  }

  render() {
    const { errorMessage, hikes } = this.props;

    if (errorMessage) {
      return <div>{errorMessage}</div>;
    }

    return (
      <ul>
        {hikes.map((hike, index) => <li key={index}>{hike.name} - {hike.startDate}</li>)}
      </ul>
    );
  }
}

HikeList.propTypes = {
  hikes: PropTypes.array.isRequired,
  fetchHikes: PropTypes.func.isRequired,
  errorMessage: PropTypes.string,
};

const mapStateToProps = ({ hikes }) => ({
  hikes: hikes.items,
  errorMessage: hikes.errorMessage,
});

const mapActionCreatorsToDispatch = {
  fetchHikes,
};

export default connect(mapStateToProps, mapActionCreatorsToDispatch)(HikeList);
