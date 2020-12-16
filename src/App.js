import React, { useState } from "react";
import "./styles.css";

const signDictionary = {
  "!": "exclamation mark",
  "@": "at sign",
  "#": "hash",
  $: "dollar",
  "%": "percent sign",
  "&": "and"
};

var signDatabase = Object.keys(signDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function signInputHandler(event) {
    //console.log(event.target.value);
    var userInput = event.target.value;
    var meaning = signDictionary[userInput];
    if (meaning === undefined) {
      meaning = "Not found in dataBases";
    }
    console.log(meaning);
    setMeaning(meaning);
  }

  function signClickHandler(sign) {
    //console.log(sign);
    var meaning = signDictionary[sign];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1 className="head">KeyBoard Signs</h1>
      <input onChange={signInputHandler}></input>
      <div>Meaning = {meaning}</div>
      <h3> Signs in our Database</h3>
      {signDatabase.map((sign) => {
        return (
          <span
            onClick={() => signClickHandler(sign)}
            style={{ cursor: "Pointer" }}
            key={sign}
          >
            {sign}
          </span>
        );
      })}
    </div>
  );
}
