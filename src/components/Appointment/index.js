import React from "react";
import "./styles.scss";
import Header from "./Header"
import Show from "./Show";
import Empty from "./Empty";

export default function Appointment( {id, time, interview} ) {

  const displayAppointment = () => {
    return !interview ? <Empty/> : <Show student={interview.student} interviewer={interview.interviewer.name} />
  }

  return (
    <article className="appointment">
      <Header time={time}/>
      {displayAppointment()}
    </article>

  )
}
