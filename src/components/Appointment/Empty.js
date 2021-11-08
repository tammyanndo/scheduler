import React from "react";

export default function Empty({ onAdd }) {
  // display when there are no appointment during this time

  return (
    <main className="appointment__add">
      <img
        className="appointment__add-button"
        src="images/add.png"
        alt="Add"
        onClick={onAdd}
      />
    </main>
  )
}