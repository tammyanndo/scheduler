import React from "react";
import "./DayListItem.scss";
import classNames from "classnames";

export default function DayListItem({name, spots, setDay, selected}) {
  // const {name, spots, setDay, selected} = props
  const dayClass = classNames("day-list__item", {
    "day-list__item--selected": selected,
    "day-list__item--full": spots === 0
  });
  const formatSpots = () => {
    return spots === 0 ? "no spots" : spots === 1 ? "1 spot" : `${spots} spots`
  }


  return (
    <li className={dayClass} onClick={() => setDay(name)} selected={selected}>
      <h2 className="text--regular">{name}</h2>
      <h3 className={"text--light"}>{formatSpots(spots)} remaining</h3>
    </li>
  );
}

