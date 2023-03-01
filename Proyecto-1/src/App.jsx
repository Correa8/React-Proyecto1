import Frases from "../src/components/Frases/Frases";
import React, { useState } from "react";
import frameworks from "/src/assets/data.json";

import "./App.css";

function App() {
  const arrayImages = ["img1", "img2", "img3", "img4", "img5", "img6", "img7", "img8", "img9", "img10", "img11", "img12","img13","img14" ];
  const [background, randomFondo] = useState("");

  console.log(arrayImages.length);

  const [phrase, changePhrase] = useState(
    frameworks[Math.floor(Math.random() * frameworks.length)]
  );

  function randomPhrase() {
    const numeroRandom = [Math.floor(Math.random() * arrayImages.length)];
    changePhrase(frameworks[Math.floor(Math.random() * frameworks.length)]);
    randomFondo(arrayImages[numeroRandom]);
  }

  return (
    <section className="all">
    <div className={`App ${background}`} >
      <h1>Galleticas uwu</h1>

      <Frases randomPhrase={randomPhrase} phrase={phrase} />
    </div>
    </section>
  );
}

export default App;
