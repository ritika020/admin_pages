import React from "react";
import { Link } from "react-router-dom";


class homepage extends React.Component {

        
  render() {
    return (
        <div>
    <Link to="/branchNews" className="HomePage__link">
        branch News
      </Link>
      <Link to="/centralNews" className="HomePage__link">
      central News
      </Link>
      <Link to="/downloadsNews" className="HomePage__link">
        downloads News
      </Link>
      </div>
      


    )
  }
}

    
export default homepage;