import React from "react";
import "./InterviewerList.scss";
import InterviewerListItem from "./InterviewerListItem";

export default function InterviewerList({interviewers, interviewer, onChange}) {

  const parsedInterviewers = interviewers.map(interviewerPerson => 
    <InterviewerListItem
    key={interviewerPerson.id}
    name={interviewerPerson.name}
    avatar={interviewerPerson.avatar}
    selected={interviewerPerson.id === interviewer}
    setInterviewer={() => onChange(interviewerPerson.id)}
    /> )

  return (
    <>
      <section className="interviewers">
        <h4 className="interviewers__header text--light">Interviewer</h4>
        <ul className="interviewers__list">{parsedInterviewers}</ul>
      </section>
    </>

  )
}