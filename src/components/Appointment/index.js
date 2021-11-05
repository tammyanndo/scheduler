import React from "react";
import "./styles.scss";
import Header from "./Header"
import Show from "./Show";
import Empty from "./Empty";
import Form from "./Form";
import useVisualMode from "hooks/useVisualMode";
import Status from "./Status";
import Confirm from "./Confirm";
import Error from "./Error";

const EMPTY = "EMPTY"
const SHOW = "SHOW"
const CREATE = "CREATE"
const SAVING = "SAVING"
const DELETING = "DELETING"
const CONFIRM = "CONFIRM"
const EDIT = "EDIT"
const ERROR_SAVE = "ERROR_SAVE"
const ERROR_DELETE = "ERROR_DELETE"

export default function Appointment({ id, time, interview, interviewers, bookInterview, cancelInterview }) {

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
      .catch(() => {
        transition(ERROR_SAVE, true)
      })
  }

  function cancel() {
    const interview = null

    transition(DELETING)

    cancelInterview(id)
    .then(() => {
      transition(EMPTY)
    })
    .catch(() => {
      transition(ERROR_DELETE, true)
    })

  }


  
  return (
    <article className="appointment">
      <Header time={time} />
      {mode === SHOW && <Show student={interview.student} interviewer={interview.interviewer.name} onEdit={() => transition(EDIT)} onDelete={() => transition(CONFIRM)}/>}
      {/* interviewer comes from state (when useEffect is called, state changes from initial state to have all of the api data) */}
      {/* interviewer id from interview can now be used to access interviewer data  */}
      {/* whatever is in <Show /> becomes available to be used in show.js */}
      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
      {mode === CREATE && <Form interviewers={interviewers} onSave={save} onCancel={back} />}
      {mode === SAVING && <Status message={ "SAVING" } />}
      {mode === CONFIRM && <Confirm message={'Are you sure you want to delete?'} onCancel={back} onConfirm={cancel} />}
      {mode === DELETING && <Status message={"DELETING"} />}
      {mode === EDIT && <Form studentName={interview.student} interviewerId={interview.interviewer.id} interviewers={interviewers} onSave={save} onCancel={back} />}
      {mode === ERROR_DELETE && <Error onClose={back} message="Could not delete interview" />}
      {mode === ERROR_SAVE && <Error onClose={back} message="Could not save interview" />}
    </article>

  )
}
