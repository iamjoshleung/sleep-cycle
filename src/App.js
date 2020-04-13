import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import Upload from "./Upload";
import Section from "./Section";
import Score from "./Score";
// import { CSSTransition } from "react-transition-group";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentView: "section",
    };
  }

  handleData = (data) => {
    this.setState({
      currentView: "section",
    });
  };

  handleViewChangeHome = () => {
    this.setState({
      currentView: "upload",
    });
  };

  handleViewChangeScore = () => {
    this.setState({
      currentView: "score",
    });
  };

  render() {
    return (
      <div className="App">
        {/* <CSSTransition in={true} timeout={200} classNames="fade"> */}
        <div>
        {this.state.currentView == "upload" ? (
              <Upload onFinishAnalyze={this.handleData} />
            ) : null}
            {this.state.currentView == "section" ? (
              <Section
                onHome={this.handleViewChangeHome}
                onScore={this.handleViewChangeScore}
              />
            ) : null}
            {this.state.currentView == "score" ? (
              <Score onHome={this.handleViewChangeHome} />
            ) : null}
          </div>
        {/* </CSSTransition> */}
      </div>
    );
  }
}

export default App;
