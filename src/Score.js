import React from "react";
import "./Score.scss";

class Score extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="page sectionPage">
        <header>
          <h1>
            <span>sleep score</span>
            <span>94</span>
          </h1>
        </header>
        <button class="button is-danger is-rounded" onClick={this.props.onHome}>
          Analyze Again!
        </button>
        <div class="recomm">
          <h2>recommendation</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero
            dignissimos quas, et earum sapiente consequatur maiores
            reprehenderit esse veritatis, quis pariatur ducimus culpa eveniet!
            Alias ipsa eaque repudiandae asperiores consectetur?
          </p>
        </div>
      </div>
    );
  }
}

export default Score;
