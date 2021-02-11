import React from "react";
import { Link } from "react-router-dom";


class homepage extends React.Component {

        
  render() {
    return (
        <div>
    <Link to="/branchNews" className="HomePage__link">
        Branch News
      </Link>
      <br></br>
      <Link to="/centralNews" className="HomePage__link">
      Central News
      </Link>
      <br></br>

      <Link to="/downloadsNews" className="HomePage__link">
        Downloads News
      </Link>
      </div>
      


    )
  }
}

    
export default homepage;