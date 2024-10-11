import React from "react";
import "./Home.css";
import cyc from "../assets/cyc.jpeg";
import watch from "../assets/watch.jpeg";
import iphone from "../assets/iphone.jpeg";
import max from "../assets/max.jpg";
import shoes from "../assets/shoes.jpeg";
import bbb from "../assets/bbb.jpg";

export default function Home() {
  return (
    <div className="homes">
     
      <div id="slideshow">
        <div className="slide-wrapper">
          <div className="slide">
            <img src={bbb} alt="buggy" />
          </div>
          <div className="slide">
            <img src={cyc} alt="Cycle" />
          </div>
          <div className="slide">
            <img src={watch} alt="Watch" />
          </div>
          <div className="slide">
            <img src={iphone} alt="iPhone" />
          </div>
          <div className="slide">
            <img src={max} alt="Max" />
          </div>
          <div className="slide">
            <img src={shoes} alt="Shoes" />
          </div>
        </div>
      </div>
    </div>
  );
}
