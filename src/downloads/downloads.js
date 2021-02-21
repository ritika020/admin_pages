import React from "react";
import Dropzone from "react-dropzone";
import "./downloads.css";
import {sendDownloadData} from '../ApiHandling/forDownloads';
import menu from "../Images/hamburger.png";
import img from "../Images/img.svg";
class branch extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "",
      description: "",
      files: null,
      filename: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleDrop = (incoming) => {
    console.log(incoming);

    this.setState({
      files: incoming[0],
    });
  };

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const data = new FormData();
    console.log(this.state);
    data.append("title", this.state.title);
    data.append("description", this.state.description);
    data.append("image", this.state.files, this.state.files.name);
    sendDownloadData(data)
      .then((response) => {
        console.log(response);
        if (response.data.status === "success") {
          alert("News added");
        } else {
          alert("Some error encountered. Please Try Again");
        }
      })

      .catch((err) => {
        console.log(err);
        alert("Some error encountered. Please Try Again");
      });
  }

  render() {
    return (
      <div className="container">
        <div className="downloads__sec">
        <button className="downloads__hamburger"><img src={menu} className="downloads__menu align-items-start"></img></button>
          <div className="form__main row ">
            <div className="downloads__col1 col-md-6 col-12">
              <div className="downloads__upload mt-5">
                <Dropzone onDrop={this.handleDrop}>
                  {({ getRootProps, getInputProps }) => (
                    <div {...getRootProps({ className: "downloads__dropzone" })}>
                      <input {...getInputProps()} />
                      <p className="downloads_dragtext">
                        Drag'n'drop files, or click to select files
                      </p>
                      <p className="downloads_dragtext1">
                        <img src={img} className="downloads_arrow"></img>Extra
                        Uploads
                      </p>
                    </div>
                  )}
                </Dropzone>
              </div>
            </div>

            <div className="downloads__col2 col-md-6 col-12">
              <form>
                <div className="downloads__head">Entries</div>
                <div className="downloads__title">
                  <textarea
                    name="title"
                    id="title"
                    onChange={this.handleChange}
                    class="form-control"
                    placeholder="Title"
                    rows="3"
                    required
                  ></textarea>
                  {/* <span className="Form__span">Title</span> */}
                </div>
                <div className="downloads__body">
                  <textarea
                    name="description"
                    id="description"
                    onChange={this.handleChange}
                    class="form-control"
                    placeholder="Body"
                    rows="5"
                    required
                  ></textarea>
                  {/* <span className="Form__span">Body</span> */}
                </div>
              </form>
            </div>
          </div>

          <div className="row downloads__button d-flex justify-content-center">
            <button
              type="submit"
              onClick={this.handleSubmit}
              className="downloads_submit form-control"
              style={{ alignSelf: "center" }}
            >
              {" "}
              Submit
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default branch;
