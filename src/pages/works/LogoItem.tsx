import React from "react";
import Items from "./LogoData";
import LogoList from "./LogoList";


const Logos = () => {
  return (
    <div className="part">
      <h1 className="part-title">Brand Logos</h1>
      <div className=" rows-3">
        {Items.map((i) => {
          return <LogoList key={i.id} {...i} />;
        })}
      </div>
    </div>
  );
};
export default Logos;
