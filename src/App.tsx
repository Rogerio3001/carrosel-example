import "./App.css";

import React/* , { useRef }  */from "react";
import months from "./months";

function App() {
  // const carroselItem = useRef<HTMLDivElement>(null);
  function handleClick(key: number) {
    const element = document.getElementsByClassName("carrosel-item-" + key)[0];
    element.scrollIntoView({
      inline: "center",
      behavior: "smooth",
      block: "center",
    });
    // indo pro fim do scroll
    // carroselItem.current?.scrollIntoView({
    //   inline: "center",
    //   behavior: "smooth"
    // })
  }

  return (
    <div className="App">
      <div className="carrosel-container">
        {months.map((month, index) => {
          return (
            <div
              // ref={carroselItem}
              key={index}
              className={"carrosel-item carrosel-item-" + index}
              onClick={() => handleClick(index)}
            >
              {month}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
