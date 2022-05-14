import Items from "./IllusData";
import { Link } from "react-router-dom";
const pagename = "illustrations/"
const Illustration = () => {
  return (
    <div className="part">
      <h1 className="part-title">illustrations</h1>
      {Items.map((i) => {
        return (
          <div className="row" key={pagename+i.id}>
            <div className="col">
              <p className="title">{i.title}</p>
              <Link to={`/illustrations/${i.id}`} key={i.id} className="button" >Details</Link>
            </div>
            <div className="col">
                <img src={i.banner} alt="" />
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Illustration;
