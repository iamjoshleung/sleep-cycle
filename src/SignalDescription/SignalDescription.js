import React from "react";
import PropTypes from "prop-types";
import styles from "./SignalDescription.module.scss";

const SignalDescription = (props) => (
  <div className={styles.SignalDescription}>
    <h2>Our Analysis</h2>
    <article className="message">
      <div className="message-body">
        {props.data}
      </div>
    </article>
  </div>
);

SignalDescription.propTypes = {};

SignalDescription.defaultProps = {};

export default SignalDescription;
