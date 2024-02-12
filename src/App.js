import "./App.css";
import "./main.css";
import "./components/Section/card.css"
import React from "react";
import CardsList from "./components/Section/CardsList";

import data from "../src/db/cardData";

export default function App() {
  return (
    <div className="container">
      <CardsList cards={data}></CardsList>
    </div>
  );
}
