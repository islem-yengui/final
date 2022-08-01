import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";

const Footer = () => {
  return (
    <section className="section footer bg-dark text-white">
      <div className="container-footer">
        <div className="row">
          <div className="col-md-4">
            <h6> Company Information </h6>
            <hr />
            <p className="text-white">
              {" "}
              CHAMPACA offers, through a very large network of distribution,
              hundreds of different products for satisfy the tastes and needs of
              all its customers.
            </p>
          </div>
          <div className="col-md-4">
            <h6> Quick Links</h6>
            <hr />
            <div className="links">
              <div>
                <Link to="/Home">Home </Link>
              </div>
              <div>
                <Link to="/About">About </Link>
              </div>
              <div>
                <Link to="/Product">Product </Link>
              </div>
              <div>
                <Link to="/Login">Login </Link>
              </div>
              <div>
                <Link to="/Contact">Contact </Link>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <h6>Contact Information </h6>
            <hr />
            <div>
              <p className="text-white mb-1">Route de tunis klm 3 </p>
            </div>
            <div>
              <p className="text-white mb-1">champeca@hotmail.com </p>
            </div>
            <div>
              <p className="text-white mb-1">+216 28252044 </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
