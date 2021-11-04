import React from "react";
import "./styles.scss";
import Header from "./Header"
import Show from "./Show";
import Empty from "./Empty";
import Form from "./Form";
import useVisualMode from "hooks/useVisualMode";
import Status from "./Status";

const EMPTY = "EMPTY"
const SHOW = "SHOW"
const CREATE = "CREATE"
const SAVING = "SAVING"

export default function Appointment({ id, time, interview, interviewers, bookInterview }) {

  const { mode, transition, back } = useVisualMode(
    interview ? SHOW : EMPTY
  );

  function save(name, interviewer) {
    const newInterview = {
      student: name,
      interviewer
    };

    transition(SAVING)

    bookInterview(id, newInterview)
      .then(() => {
        transition(SHOW)
      })
  }

  function cancel() {

  }


  /* {mode === EDIT && <Form studentName= interviewerId= interviewers= onSave= onCancel= />} */

  return (
    <article className="appointment">
      <Header time={time} />
      {mode === SHOW && <Show student={interview.student} interviewer={interview.interviewer.name} />}
      {/* interviewer comes from state (when useEffect is called, state changes from initial state to have all of the api data) */}
      {/* interviewer id from interview can now be used to access interviewer data  */}
      {/* whatever is in <Show /> becomes available to be used in show.js */}
      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
      {mode === CREATE && <Form interviewers={interviewers} onSave={save} onCancel={back} />}
      {mode === SAVING && <Status message={ "SAVING" } />}
      {mode === DELETING && <Empty onAdd={() => transition(CREATE)} />}
      {/* // interviewers will be set as an empty array later on, will need to change it
      // right now, there are 3 props (id, time, interview); later one, will add interviewers, to be passed into Form */}

    </article>

  )
}
