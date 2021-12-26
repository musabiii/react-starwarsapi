import { useState, useEffect } from "react";
import ServiceAPI from "../../service/api";
import ListItem from "../listItem/listItem";
import "./list.css";

export default function List({ list, handleItem, activeListItem }) {
  const res = list.map((el, index) => {
    return (
      <ListItem
        activeListItem={activeListItem}
        id={index + 1}
        title={(el.title || el.name)}
        reff={el.url}
        handleItem={handleItem}
      />
    );
  });

  return (
    <div className="list">
      <ul>{res}</ul>
    </div>
  );
}
