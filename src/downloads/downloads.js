import React from "react";
import "./downloads.css";

class branch extends React.Component {

        
  render() {
    return (
        <div className="container">
                <div className="downloads__sec">

        <div className="form__main row ">  
        <div className="downloads__col1 col-md-6 col-12">
            <div className="downloads__upload mt-5">
            <input className="downloads_upload" type="file"/>
            </div>
        </div>
        
      <div className="downloads__col2 col-md-6 col-12">
        <form>
        <div className="downloads__head">
            Entries
        </div>
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
            </div></div>

</div>
        
    );
}
}

export default branch;
