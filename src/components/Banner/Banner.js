import React from "react";
import dot from "../../assets/dot.png";
import plate from "../../assets/plate.png";
import player from "../../assets/player.png";
import shadow from "../../assets/shadow.png";
import Button from "./Button";
import playerOne from "../../assets/mini-player1.png";
import playerTwo from "../../assets/mini-player2.png";
import playerPlate from "../../assets/player-plate.png";

const Banner = () => {
   /* const bg = {
      backgroundImage: `url(${player}), url(${shadow}), url(${dot}) ,url(${plate})`,
      backgroundPosition: "78% 32%, 100% 0%, 86% 30% , 100% 66.5%",
      // backgroundPosition: "52% 55%, 100% 0%, 86% 30% , 100% 66.5%",
      backgroundSize: "23.5vmax, 70vmax, 30vmax , 93vmax",
      backgroundRepeat: "no-repeat",
      backgroundAttachment: "local",
      top: "-80px",
      backgroundBlendMode: "normal, overlay, normal, normal",
   }; */
   const bg = {
      backgroundImage: `url(${shadow}), url(${dot}), url(${playerPlate})`,
      backgroundPosition: "100% 20%, 80% 30%, 100% 40%",
      backgroundSize: "60vmax, 30vmax , 73vmax",
      backgroundRepeat: "no-repeat",
      backgroundAttachment: "local",
      top: "-80px",
      backgroundBlendMode: "overlay, overlay, normal",
   };
   const horizontal = {
      display: "block",
      position: "relative",
      backgroundColor: "white",
      width: "60px",
      height: "2px",
      top: "-4px",
   };
   const title = {
      fontFamily: "'Bebas Neue', cursive",
   };
   return (
      <div className="position-relative text-dark" style={bg}>
         <div className="container">
            <div className="row">
               <div className="col-12 col-sm-8 col-lg-6">
                  <div className="card bg-transparent h-100 border-0 mt-5 pt-5">
                     <div data-aos="fade-right" className="card-body text-start text-white">
                        <div className="d-flex align-items-baseline gap-1">
                           <h5 className="card-title mt-2">Squid Cards</h5>
                           <span style={horizontal}></span>
                        </div>
                        <div>
                           <h1 className="display-1 text-uppercase" style={title}>
                              Collect Your <span style={{ color: "#FFBC30" }}>Strongest</span> And Rarest <span style={{ color: "#FA3E64" }}>Squid Game</span>
                           </h1>
                           <Button>Catch My Collections</Button>
                        </div>
                        <div>
                           <div>
                              <h5 className="card-title mt-5">Guard Of Squid</h5>
                              <div className="d-flex gap-3 mt-3 pt-3">
                                 <div className="bg-light rounded-4 d-flex justify-content-center" style={{ height: "calc(29vmin)", width: "calc(27vmin)", background: "linear-gradient(134.25deg, #7D3FBB -6.11%, #FF006B 113.46%)" }}>
                                    <img className="position-relative" style={{ height: "110%", top: "-10%" }} src={playerOne} alt="" />
                                 </div>
                                 <div className="bg-light rounded-4 d-flex justify-content-center" style={{ height: "calc(29vmin)", width: "calc(27vmin)", background: "linear-gradient(99.33deg, #FFBC30 -23.53%, #FA3E64 105.59%)" }}>
                                    <img className="position-relative" style={{ height: "110%", top: "-10%" }} src={playerTwo} alt="" />
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Banner;
