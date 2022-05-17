import React from "react";
import data from "./IllusData";
import { Link, useParams } from "react-router-dom";
import Image from "../components/Image";
const SingleIllu = () => {
  const { id } = useParams();
  const index: number = data.findIndex((x) => x.id === id);
  const { title, details, des } = data[index];

  return (
    <div className="container">
      <div className="part">
        <article>
          <div className="article-title">
            <p className="title">{title}</p>
            <Link to="/works" className="button">
              Back
            </Link>
          </div>
          <p className="des">{des}</p>
          {details.map((x) => {
            return (
              <div className="piece" key={x.id}>
                <Image src={x.img} alt="img" />
                <p>{x.text}</p>
              </div>
            );
          })}
        </article>
      </div>
    </div>
  );
};

export default SingleIllu;
