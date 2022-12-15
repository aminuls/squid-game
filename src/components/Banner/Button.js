import React from "react";

const Button = ({ children }) => {
   return (
      <div className="position-relative border border-2" style={{ height: "72px", left: "40px", maxWidth: "180px" }}>
         <button className="position-absolute p-3 border-0 text-light fw-semibold pointer" style={{ backgroundImage: "linear-gradient(135deg, #FFBC30, #FA3E64)", inset: "6px 6px 6px -40px", cursor: "pointer" }}>
            {children}
         </button>
      </div>
   );
};

export default Button;
