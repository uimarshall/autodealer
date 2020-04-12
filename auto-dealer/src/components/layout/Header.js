import React from "react";
import { NavLink, Link } from "react-router-dom";

const Header = () => {
  return (
    <React.Fragment>
      <header className="header" id="header">
        <div className="container-fluid">
          <div className="row height-max align-items-center">
            <div className="col col-md-9 ml-auto text-right pr-5">
              <h5 className="title-heading d-inline-block p-2 text-uppercase">
                the new stuffs
              </h5>
              <h2 className="text-uppercase my-2 title">2020 toyota-camry</h2>
              <h3 className="text-uppercase">model name</h3>
              <h6 className="text-capitalize">starts from</h6>
              <h2>
                $75,000
                <Link className="title-icon d-inline-block mx-2">
                  <i className="fa fa-play"></i>
                </Link>
              </h2>
            </div>
          </div>
        </div>
      </header>
    </React.Fragment>
  );
};

export default Header;
