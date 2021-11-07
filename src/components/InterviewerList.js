import React from "react";
import "./InterviewerList.scss";
import InterviewerListItem from "./InterviewerListItem";
import PropTypes from 'prop-types';

export default function InterviewerList({interviewers, interviewer, onChange}) {

  const parsedInterviewers = interviewers.map(interviewerPerson => 
    <InterviewerListItem
    key={interviewerPerson.id}
    name={interviewerPerson.name}
    avatar={interviewerPerson.avatar}
    selected={interviewerPerson.id === interviewer}
    setInterviewer={() => onChange(interviewerPerson.id)}
    /> )

    InterviewerList.propTypes = {
      interviewers: PropTypes.array.isRequired
    };

  return (
    <>
      <section className="interviewers">
        <h4 className="interviewers__header text--light">Interviewer</h4>
        <ul className="interviewers__list">{parsedInterviewers}</ul>
      </section>
    </>

  )
}