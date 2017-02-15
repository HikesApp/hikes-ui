import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchHikes, deleteHike } from '../actions/hikeActions';

class HikeList extends React.Component {

  componentDidMount() {
    this.props.fetchHikes();
  }

  render() {
    const { errorMessage, hikes, deleteHike, fetchHikes } = this.props;

    if (errorMessage) {
      return <div>{errorMessage}</div>;
    }

    return (
      <table className="u-full-width">
        <thead>
          <tr>
            <th>Hike name</th>
            <th>Start date</th>
            <th>End date</th>
            <th>Distance (km)</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {hikes.map((hike) => (
            <tr key={hike.id}>
              <td>{hike.name}</td>
              <td>{hike.startDate}</td>
              <td>{hike.endDate}</td>
              <td>{hike.distance}</td>
              <td>
                <button
                  className="u-full-width"
                  onClick={() => deleteHike(hike.id).then(fetchHikes)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
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
