import { React, useState } from "react";
import "./journalForm.css";
import Button from "../Button/Button";

const JournalForm = ({ onSubmit }) => {
  const [formValidState, setformValidState] = useState({
    title: true,
    post: true,
    date: true,
  });

  const addJournalItem = (e) => {
    const formData = new FormData(e.target);
    const formProps = Object.fromEntries(formData);
    e.preventDefault();
    let isFormValid = true;
    if (!formProps.title?.trim().length) {
      setformValidState((state) => ({ ...state, title: false }));
      isFormValid = false;
    } else {
      setformValidState((state) => ({ ...state, title: true }));
    }
    if (!formProps.post?.trim().length) {
      setformValidState((state) => ({ ...state, post: false }));
      isFormValid = false;
    } else {
      setformValidState((state) => ({ ...state, post: true }));
    }
    if (!formProps.date) {
      setformValidState((state) => ({ ...state, date: false }));
      isFormValid = false;
    } else {
      setformValidState((state) => ({ ...state, date: true }));
    }
    if (!isFormValid) {
      return;
    }

    onSubmit(formProps);
  };
  return (
    <form className="journal-form" onSubmit={addJournalItem}>
      <input
        type="text"
        name="title"
        className={`input ${formValidState.title ? "" : "invalid"}`}
      ></input>
      <input
        type="date"
        name="date"
        className={`input ${formValidState.date ? "" : "invalid"}`}
      ></input>
      <input type="text" name="tag"></input>
      <textarea
        name="post"
        className={`input ${formValidState.post ? "" : "invalid"}`}
      ></textarea>
      <Button text="Save" />
    </form>
  );
};

export default JournalForm;
