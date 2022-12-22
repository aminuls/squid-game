import React from "react";
import footerbg from "../../assets/footerbg.png";
import playerGroup from "../../assets/playergroup.png";

const NextGame = () => {
   const nextTitle = {
      fontFamily: "'Bebas Neue', cursive",
   };
   const buttonTitle = {
      fontFamily: "'Bebas Neue', cursive",
      letterSpacing: "2px",
      // fontSize: "calc(0.75em + 1vw)",
      backgroundImage: "linear-gradient(99.33deg, #FFBC30 -23.53%, #FA3E64 105.59%)",
      color: "white",
   };
   return (
      <div className="mt-5 py-5" style={{ backgroundImage: `url(${footerbg})`, backgroundPosition: "100% 20%", backgroundSize: "cover", backgroundRepeat: "no-repeat" }}>
         <h1 data-aos="fade-down" className="display-1 text-uppercase" style={nextTitle}>
            Ready <span style={{ color: "#FFBC30" }}>For</span> The <br /> next <span style={{ color: "#FA3E64" }}>game</span>
         </h1>
         <div className="mt-4 mx-2" style={{ transform: "translate(50%, 0%)" }}>
            <form
               className="d-flex align-items-center rounded-2"
               style={{
                  maxWidth: "600px",
                  transform: "translate(-50%, 0%)",
                  border: "2px solid transparent",
                  backgroundImage: "linear-gradient(#2A0C48, #2A0C48), linear-gradient(99.33deg, #FFBC30 -23.53%, #FA3E64 105.59%)",
                  backgroundOrigin: "border-box",
                  backgroundClip: "content-box, border-box",
               }}
            >
               <div data-aos="zoom-in" className="input-group input-group-lg">
                  <input type="email" className="form-control bg-transparent border-0 text-white shadow-none ps-4" placeholder="Enter your email" aria-label="Enter your email" required />
               </div>
               <button style={buttonTitle} type="submit" className="btn btn-lg rounded-2 m-2">
                  Subscribe
               </button>
            </form>
         </div>
         <div className="container my-5 pt-4">
            <img data-aos="zoom-in" src={playerGroup} alt="player-group" style={{ maxWidth: "80%" }} />
         </div>
      </div>
   );
};

export default NextGame;
