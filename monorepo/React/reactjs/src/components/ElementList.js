import React from "react";
import img from "../assets/images/crows.jpg";
import "../assets/style/elementList.css";
const STATIC_DATA = [
  {
    id: "1",
    img: img,
    title: "Anti Wrinkle Treatment",
    icon: ">",
  },
  {
    id: "2",
    img: img,
    title: "Anti Wrinkle Treatment",
    icon: ">",
  },
  {
    id: "3",
    img: img,
    title: "Anti Wrinkle Treatment",
    icon: ">",
  },
  {
    id: "4",
    img: img,
    title: "Anti Wrinkle Treatment",
    icon: ">",
  },
];

const ElementList = () => {
  return (
    <ul>
      {STATIC_DATA.map((item) => {
        return (
          <li key={item.id}>
            <div>
              <img src={item.img} alt="img"></img>
              <p>{item.title}</p>
            </div>
            <p> {item.icon} </p>
          </li>
        );
      })}
    </ul>
  );
};
export default ElementList;
