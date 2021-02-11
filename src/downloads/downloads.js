import React from "react";
import DragDrop from "../DragDrop/DragDrop";
import "./downloads.css";
import { sendDownloadData } from "../ApiHandling/forDownloads";
class branch extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "",
      description: "",
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
          <div className="form__main row ">
            <div className="downloads__col1 col-md-6 col-12">
              <div className="downloads__upload mt-5">
                <DragDrop />
              </div>
            </div>

            <div className="downloads__col2 col-md-6 col-12">
              <form>
                <div className="downloads__head">Entries</div>
                <div className="downloads__title">
                  <textarea
                    name="Title"
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
                    name="Body"
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
              class="button"
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
