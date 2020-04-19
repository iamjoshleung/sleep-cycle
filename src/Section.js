import React from "react";
import "./Section.scss";
import SignalGraph from "./SignalGraph/SignalGraph";
import SignalDescription from "./SignalDescription/SignalDescription";
import axios from "axios";

class Section extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data,
    };

    console.log(this.state.data);
  }

  onPrev = () => {
    axios
      .get(process.env.REACT_APP_API_URL + "/api/section", {
        params: {
          sec_id: this.state.data.section_id - 1,
        },
      })
      .then((res) => {
        this.setState({ data: res.data.section });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  onNext = () => {
    axios
      .get(process.env.REACT_APP_API_URL + "/api/section", {
        params: {
          sec_id: this.state.data.section_id + 1,
        },
      })
      .then((res) => {
        this.setState({ data: res.data.section });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className="page sectionPage">
        <header>
          <h1>
            <span>sleep cycle</span>
            <span>{this.state.data.stage_name}</span>
          </h1>
          <h2>
            <span>current epoch</span>
            <span>{this.state.data.section_id + 1} / 1000</span>
          </h2>
        </header>

        <div className="navigation">
          <button
            disabled={this.state.data.section_id == 0}
            onClick={this.onPrev}
            className="button prev button--aylen button--round-l button--text-thick"
          >
            prev epoch
          </button>

          <button
            className="button is-primary is-rounded"
            onClick={this.props.onHome}
          >
            analyze again!
          </button>
          <button
            className="button is-danger is-rounded"
            onClick={this.props.onScore}
          >
            check score!
          </button>

          <button
            disabled={this.state.data.section_id == 999}
            onClick={this.onNext}
            className="button next button--aylen button--round-l button--text-thick"
          >
            next epoch
          </button>
        </div>
        <SignalGraph data={this.state.data.signal} />
        <SignalDescription data={this.state.data.description} />
      </div>
    );
  }
}

export default Section;
