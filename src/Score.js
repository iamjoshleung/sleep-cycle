import React from "react";
import "./Score.scss";

class Score extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="page sectionPage">
        <section className="sNumberBox">
          <div className="numberBox">
            <span>sleep score</span>
            <span>{parseFloat(this.props.data.sleep_score).toFixed(2)}</span>
          </div>
          <div className="numberBox">
            <span>sleep fragmentation index</span>
            <span>{parseFloat(this.props.data.wtr).toFixed(2)}</span>
          </div>
          <div className="numberBox">
            <span>total sleep time (hours)</span>
            <span>
              {parseFloat(this.props.data.total_sleep_time).toFixed(2)}
            </span>
          </div>
        </section>
        <button
          className="button is-danger is-rounded"
          onClick={this.props.onHome}
        >
          Analyze Again!
        </button>
        <section className="sRecomm">
          <div className="recomm">
            <h2>sleep score analysis</h2>
            <p>{this.props.data.sleep_msg}</p>
          </div>
          <div className="recomm">
            <h2>sleep fragmentation index analysis</h2>
            <p>{this.props.data.wtr_msg}</p>
          </div>
        </section>
      </div>
    );
  }
}

export default Score;
