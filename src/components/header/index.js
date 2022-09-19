import React, { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

const Header = ({hide, setHide}) => {
  return (
    <header>
      <div className="first">
        <div className="story">
          <span className="edyoda">EDYODA</span>
          <p className="stories">Stories</p>
        </div>

        <DropDownParent hide={hide} setHide={setHide} />
      </div>

      <div className="second">
        <div className="text">
          <span>
            Edyoda is free learning and knowledgeable sharing platform for
            techies
          </span>
        </div>

        <div class="site">
          <button>
            <span>Go To Main Website</span>
          </button>
        </div>
      </div>
    </header>
  );
};
export default Header;

const DropDownParent = ({hide, setHide}) => {
 
  return (
    <div
      className={`${"explore"} ${hide && "hide"}`}
      onClick={(e) => {
        setHide(!hide);
        
      }}
    >
      <span className="explore-categories" >Explore Categories </span>
      <MdKeyboardArrowDown className="arrow" />
      <DropDown result={hide} />
    </div>
  );
};

const DropDown = (props) => {
  return (
    <>
      {!props.result && (
        <div className="dropdown">
          <p>Artificial Intellegence</p>
          <p>Cloud Computing</p>
          <p>DevOps</p>
          <p>Programming Languages</p>
          <p>Mobile Application Development</p>
          <p>Technology and Tools</p>
          <p>Get a Job in a Tech Company Others</p>
        </div>
      )}
    </>
  );
};
