import React from "react";
import { Link } from "react-router-dom";
// data里有过了，这里还要再说是不是有点浪费。
type Item = {
    id: string;
    title: string;
    des: string;
    banner: string;
    details: any[];
  };
const LogoList = ({ id, title, banner, des}:Item) => {
  return (
    <Link to={`/logos/${id}`} key={id}>
      <div className="card">
        <img src={banner} alt="" />

        <p className="card-title">{title}</p>
        <p className="card-des">{des.substring(0, 80) + "..."}</p>
        <p>
          <span className="card-button">
            Details
          </span>
        </p>
      </div>
    </Link>
  );
};
export default LogoList;
