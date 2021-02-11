import React from "react";
import Dropzone from "react-dropzone";
//import DragDrop from "../DragDrop/DragDrop";
import "./branch.css";
import {sendBranchNews} from '../ApiHandling/forBranchNews';
import img from '../Images/img.svg'

class branch extends React.Component {
  constructor(){
    super();
    this.state = {
      title:"",
      subtitle:"",
      description:"",
      date:"",
      details:"",
      author:"",
      state:"",
      branch:"",
      district:"",
      trending:"",
      files:[],
    
    }
     this.handleChange = this.handleChange.bind(this);
     this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleDrop = (incoming) =>{
    console.log(incoming)
    let tempFiles = this.state.files;
    tempFiles.push(...incoming)
    this.setState({
      files : tempFiles
    })
  }

  handleChange(e) {
    this.setState({ 
      [e.target.name]: e.target.value });
  }

  handleSubmit(e){
    e.preventDefault();
    // var formData = new FormData(e.target);
    const data = new FormData();
    console.log(this.state)
    data.append("title",this.state.title)
    data.append("description",this.state.description)
    data.append("date",this.state.date)
    data.append("details",this.state.details)
    data.append("author",this.state.author)
    data.append("state",this.state.state)
    data.append("branch",this.state.branch)
    data.append("district",this.state.district)
    //let tempImages = []
    // tempImages.push(this.state.files)
    // this.state.files.map((file,index)=>{
    //   tempImages.push('image',file,file.name)
    // }
    // )
    data.append('image', this.state.files[0], this.state.files[0].name);
    console.log(data.get('image'));
    sendBranchNews(data)
      .then((response) => { console.log(response) })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
        <div className="container">
        <div className="branch__sec">
        <div className="form__main row align-items-end">
            <div className="branch__col1 col-md-6 col-12">

              <div className="branch__upload mt-5">
                {/* <input className="Branch_upload" type="file"/> */}
                {/* <DragDrop /> */}
                <Dropzone onDrop={this.handleDrop}>
                  {({ getRootProps, getInputProps }) => (
                    <div {...getRootProps({ className: "dropzone" })}>
                      <input {...getInputProps()} />
                      <p className="Admin_text">Drag'n'drop files, or click to select files</p>
                      <p className="Admin_text1"><img src={img} className="Admin_arrow"></img>Extra Uploads</p>
                    </div>
                  )}
                </Dropzone>
              </div>

              <div className="branch__text1 mt-4">
                The 1st selected image shall be your Thumbnail &amp; rest shall be posted inside. You can choose an Image of any aspect ratio eg, 1:1, 4:3, 16:9
            </div>

              <div className="branch__date mt-4">
                <input type="date" name="date" id="date" className="Branch_input form-control" onChange={this.handleChange} placeholder="DD/MM/YYYY" style={{ "color": "#858585" }} />
              </div>
              <div className="branch__text2 mt-4">
                <div className="Branch_text">Select date only when required. Not selecting it, this form shall automatically shall take the input time of submission.</div>
              </div>
              <div className="branch__impLinks mt-4">
                <input type="text" name="details" id="details" onChange={this.handleChange} className="Branch_input form-control" placeholder="Important Links" />
              </div>
            </div>
          

        <div className="branch__col2 col-md-6 col-12">
        <form>
        <div className="branch__head">
            Entries
        </div>
        <div className="branch__title">
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
        <div className="branch__body">
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
        <div className="branch__mentionAuthor">
        <input
                className="Admin_branch_authorI"
                name="author"
                id="author"
                onChange={this.handleChange}
                type="text"
                class="form-control "
                placeholder="Mention Author"
                required
              />
              {/* <span className="Form__span">Mention Author</span> */}

        </div>
        <div className="branch__selectState">
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
        <div className="branch__selectDistrict">
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
        <div className="branch__selectBranch">
        <input
                name="branch"
                id="branch"
                onChange={this.handleChange}
                type="text"
                class="form-control "
                placeholder="Select Branch"
                required
              />
              {/* <span className="Form__span">Select Branch</span> */}
              </div>
        </form>
    </div>
    </div>

    <div className="row downloads__button d-flex justify-content-center">
            <button
              class="button"
              type="submit"
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

export default branch;


// image : [{
//   type : String
// }],
// title : {
//   type : String, 
//   required : true
// },
// subtitle : {
//   type : String
// },
// description : {
//   type : String
// },
// date : {
//   type :String
// },
// details : {
//   type : String
// },
// author : {
//   type :String
// },
// state : {
//   type : String
// },
// branch : {
//   type : String
// },
// district : {
//   type : String
// },
// trending : {
//   type : Number,
//   default : 0
// }