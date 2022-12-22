import React from "react";
import road from "../../assets/road.png";
import roadGroup from "../../assets/read-group.png";
import attacker from "../../assets/Mask Group 1.png";
import defense from "../../assets/Mask Group 2.png";
import shooter from "../../assets/Mask Group 3.png";
import teamLeader from "../../assets/Mask Group 4.png";
import survivor from "../../assets/Mask Group 5.png";

const Squad = () => {
   const squadTitle = {
      fontFamily: "'Bebas Neue', cursive",
   };
   return (
      <div className="mt-5 py-5">
         <h1 data-aos="fade-down" className="display-3 text-uppercase" style={squadTitle}>
            Do or <span style={{ color: "#FFBC30" }}>die squid</span> game <br /> team <span style={{ color: "#FA3E64" }}>rules</span>
         </h1>
         <div data-aos="fade-in" className="mt-5 position-relative">
            <div>
               <img src={roadGroup} className="w-100" alt="road" />
            </div>
            {/* <div>
               <img src={road} className="w-100" alt="road" />
            </div>
            <div className="position-relative" style={{ top: "-23vmax" }}>
               <div className="position-absolute d-flex flex-column align-items-center" style={{ width: "calc(4rem + 7vw)" }}>
                  <p>Attacker</p>
                  <div className="rounded-circle outline-warning position-relative" style={{ backgroundColor: "#FFBC30", height: "calc(2.5rem + 4vw)", width: "calc(2.5rem + 4vw)", outline: "2px solid #FFBC30", outlineOffset: "7px" }}>
                     <img src={attacker} className="w-100" alt="" />
                  </div>
                  <div className="position-relative" style={{ height: "calc(2rem + 2vw)", width: "2px", backgroundColor: "#FFBC30", top: "7px" }}></div>
                  <div className="position-relative rounded-circle" style={{ height: "12px", width: "12px", backgroundColor: "#FFBC30" }}></div>
               </div>
            </div>
            <div className="position-relative" style={{ top: "calc(40vmin - 33vw - 15vh)", left: "calc(35% - 2rem)" }}>
               <div className="position-absolute d-flex flex-column align-items-center" style={{ width: "calc(4rem + 7vw)" }}>
                  <div className="position-relative rounded-circle" style={{ height: "12px", width: "12px", backgroundColor: "#3045FF" }}></div>
                  <div className="position-relative" style={{ height: "calc(2rem + 2vw)", width: "2px", backgroundColor: "#3045FF", top: "-7px" }}></div>
                  <div className="rounded-circle outline-warning position-relative" style={{ backgroundColor: "#3045FF", height: "calc(2.5rem + 4vw)", width: "calc(2.5rem + 4vw)", outline: "2px solid #3045FF", outlineOffset: "7px" }}>
                     <img src={defense} className="w-100" alt="" />
                  </div>
                  <p className="mt-3">Defense</p>
               </div>
            </div>

            <div className="position-relative" style={{ top: "calc(37vmin - 49vw - 15vh)", left: "calc(49.5% - 2rem)" }}>
               <div className="position-absolute d-flex flex-column align-items-center" style={{ width: "calc(4rem + 7vw)" }}>
                  <div className="position-relative rounded-circle" style={{ height: "12px", width: "12px", backgroundColor: "#03CC6B" }}></div>
                  <div className="position-relative" style={{ height: "calc(1rem + 3vw)", width: "2px", backgroundColor: "#03CC6B", top: "-7px" }}></div>
                  <div className="rounded-circle outline-warning position-relative" style={{ backgroundColor: "#03CC6B", height: "calc(0.5rem + 5vw)", width: "calc(0.5rem + 5vw)", outline: "2px solid #03CC6B", outlineOffset: "5px" }}>
                     <img src={shooter} className="w-100" alt="" />
                  </div>
                  <p className="mt-2 pt-1" style={{ fontSize: "calc(0.5rem + 0.6vw)" }}>
                     Shooter
                  </p>
               </div>
            </div>
            <div className="position-relative" style={{ top: "calc(40vmin - 24vw - 21.5vh)", left: "calc(67% - 2rem)" }}>
               <div className="position-absolute d-flex flex-column align-items-center" style={{ width: "calc(4rem + 7vw)" }}>
                  <p style={{ fontSize: "calc(0.5rem + 0.6vw)" }}>Team Leader</p>
                  <div className="rounded-circle outline-warning position-relative" style={{ backgroundColor: "#FA3E64", height: "calc(0.5rem + 5vw)", width: "calc(0.5rem + 5vw)", outline: "2px solid #FA3E64", outlineOffset: "5px" }}>
                     <img src={teamLeader} className="w-100" alt="" />
                  </div>
                  <div className="position-relative" style={{ height: "calc(1rem + 3vw)", width: "2px", backgroundColor: "#FA3E64", top: "7px" }}></div>
                  <div className="position-relative rounded-circle" style={{ height: "12px", width: "12px", backgroundColor: "#FA3E64" }}></div>
               </div>
            </div>
            <div className="position-relative" style={{ top: "calc(40vmin - 45vw - 28vh)", left: "calc(89% - 3rem)" }}>
               <div className="position-absolute d-flex flex-column align-items-center" style={{ width: "calc(4rem + 7vw)" }}>
                  <p>Survivor</p>
                  <div className="rounded-circle outline-warning position-relative" style={{ backgroundColor: "#E230FF", height: "calc(2.5rem + 4vw)", width: "calc(2.5rem + 4vw)", outline: "2px solid #E230FF", outlineOffset: "7px" }}>
                     <img src={survivor} className="w-100" alt="" />
                  </div>
                  <div className="position-relative" style={{ height: "calc(1.5rem + 2vw)", width: "2px", backgroundColor: "#E230FF", top: "7px" }}></div>
                  <div className="position-relative rounded-circle" style={{ height: "12px", width: "12px", backgroundColor: "#E230FF" }}></div>
               </div>
            </div> */}
         </div>
      </div>
   );
};

export default Squad;
