import React from 'react';
import autobind from 'autobind-decorator';
import { Link } from 'react-router';
import h from '../helpers';

import TourStop from './TourStop';

@autobind
class StopsList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          audios: []
        };
    }

  _add(elem) {
      this.state.audios.push(elem);
  }

  _stopAll() {
      this.state.audios.map((item) => {
	      item.pause();
	  });
  }

  renderTourStop(key) {
      return (
          <TourStop
              key={key.stopID}
              index={key.stopID}
              stopDetails={key}
              stopAll={this._stopAll}
              ptag={this._add}
          />
      )
  }

  render() {
      return (
          <div className="list-of-stops-wrap">
              <ul className="list-of-stops">
                  <div className="free-stops">
                      { (this.props.details.stops.slice(0,1)).map(this.renderTourStop) }
                  </div>
                  <div className="paid-stops">
                      <div className="pay-wall-overlay">
                      </div>
                      { (this.props.details.stops.slice(1)).map(this.renderTourStop) }
                  </div>
              </ul>
              <div className="detail-cta-wrap">
                  <Link to={`/connect/`}>
                      <button className="tour-detail-cta">
                          <span className="cta-label">Buy tour</span>
                      </button>
                  </Link>
              </div>
          </div>
      )
  }
}

export default StopsList;
