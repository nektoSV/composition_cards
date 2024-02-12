import React from "react";
import PropTypes from "prop-types";
import { CardTitle, CardText, UrlImage, Button } from "../Atoms/CardContent"
import Card from "./Card";
const USID = require("usid");
const usid = new USID();

export default function CardsList({ cards }) {

  return (
    <ul className="cards-list">
      {cards.map((elem) => {
      
        return (
          <li className={"list-item"} key={usid.rand()}>
            <UrlImage url={elem.url} />
            <Card data={elem}>
              <CardTitle title={elem.title} />
              <CardText text={elem.text} />
              <Button url={elem.url} text="Go somewhere" />
            </Card>
          </li>
        );
      })}
    </ul>
  );
}

CardsList.propTypes = {
 cards:PropTypes.array.isRequired
};