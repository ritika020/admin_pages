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

        <Link to="/downloads" className="HomePage__link">
          Downloads
        </Link>
        <br></br>

        <Link to="/gallery" className="HomePage__link">
          Gallery
        </Link>
      </div>
    );
  }
}

export default homepage;
