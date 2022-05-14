import React from "react";
import Items from "./LogoData";

import { Link } from "react-router-dom";
const Logos = () => {
  return (
    <div className="part">
      <h1 className="part-title">Brand Logos</h1>
      <div className=" rows-3">
        {Items.map((i) => {
          return (
            <div className="card" key={i.id}>
              <img src={i.banner} alt="" />

              <p className="card-title">{i.title}</p>
              <p className="card-des">{i.des.substring(0, 80) + "..."}</p>
              <p>
                <Link to={`/logos/${i.id}`} key={i.id} className="card-button">
                  Details
                </Link>
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Logos;
