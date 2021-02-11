import React from "react";
import DragDrop from "../DragDrop/DragDrop";
import "./branch.css";
import {sendBranchNews} from '../ApiHandling/forBranchNews';

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
      trending:""
    }
     this.handleChange = this.handleChange.bind(this);
     this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ 
      [e.target.name]: e.target.value });
  }

  handleSubmit(e){
    e.preventDefault();
  }

  render() {
    return (
        <div className="container">
        <div className="branch__sec">
        <div className="form__main row align-items-end">
        <div className="branch__col1 col-md-6 col-12">
              
            <div className="branch__upload mt-5">
            {/* <input className="Branch_upload" type="file"/> */}
            <DragDrop/>
            </div>
           
            <div className="branch__text1 mt-4">
            The 1st selected image shall be your Thumbnail &amp; rest shall be posted inside. You can choose an Image of any aspect ratio eg, 1:1, 4:3, 16:9
            </div>
         
          <div className="branch__date mt-4">
          <input type="date" className="Branch_input form-control" placeholder="DD/MM/YYYY" style={{"color":"#858585"}}/>
          </div>
          <div className="branch__text2 mt-4">
          <div className="Branch_text">Select date only when required. Not selecting it, this form shall automatically shall take the input time of submission.</div>
          </div>
          <div className="branch__impLinks mt-4">
          <input type="text" className="Branch_input form-control" placeholder="Important Links"/>
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
                name="Body"
                id=""
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
// Date : {
//   type : Date,
//   default : Date.now
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