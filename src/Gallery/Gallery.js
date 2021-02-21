import React from "react";
// import DragDrop from "../DragDrop/DragDrop";
import "./Gallery.css";
import Dropzone from "react-dropzone";
import img from "../Images/img.svg";
import { sendGalleryData } from "../ApiHandling/forGallery";
import menu from "../Images/hamburger.png";

class Gallery extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "",
      description: "",
      files: [],
      names: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleDrop = (incoming) => {
    console.log(incoming);
    let tempFiles = this.state.files;
    tempFiles.push(...incoming);
    let names;
    tempFiles.map((file, index) => {
      names = names + file.name;
    });
    this.setState({
      names: names,
    });
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
    console.log(this.state.files);
    this.state.files.map((file, index) =>
      data.append("myFiles", file, file.name)
    );
    console.log(data.get("myFiles"));
    sendGalleryData(data)
      .then((response) => {
        console.log(response);
        if (response.data.status === "success") {
          alert("Gallery added");
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
        <div className="gallery__sec">
        <button className="gallery__hamburger"><img src={menu} className="gallery__menu align-items-start"></img></button>
          <div className="form__main row ">
            <div className="gallery__col1 col-md-6 col-12">
              <div className="gallery__upload mt-5">
                <Dropzone onDrop={this.handleDrop}>
                  {({ getRootProps, getInputProps }) => (
                    <div {...getRootProps({ className: "gallery__dropzone" })}>
                      <input {...getInputProps()} />
                      <p className="gallery_dragtext">
                        Drag'n'drop files, or click to select files
                      </p>
                      <p className="gallery_dragtext1">
                        <img
                          src={img}
                          className="gallery_arrow"
                          alt="upload arrow"
                        ></img>
                        Extra Uploads
                      </p>
                    </div>
                  )}
                </Dropzone>
                {this.state.names}
              </div>
            </div>

            <div className="gallery__col2 col-md-6 col-12">
              <form>
                <div className="gallery__head">Entries</div>
                <div className="gallery__title">
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
                <div className="gallery__body">
                  <textarea
                    onChange={this.handleChange}
                    class="form-control"
                    placeholder="Body"
                    rows="5"
                    required
                    name="description"
                    id="description"
                  ></textarea>
                  {/* <span className="Form__span">Body</span> */}
                </div>
              </form>
            </div>
          </div>

          <div className="row gallery__button d-flex justify-content-center">
            <button
              type="submit"
              onClick={this.handleSubmit}
              className="gallery_submit form-control"
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

export default Gallery;
