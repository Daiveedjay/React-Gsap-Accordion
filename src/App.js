import { useRef, useState } from "react";
import "./App.css";
import { gsap } from "gsap";
function App() {
  const [openAccordion, setOpenAccordion] = useState(null);
  const accordionRefs = useRef([]);

  const handleAccordionClick = (index) => {
    if (index === openAccordion) {
      gsap.to(
        accordionRefs.current[index].querySelector(".accordion__details"),
        {
          height: 0,
          duration: 1,
          ease: "power1.inOut",
          onComplete: () => setOpenAccordion(null),
        }
      );
      console.log(openAccordion);
    } else {
      if (openAccordion !== null) {
        gsap.to(
          accordionRefs.current[openAccordion].querySelector(
            ".accordion__details"
          ),
          {
            height: 0,
            duration: 1,
            ease: "power1.inOut",
          }
        );
      }
      setOpenAccordion(index);
      gsap.fromTo(
        accordionRefs.current[index].querySelector(".accordion__details"),
        { height: 0 },
        {
          height: "auto",
          duration: 1,
          ease: "power1.inOut",
        }
      );
    }
  };
  // TODO - MID

  return (
    <div className="App">
      <div className="accordion__container">
        <div
          className={`accordion__item  ${openAccordion === 0 ? "open" : ""}`}
          ref={(el) => (accordionRefs.current[0] = el)}
        >
          <div
            className="accordion__header"
            onClick={() => handleAccordionClick(0)}
          >
            <p className="accordion__number">01</p>
            <p className="accordion__name">The World's Tallest Building</p>
          </div>

          <div className="accordion__details">
            <ul>
              <li>
                The current tallest building in the world is the Burj Khalifa,
                located in Dubai, United Arab Emirates.
              </li>
              <li>
                It stands at a height of 828 meters (2,716 feet) tall and has
                163 floors.
              </li>
              <li>
                The building took six years to construct and was completed in
                2010.
              </li>
            </ul>
          </div>
        </div>

        <div
          className={`accordion__item ${openAccordion === 1 ? "open" : ""}`}
          ref={(el) => (accordionRefs.current[1] = el)}
        >
          <div
            className="accordion__header"
            onClick={() => handleAccordionClick(1)}
          >
            <p className="accordion__number">02</p>
            <p className="accordion__name">
              Famous Inventors and Their Inventions
            </p>
          </div>
          <div className="accordion__details">
            <ul>
              <li>
                Nikola Tesla, a Serbian-American inventor, is credited with the
                invention of the AC (alternating current) electrical system.
              </li>
              <li>
                Thomas Edison, an American inventor, is credited with the
                invention of the light bulb.
              </li>
              <li>
                Alexander Graham Bell, a Scottish-born American inventor, is
                credited with the invention of the telephone.
              </li>
            </ul>
          </div>
        </div>
        <div
          className={`accordion__item ${openAccordion === 2 ? "open" : ""}`}
          ref={(el) => (accordionRefs.current[2] = el)}
        >
          <div
            className="accordion__header"
            onClick={() => handleAccordionClick(2)}
          >
            <p className="accordion__number">03</p>
            <p className="accordion__name">Largest Deserts in the World</p>
          </div>
          <div className="accordion__details">
            <ul>
              <li>
                The Sahara Desert, located in Africa, is the largest hot desert
                in the world and covers an area of 9.2 million square kilometers
                (3.6 million square miles).
              </li>
              <li>
                The Antarctic Desert, located in Antarctica, is the largest cold
                desert in the world and covers an area of 14 million square
                kilometers (5.4 million square miles).
              </li>
              <li>
                The Arabian Desert, located in the Middle East, is the
                third-largest desert in the world and covers an area of 2.33
                million square kilometers (900,000 square miles).
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
