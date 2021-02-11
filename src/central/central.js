import React from "react";
import "./central.css";
import Dropzone from "react-dropzone";
import { sendCentralNews } from "../ApiHandling/forNews";
import img from "../Images/img.svg";

class central extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "",
      date: "",
      details: "",
      author: "",
      state: "",
      district: "",
      trending: "",
      files: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleDrop = (incoming) => {
    console.log(incoming);
    let tempFiles = this.state.files;
    tempFiles.push(...incoming);
    this.setState({
      files: tempFiles,
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
    data.append("date", this.state.date);
    data.append("details", this.state.details);
    data.append("author", this.state.author);
    data.append("state", this.state.state);
    data.append("branch", this.state.branch);
    data.append("district", this.state.district);
    this.state.files.map((file, index) =>
      data.append("myFiles", file, file.name)
    );
    console.log(data.get("myFiles"));
    sendCentralNews(data)
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
        <div className="central__sec">
          <div className="form__main row">
            <div className="central__col1 col-md-6 col-12">
              <div className="central__upload mt-5">
                <Dropzone onDrop={this.handleDrop}>
                  {({ getRootProps, getInputProps }) => (
                    <div {...getRootProps({ className: "dropzone" })}>
                      <input {...getInputProps()} />
                      <p className="Admin_text">
                        Drag'n'drop files, or click to select files
                      </p>
                      <p className="Admin_text1">
                        <img src={img} className="Admin_arrow"></img>Extra
                        Uploads
                      </p>
                    </div>
                  )}
                </Dropzone>
              </div>

              <div className="central__text1 mt-4">
                The 1st selected image shall be your Thumbnail &amp; rest shall
                be posted inside. You can choose an Image of any aspect ratio
                eg, 1:1, 4:3, 16:9
              </div>

              <div className="central__date mt-4">
                <input
                  type="date"
                  name="date"
                  id="date"
                  className="Central_input form-control"
                  placeholder="DD/MM/YYYY"
                  style={{ color: "#858585" }}
                />
              </div>

              <div className="central__text2 mt-4">
                <div className="Central_text">
                  Select date only when required. Not selecting it, this form
                  shall automatically shall take the input time of submission.
                </div>
              </div>
            </div>

            <div className="central__col2 col-md-6 col-12">
              <form>
                <div className="central__head">Entries</div>
                <div className="central__title">
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

                <div className="central__body">
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

                <div className="central__selectAuthor">
                  <input
                    className="Admin_central_authorI"
                    name="author"
                    id="author"
                    onChange={this.handleChange}
                    type="text"
                    class="form-control "
                    placeholder="Select Author"
                    required
                  />
                  {/* <span className="Form__span">Select Author</span> */}
                </div>
                <div className="central__selectState">
                  <input
                    name="state"
                    id="state"
                    onChange={this.handleChange}
                    type="text"
                    class="form-control "
                    placeholder="Select State"
                    required
                  />
                  {/* <span className="Form__span">Select State</span> */}
                </div>
                <div className="central__selectBranch">
                  <input
                    name="district"
                    id="district"
                    onChange={this.handleChange}
                    type="text"
                    class="form-control "
                    placeholder="Select District"
                    required
                  />
                  {/* <span className="Form__span">Select District</span> */}
                </div>
                <div className="central__impLinks">
                  <input
                    name="details"
                    id="details"
                    onChange={this.handleChange}
                    type="text"
                    class="form-control "
                    placeholder="Important Links"
                    required
                  />
                  {/* <span className="Form__span">Important Links</span> */}
                </div>
              </form>
            </div>
          </div>

          <div className="row downloads__button d-flex justify-content-center">
            <button
              class="submit"
              className="downloads_submit form-control"
              style={{ alignSelf: "center" }}
              onClick={this.handleSubmit}
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

export default central;
