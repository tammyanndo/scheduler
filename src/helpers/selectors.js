export function getAppointmentsForDay(state, day) {

  const foundDay = state.days.find((dayObj) => dayObj.name === day)

  if (!foundDay) {
    return []
  }

  return (
    foundDay.appointments.map(id => state.appointments[id])
  )

}

