import { React, useState } from "react";
import "./journalForm.css";
import Button from "../Button/Button";

const JournalForm = ({ onSubmit }) => {
  const addJournalItem = (e) => {
    const formData = new FormData(e.target);
    const formProps = Object.fromEntries(formData);
    e.preventDefault();
    onSubmit(formProps);
  };
  return (
    <form className="journal-form" onSubmit={addJournalItem}>
      <input type="text" name="title"></input>
      <input type="date" name="date"></input>
      <input type="text" name="tag"></input>
      <textarea name="text"></textarea>
      <Button text="Save" />
    </form>
  );
};

export default JournalForm;
