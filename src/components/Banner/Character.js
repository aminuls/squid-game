import React from "react";
import Button from "./Button";
import guard1 from "../../assets/guard1.png";
import guard2 from "../../assets/guard2.png";
import guard3 from "../../assets/guard3.png";
import guard4 from "../../assets/guard4.png";
import border from "../../assets/border.png";

const Character = () => {
   const title = {
      fontFamily: "'Bebas Neue', cursive",
   };
   return (
      <div className="container my-5 py-3">
         <div className="row gx-5 gx-lg-3 ">
            <div className="col-12 col-md-5">
               <div className="card h-100 bg-transparent border-0 mb-5 mb-md-0 d-flex">
                  {/* check padding below */}
                  <div className="card-body text-md-start d-md-flex flex-column justify-content-center">
                     <h1 className="card-title text-uppercase display-3 mb-3" style={title}>
                        Top <span style={{ color: "#FFBC30" }}>character</span> squid <span style={{ color: "#FA3E64" }}>game</span>
                     </h1>
                     <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum laoreet, augue ac fringilla dapibus, felis tellus euismod quam, sit amet malesuada.</p>
                     <Button>View More</Button>
                  </div>
               </div>
            </div>
            <div className="col-12 col-md-7">
               <div className="card h-100 bg-transparent border-0">
                  <div className="card-body d-flex gap-2 gap-md-4 justify-content-center align-items-center justify-content-md-end">
                     <div className="d-flex flex-column gap-2 gap-md-4">
                        <div className="p-3 pb-1 rounded-5" style={{ backgroundImage: `linear-gradient(152.42deg, rgba(112, 0, 255, 0.16) -7.23%, rgba(255, 255, 255, 0) 98.05%),url(${border})`, backdropFilter: "blur(10px)" }}>
                           <img src={guard1} style={{ width: "calc(7rem + 6.5vw)" }} alt="" />
                           <div className="text-start mt-2 ps-1">
                              <h5 className="mb-1">Front Man Guard 1</h5>
                              <div className="d-flex align-items-baseline fw-semibold">
                                 <p
                                    style={{
                                       background: "linear-gradient(99.33deg, #FFBC30 -23.53%, #FA3E64 105.59%)",
                                       WebkitBackgroundClip: "text",
                                       WebkitTextFillColor: "transparent",
                                       backgroundClip: "text",
                                       textFillColor: "transparent",
                                    }}
                                 >
                                    View Details
                                 </p>
                                 <div>
                                    <svg width="26" height="26" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path
                                          fillRule="evenodd"
                                          clipRule="evenodd"
                                          d="M12.884 14.7724L12.8858 15.1855C12.9 16.824 12.9988 18.286 13.1691 19.2124C13.1691 19.2291 13.3549 20.148 13.4733 20.4538C13.6591 20.8959 13.9951 21.2712 14.4164 21.5089C14.7536 21.6785 15.1075 21.7646 15.4778 21.7646C15.769 21.7512 16.2491 21.6047 16.5918 21.4818L16.8765 21.3727C18.7627 20.6235 22.3683 18.1753 23.7492 16.6782L23.851 16.5735L24.3054 16.0832C24.5917 15.7079 24.7432 15.2491 24.7432 14.7557C24.7432 14.3136 24.6083 13.8715 24.3384 13.5142C24.2577 13.3985 24.1276 13.25 24.0117 13.1245L23.5695 12.6616C22.0476 11.1197 18.7525 8.95678 17.0445 8.24014C17.0445 8.22472 15.9831 7.78135 15.4778 7.76465H15.4104C14.6353 7.76465 13.9111 8.20673 13.5408 8.92125C13.4396 9.11659 13.3425 9.49923 13.2687 9.83528L13.136 10.4698C12.9846 11.4902 12.884 13.0555 12.884 14.7724ZM5.49696 12.9932C4.52843 12.9932 3.74316 13.7862 3.74316 14.7641C3.74316 15.7421 4.52843 16.535 5.49696 16.535L9.81273 16.1533C10.5725 16.1533 11.1885 15.5326 11.1885 14.7641C11.1885 13.9969 10.5725 13.3749 9.81273 13.3749L5.49696 12.9932Z"
                                          fill="#FA3E64"
                                       />
                                    </svg>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="px-3">
                           <img src={guard3} style={{ width: "calc(7rem + 6.5vw)" }} alt="" />
                           <div className="text-start mt-1 ps-1">
                              <h5 className="mb-1">Front Man Guard 3</h5>
                              <div className="d-flex align-items-baseline">
                                 <p>View Details</p>
                                 <div>
                                    <svg width="26" height="26" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path
                                          fillRule="evenodd"
                                          clipRule="evenodd"
                                          d="M12.884 14.7724L12.8858 15.1855C12.9 16.824 12.9988 18.286 13.1691 19.2124C13.1691 19.2291 13.3549 20.148 13.4733 20.4538C13.6591 20.8959 13.9951 21.2712 14.4164 21.5089C14.7536 21.6785 15.1075 21.7646 15.4778 21.7646C15.769 21.7512 16.2491 21.6047 16.5918 21.4818L16.8765 21.3727C18.7627 20.6235 22.3683 18.1753 23.7492 16.6782L23.851 16.5735L24.3054 16.0832C24.5917 15.7079 24.7432 15.2491 24.7432 14.7557C24.7432 14.3136 24.6083 13.8715 24.3384 13.5142C24.2577 13.3985 24.1276 13.25 24.0117 13.1245L23.5695 12.6616C22.0476 11.1197 18.7525 8.95678 17.0445 8.24014C17.0445 8.22472 15.9831 7.78135 15.4778 7.76465H15.4104C14.6353 7.76465 13.9111 8.20673 13.5408 8.92125C13.4396 9.11659 13.3425 9.49923 13.2687 9.83528L13.136 10.4698C12.9846 11.4902 12.884 13.0555 12.884 14.7724ZM5.49696 12.9932C4.52843 12.9932 3.74316 13.7862 3.74316 14.7641C3.74316 15.7421 4.52843 16.535 5.49696 16.535L9.81273 16.1533C10.5725 16.1533 11.1885 15.5326 11.1885 14.7641C11.1885 13.9969 10.5725 13.3749 9.81273 13.3749L5.49696 12.9932Z"
                                          fill="white"
                                       />
                                    </svg>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="d-flex flex-column gap-2 gap-md-4 position-relative" style={{ top: "-50px" }}>
                        <div>
                           <img src={guard2} style={{ width: "calc(7rem + 6.5vw)" }} alt="" />
                           <div className="text-start mt-2 ps-1">
                              <h5 className="mb-1">Front Man Guard 2</h5>
                              <div className="d-flex align-items-baseline">
                                 <p>View Details</p>
                                 <div>
                                    <svg width="26" height="26" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path
                                          fillRule="evenodd"
                                          clipRule="evenodd"
                                          d="M12.884 14.7724L12.8858 15.1855C12.9 16.824 12.9988 18.286 13.1691 19.2124C13.1691 19.2291 13.3549 20.148 13.4733 20.4538C13.6591 20.8959 13.9951 21.2712 14.4164 21.5089C14.7536 21.6785 15.1075 21.7646 15.4778 21.7646C15.769 21.7512 16.2491 21.6047 16.5918 21.4818L16.8765 21.3727C18.7627 20.6235 22.3683 18.1753 23.7492 16.6782L23.851 16.5735L24.3054 16.0832C24.5917 15.7079 24.7432 15.2491 24.7432 14.7557C24.7432 14.3136 24.6083 13.8715 24.3384 13.5142C24.2577 13.3985 24.1276 13.25 24.0117 13.1245L23.5695 12.6616C22.0476 11.1197 18.7525 8.95678 17.0445 8.24014C17.0445 8.22472 15.9831 7.78135 15.4778 7.76465H15.4104C14.6353 7.76465 13.9111 8.20673 13.5408 8.92125C13.4396 9.11659 13.3425 9.49923 13.2687 9.83528L13.136 10.4698C12.9846 11.4902 12.884 13.0555 12.884 14.7724ZM5.49696 12.9932C4.52843 12.9932 3.74316 13.7862 3.74316 14.7641C3.74316 15.7421 4.52843 16.535 5.49696 16.535L9.81273 16.1533C10.5725 16.1533 11.1885 15.5326 11.1885 14.7641C11.1885 13.9969 10.5725 13.3749 9.81273 13.3749L5.49696 12.9932Z"
                                          fill="white"
                                       />
                                    </svg>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div>
                           <img src={guard4} style={{ width: "calc(7rem + 6.5vw)" }} alt="" />
                           <div className="text-start mt-2 ps-1">
                              <h5 className="mb-1">Doll Guard</h5>
                              <div className="d-flex align-items-baseline">
                                 <p>View Details</p>
                                 <div>
                                    <svg width="26" height="26" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path
                                          fillRule="evenodd"
                                          clipRule="evenodd"
                                          d="M12.884 14.7724L12.8858 15.1855C12.9 16.824 12.9988 18.286 13.1691 19.2124C13.1691 19.2291 13.3549 20.148 13.4733 20.4538C13.6591 20.8959 13.9951 21.2712 14.4164 21.5089C14.7536 21.6785 15.1075 21.7646 15.4778 21.7646C15.769 21.7512 16.2491 21.6047 16.5918 21.4818L16.8765 21.3727C18.7627 20.6235 22.3683 18.1753 23.7492 16.6782L23.851 16.5735L24.3054 16.0832C24.5917 15.7079 24.7432 15.2491 24.7432 14.7557C24.7432 14.3136 24.6083 13.8715 24.3384 13.5142C24.2577 13.3985 24.1276 13.25 24.0117 13.1245L23.5695 12.6616C22.0476 11.1197 18.7525 8.95678 17.0445 8.24014C17.0445 8.22472 15.9831 7.78135 15.4778 7.76465H15.4104C14.6353 7.76465 13.9111 8.20673 13.5408 8.92125C13.4396 9.11659 13.3425 9.49923 13.2687 9.83528L13.136 10.4698C12.9846 11.4902 12.884 13.0555 12.884 14.7724ZM5.49696 12.9932C4.52843 12.9932 3.74316 13.7862 3.74316 14.7641C3.74316 15.7421 4.52843 16.535 5.49696 16.535L9.81273 16.1533C10.5725 16.1533 11.1885 15.5326 11.1885 14.7641C11.1885 13.9969 10.5725 13.3749 9.81273 13.3749L5.49696 12.9932Z"
                                          fill="white"
                                       />
                                    </svg>
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

export default Character;
