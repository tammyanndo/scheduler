export function getAppointmentsForDay(state, day) {

  const foundDay = state.days.find((dayObj) => dayObj.name === day)

  if (!foundDay) {
    return []
  }
  return (
    foundDay.appointments.map(id => state.appointments[id])
  )
}

export function getInterview(state, interview) {
  if (!interview) {
    return null;
  }
  const interviewerId = interview.interviewer
  const interviewerData = {
    student: interview.student,
    interviewer: state.interviewers[interviewerId]
  }
  return interviewerData
}

export function getInterviewersForDay(state, day) {
  const foundDay = state.days.find((dayObj) => dayObj.name === day)
  if (!foundDay) {
    return []
  }
  return (
    foundDay.interviewers.map(id => state.interviewers[id])
  );
}