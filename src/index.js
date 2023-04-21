import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

//  {
//    /* <div className={`accordion__item ${openaccordion === 3 ? "open" : ""}`}>
//           <div
//             className="accordion__header"
//             onClick={() => handleaccordionClick(3)}
//           >
//             <p className="accordion__number">04</p>
//             <p className="accordion__name">Different Types of Clouds</p>
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="accordion__icon"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M19 9l-7 7-7-7"
//               />
//             </svg>
//           </div>
//           <div className="accordion__details" ref={accordionRef}>
//             <ul>
//               <li>
//                 Cumulus clouds are puffy, white clouds that resemble cotton
//                 balls and are often associated with fair weather.
//               </li>
//               <li>
//                 Cirrus clouds are thin and wispy and are often found at high
//                 altitudes. They are made up of ice crystals and are often
//                 associated with fair weather.
//               </li>
//               <li>
//                 Stratus clouds are low-lying clouds that are often associated
//                 with overcast or rainy weather.
//               </li>
//             </ul>
//           </div>
//         </div> */
//  }

// const accordionRefs = useRef([]);
// useEffect(() => {
//   accordionRefs.current.forEach((accordionRef, index) => {
//     const accordionDetails = accordionRef.querySelector(".accordion__details");
//     const height = accordionDetails.clientHeight;
//     gsap.set(accordionDetails, { height: 0 });
//     if (openaccordion === index) {
//       gsap.to(accordionDetails, { height: height, duration: 0.5 });
//     }
//   });
// }, [openaccordion]);

// import { useRef, useState } from "react";
// import "./App.css";
// import { gsap } from "gsap";
// function App() {
//   const [openaccordion, setOpenaccordion] = useState(null);
//   const accordionRefs = useRef([]);

//   const handleaccordionClick = (index) => {
//     if (index === openaccordion) {
//       gsap.to(accordionRefs.current[index].querySelector(".accordion__details"), {
//         height: 0,
//         duration: 1,
//         ease: "power1.inOut",
//         onComplete: () => setOpenaccordion(null),
//       });
//     } else {
//       if (openaccordion !== null) {
//         gsap.to(
//           accordionRefs.current[openaccordion].querySelector(
//             ".accordion__details"
//           ),
//           {
//             height: 0,
//             duration: 1,
//             ease: "power1.inOut",
//           }
//         );
//       }
//       setOpenaccordion(index);
//       gsap.fromTo(
//         accordionRefs.current[index].querySelector(".accordion__details"),
//         { height: 0 },
//         {
//           height: "auto",
//           duration: 1,
//           ease: "power1.inOut",
//         }
//       );
//     }
//   };

//   return (
//     <div className="App">
//       <div className="accordion__container">
//         <div
//           className={`accordion__item  ${openaccordion === 0 ? "open" : ""}`}
//           ref={(el) => (accordionRefs.current[0] = el)}
//         >
//           <div
//             className="accordion__header"
//             onClick={() => handleaccordionClick(0)}
//           >
//             <p className="accordion__number">01</p>
//             <p className="accordion__name">The World's Tallest Building</p>
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="accordion__icon"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M19 9l-7 7-7-7"
//               />
//             </svg>
//           </div>

//           <div
//             className="accordion__details"
//             ref={(el) => (accordionRefs.current[0] = el)}
//           >
//             <ul>
//               <li>
//                 The current tallest building in the world is the Burj Khalifa,
//                 located in Dubai, United Arab Emirates.
//               </li>
//               <li>
//                 It stands at a height of 828 meters (2,716 feet) tall and has
//                 163 floors.
//               </li>
//               <li>
//                 The building took six years to construct and was completed in
//                 2010.
//               </li>
//             </ul>
//           </div>
//         </div>

//         <div
//           className={`accordion__item ${openaccordion === 1 ? "open" : ""}`}
//           ref={(el) => (accordionRefs.current[1] = el)}
//         >
//           <div
//             className="accordion__header"
//             onClick={() => handleaccordionClick(1)}
//           >
//             <p className="accordion__number">02</p>
//             <p className="accordion__name">
//               Famous Inventors and Their Inventions
//             </p>
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="accordion__icon"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M19 9l-7 7-7-7"
//               />
//             </svg>
//           </div>
//           <div
//             className="accordion__details"
//             ref={(el) => (accordionRefs.current[1] = el)}
//           >
//             <ul>
//               <li>
//                 Nikola Tesla, a Serbian-American inventor, is credited with the
//                 invention of the AC (alternating current) electrical system.
//               </li>
//               <li>
//                 Thomas Edison, an American inventor, is credited with the
//                 invention of the light bulb.
//               </li>
//               <li>
//                 Alexander Graham Bell, a Scottish-born American inventor, is
//                 credited with the invention of the telephone.
//               </li>
//             </ul>
//           </div>
//         </div>
//         <div
//           className={`accordion__item ${openaccordion === 2 ? "open" : ""}`}
//           ref={(el) => (accordionRefs.current[2] = el)}
//         >
//           <div
//             className="accordion__header"
//             onClick={() => handleaccordionClick(2)}
//           >
//             <p className="accordion__number">03</p>
//             <p className="accordion__name">Largest Deserts in the World</p>
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="accordion__icon"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M19 9l-7 7-7-7"
//               />
//             </svg>
//           </div>
//           <div
//             className="accordion__details"
//             ref={(el) => (accordionRefs.current[2] = el)}
//           >
//             <ul>
//               <li>
//                 The Sahara Desert, located in Africa, is the largest hot desert
//                 in the world and covers an area of 9.2 million square kilometers
//                 (3.6 million square miles).
//               </li>
//               <li>
//                 The Antarctic Desert, located in Antarctica, is the largest cold
//                 desert in the world and covers an area of 14 million square
//                 kilometers (5.4 million square miles).
//               </li>
//               <li>
//                 The Arabian Desert, located in the Middle East, is the
//                 third-largest desert in the world and covers an area of 2.33
//                 million square kilometers (900,000 square miles).
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;
