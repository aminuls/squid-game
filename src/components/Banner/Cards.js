import React from "react";
import "./Cards.css";
import miniOne from "../../assets/1.png";
import miniTwo from "../../assets/2.png";
import miniThree from "../../assets/3.png";

const Cards = () => {
   const cardTilte = {
      fontFamily: "'Bebas Neue', cursive",
      zIndex: 1000,
   };
   const miniImage = {
      width: "calc(7rem + 3vw)",
   };
   return (
      <div className="container my-5 pb-5 pt-4">
         <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 justify-content-center g-4">
            <div data-aos="flip-right" className="col">
               <div className="card h-100 bg-transparent border-0 overflow-hidden rounded-5 gradient-container">
                  <div className="card-body py-5">
                     <div className="my-2">
                        <div
                           className="position-absolute bg-light top-0 start-0 rounded-circle gradient-self"
                           style={{ width: "calc(30rem + 12vw)", height: "calc(30rem + 12vw)", transform: "translate(-50%, -50%)", zIndex: -1, opacity: "0.1" }}
                        ></div>
                        <div className="position-absolute bg-light top-0 start-0 rounded-circle gradient-self" style={{ width: "calc(22rem + 9vw)", height: "calc(22rem + 9vw)", transform: "translate(-50%, -50%)", zIndex: -1, opacity: "0.1" }}></div>
                        <div className="position-absolute bg-light top-0 start-0 rounded-circle gradient-self" style={{ width: "calc(14rem + 6vw)", height: "calc(14rem + 6vw)", transform: "translate(-50%, -50%)", zIndex: -1, opacity: "0.1" }}></div>
                        <img style={miniImage} src={miniOne} className="card-img-top mb-4 pb-2" alt="mini-two" />
                        <h1 className="card-title text-uppercase" style={cardTilte}>
                           CREATE COMMUNITIES
                        </h1>
                        <p className="card-text px-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque in velit</p>
                     </div>
                  </div>
               </div>
            </div>
            <div data-aos="fade-up" className="col">
               <div className="card h-100 bg-transparent border-0 overflow-hidden rounded-5 gradient-container">
                  <div className="card-body py-5">
                     <div className="my-2">
                        <div
                           className="position-absolute bg-light top-0 start-0 rounded-circle gradient-self"
                           style={{ width: "calc(30rem + 12vw)", height: "calc(30rem + 12vw)", transform: "translate(-50%, -50%)", zIndex: -1, opacity: "0.1" }}
                        ></div>
                        <div className="position-absolute bg-light top-0 start-0 rounded-circle gradient-self" style={{ width: "calc(22rem + 9vw)", height: "calc(22rem + 9vw)", transform: "translate(-50%, -50%)", zIndex: -1, opacity: "0.1" }}></div>
                        <div className="position-absolute bg-light top-0 start-0 rounded-circle gradient-self" style={{ width: "calc(14rem + 6vw)", height: "calc(14rem + 6vw)", transform: "translate(-50%, -50%)", zIndex: -1, opacity: "0.1" }}></div>
                        <img style={miniImage} src={miniTwo} className="card-img-top mb-4 pb-2" alt="mini-two" />
                        <h1 className="card-title text-uppercase" style={cardTilte}>
                           GAME STUDIOS
                        </h1>
                        <p className="card-text px-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque in velit</p>
                     </div>
                  </div>
               </div>
            </div>
            <div data-aos="flip-left" className="col">
               <div className="card h-100 bg-transparent border-0 overflow-hidden rounded-5 gradient-container">
                  <div className="card-body py-5">
                     <div className="my-2">
                        <div
                           className="position-absolute bg-light top-0 start-0 rounded-circle gradient-self"
                           style={{ width: "calc(30rem + 12vw)", height: "calc(30rem + 12vw)", transform: "translate(-50%, -50%)", zIndex: -1, opacity: "0.1" }}
                        ></div>
                        <div className="position-absolute bg-light top-0 start-0 rounded-circle gradient-self" style={{ width: "calc(22rem + 9vw)", height: "calc(22rem + 9vw)", transform: "translate(-50%, -50%)", zIndex: -1, opacity: "0.1" }}></div>
                        <div className="position-absolute bg-light top-0 start-0 rounded-circle gradient-self" style={{ width: "calc(14rem + 6vw)", height: "calc(14rem + 6vw)", transform: "translate(-50%, -50%)", zIndex: -1, opacity: "0.1" }}></div>
                        <img style={miniImage} src={miniThree} className="card-img-top mb-4 pb-2" alt="mini-two" />
                        <h1 className="card-title text-uppercase" style={cardTilte}>
                           FOR TEAMS
                        </h1>
                        <p className="card-text px-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque in velit</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Cards;
