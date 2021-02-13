import React from "react";
import "./central.css";
import DragDrop from "../DragDrop/DragDrop";
import menu from "../Images/hamburger.png";

class central extends React.Component {

        
  render() {
    return (
        <div className="container">
        <div className="central__sec">
        <button className ="central__hamburger"><img src={menu} className="central__menu align-items-start"></img></button>
        <div className="form__main row">
        <div className="central__col1 col-md-6 col-12">
              
            <div className="central__upload mt-5">
            <DragDrop/>
            </div>
           
            <div className="central__text1 mt-4">
            The 1st selected image shall be your Thumbnail &amp; rest shall be posted inside. You can choose an Image of any aspect ratio eg, 1:1, 4:3, 16:9
            </div>
         
            <div className="central__date mt-4">
            <input type="date" className="Central_input form-control" placeholder="DD/MM/YYYY" style={{"color":"#858585"}}/>
            </div>
          
            <div className="central__text2 mt-4">
            <div className="Central_text">Select date only when required. Not selecting it, this form shall automatically shall take the input time of submission.</div>
            </div>
        </div>
          

    
    <div className="central__col2 col-md-6 col-12">
    <form>
        <div className="central__head">
            Entries
        </div>
        <div className="central__title">
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
      
        <div className="central__body">
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
      
        <div className="central__selectAuthor">
           <input
               className="Admin_central_authorI"
                name="selectAuthor"
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
                name="selectState"
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
                name="selectDistrict"
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
                name="impLinks"
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

export default central;
