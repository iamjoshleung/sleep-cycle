import React from "react";
import "./Upload.css";
import Dropzone from "react-dropzone";
import ReactLoading from "react-loading";

class Upload extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      files: [],
      uploading: false,
    };
  }

  handleFileDrop(files) {
    this.setState({
      files,
    });
  }

  handleUpload = (e) => {
    this.setState({
      uploading: true,
      files: [],
    });

    setTimeout(() => {
      this.props.onFinishAnalyze();
    }, 2000);
  };

  render() {
    return (
      <div className="page uploadPage">
        <header>
          <h1>
            <span>Let Us Analyze Your</span>
            <span>Sleep Cycles</span>
          </h1>
        </header>

        <Dropzone
          onDrop={(acceptedFiles) => this.handleFileDrop(acceptedFiles)}
        >
          {({ getRootProps, getInputProps }) => (
            <section>
              <div {...getRootProps({ className: "dropzone" })}>
                <input {...getInputProps()} />
                <p>
                  Drag 'n' drop your sleep file here, or click to select the
                  file.
                </p>
              </div>
              <aside>
                <ul>
                  {this.state.files.map((file) => (
                    <li key={file.path}>
                      {file.path} - {file.size} bytes
                    </li>
                  ))}
                </ul>
              </aside>
              {this.state.files.length > 0 && !this.state.uploading ? (
                <div className="uploadBtnWrap">
                  <button
                    className="button is-info is-rounded"
                    onClick={this.handleUpload}
                  >
                    Upload
                  </button>
                </div>
              ) : null}
              {this.state.uploading ? (
                <div className="loading">
                  <span>we are working on it</span>
                  <ReactLoading
                    type="balls"
                    color="#ffffff"
                    height={"10%"}
                    width={"10%"}
                  />
                </div>
              ) : null}
            </section>
          )}
        </Dropzone>
      </div>
    );
  }
}

export default Upload;
