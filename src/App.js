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
      currentView: "upload",
      data: {
        sections: [],
        scores: {}
      }
    };
  }

  handleData = (data) => {
    
    
    const cleanData = {
      sections: [
        data.first_section_info
      ],
      scores: {
        sleep_msg: data.sleep_msg,
        sleep_score: data.sleep_score,
        total_section_num: data.total_section_num,
        total_sleep_time: data.total_sleep_time,
        wtr: data.wtr,
        wtr_msg: data.wtr_msg
      }
    }
    console.log(cleanData)
    this.setState({
      currentView: "section",
      data: cleanData 
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
                data={this.state.data.sections[0]}
                onHome={this.handleViewChangeHome}
                onScore={this.handleViewChangeScore}
              />
            ) : null}
            {this.state.currentView == "score" ? (
              <Score data={this.state.data.scores} onHome={this.handleViewChangeHome} />
            ) : null}
          </div>
        {/* </CSSTransition> */}
      </div>
    );
  }
}

export default App;
