import React from "react";
import Button from 'components/Button'

export default function Confirm({message, onConfirm, onCancel}) {
  // Before deleting, confirmation required before API request
  // Once confirmed (user clicks on "confirm"), then will update mode to "deleting", 
  // and then update mode to "empty"

  return <main className="appointment__card appointment__card--confirm">
  <h1 className="text--semi-bold">{message}</h1>
  <section className="appointment__actions">
    <Button danger onClick={onCancel}>Cancel</Button>
    <Button danger onClick={onConfirm}>Confirm</Button>
  </section>
</main>
}