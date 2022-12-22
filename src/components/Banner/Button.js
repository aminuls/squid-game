import React from "react";
import "./Button.css";

const Button = ({ children }) => {
   return (
      <div id="button-container">
         <div>
            <button id="button" className="position-absolute p-3 border-0 text-light fw-semibold pointer">
               {children}
            </button>
         </div>
         {/* <div className="position-relative border border-2" style={{ height: "72px", maxWidth: "222px" }}>
            <button
               id="button"
               className="position-absolute p-3 border-0 text-light fw-semibold pointer"
               style={{ backgroundImage: "linear-gradient(135deg, #FFBC30, #FA3E64)", inset: "6px 6px 6px 6px", cursor: "pointer", transform: "scale(1.06, 1.22)" }}
            >
               {children}
            </button>
         </div> */}
      </div>
   );
};

export default Button;
