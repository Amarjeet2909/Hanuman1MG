import React from "react";
import { callRequest } from "../../assets";
import "./Layout.css";
const NavbarCards = (props) => {
  return (
    <div className="cards common-border d-flex gap-3 px-3 p-2">
      <div className="d-flex justify-content-center align-items-center gap-2">
        <div className="icon-background">
          <img className="icon" src={props.item.icon}></img>
        </div>
        <div className="">
          <h4 className="call-type mb-0">{props.item.title}</h4>
          {/* <p className="price" style={{ opacity: 1 }}>
            +{props.item.share}%
          </p> */}
        </div>
      </div>
      <h3 className="number">{props.item.value}</h3>
    </div>
  );
};
export default NavbarCards;
