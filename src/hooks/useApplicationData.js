import { useState, useEffect } from "react";
import axios from "axios";

export default function useApplicationData() {

  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {}
  });

  useEffect(() => {
    Promise.all([
      axios.get("/api/days"),
      axios.get("/api/appointments"),
      axios.get("/api/interviewers")
    ]).then((all) => {

      setState(prev => ({ ...prev, days: all[0].data, appointments: all[1].data, interviewers: all[2].data }))
    })
  }, [])

  const setDay = day => setState({ ...state, day });
  
  function formatSpots(id, newState) {
    console.log("newState:", newState);
    const foundDay = newState.days.find(day => day.appointments.includes(id))
    let counter = 0
    for (const elementId of foundDay.appointments) {
      if (newState.appointments[elementId].interview === null) {
        counter++
      }
    }
    const newDay = {...foundDay, spots: counter}
    const index = newState.days.findIndex(day => foundDay.id === day.id)
    newState.days[index] = newDay
    setState(newState);
  }

  function bookInterview(id, interview) {
    
    const appointment = 
    {...state.appointments[id], interview: { ...interview }};

    const appointments = {...state.appointments, [id]: appointment};

    return axios.put(`/api/appointments/${id}`, {interview})
    .then(() => {
      const newState = {...state, appointments: appointments}
      formatSpots(id, newState)
    })
  }

  function cancelInterview(id) {
    const appointment =
    {...state.appointments[id], interview: null};

    const appointments = {...state.appointments, [id]: appointment};

    return axios.delete(`api/appointments/${id}`)
    .then(() => {
      const newState = {...state, appointments: appointments}
      formatSpots(id, newState)
    })
  }
  return {state, setDay, bookInterview, cancelInterview}
}
