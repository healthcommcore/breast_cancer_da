import React from "react";
import logo from "../../images/logo.png";
import logo2x from "../../images/logo@2x.png";
import dfci from "../../images/dfci_logo_new.png";

const Banner = (props) => {
  return (
    <div className="banner">
      <div className="container full-width-print full-max-width-print">
        <div className="row">
          <div className="col-md-3">
            <a href="/">
              <img className="img-fluid" alt="Young and Strong logo" src={ logo } srcSet={ logo2x } retina_logo_url={ logo2x } />
            </a>
          </div>
          <div className="col-md-3 offset-md-6">
            <a target="_blank" rel="noopener noreferrer" href="https://www.dana-farber.org">
              <img className="img-fluid" alt="Dana-Farber Cancer Institute logo" src={ dfci } />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
      
