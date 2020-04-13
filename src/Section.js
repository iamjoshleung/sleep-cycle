import React from "react";
import "./Section.scss";
import SignalGraph from "./SignalGraph/SignalGraph";
import SignalDescription from "./SignalDescription/SignalDescription";

class Section extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="page sectionPage">
        <header>
          <h1>
            <span>sleep cycle</span>
            <span>REM sleep</span>
          </h1>
        </header>
        <div className="navigation">
          <button className="button prev button--aylen button--round-l button--text-thick">
            prev
          </button>
          <button
            class="button is-primary is-rounded"
            onClick={this.props.onHome}
          >
            Analyze Again!
          </button>
          <button
            class="button is-danger is-rounded"
            onClick={this.props.onScore}
          >
            Check Score!
          </button>
          <button className="button next button--aylen button--round-l button--text-thick">
            next
          </button>
        </div>
        <SignalGraph />
        <SignalDescription />
      </div>
    );
  }
}

export default Section;
