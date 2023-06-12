import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../assets/style/elementList.css";

const ElementList = ({ items, handleSelectedItem }) => {
  return (
    <ul>
      {items.map((item) => {
        return (
          <li key={item.id} onClick={handleSelectedItem(item)}>
            <div>
              <img src={item.img} alt="img"></img>
              <p>{item.title}</p>
            </div>
            <FontAwesomeIcon icon={item.icon} />
          </li>
        );
      })}
    </ul>
  );
};
export default ElementList;
