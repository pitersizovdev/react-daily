
















import { React, useState, useEffect } from "react";
import "./journalForm.css";
import Button from "../Button/Button";

const INITIAL_STATE = {
  title: true,
  post: true,
  date: true,
};

const JournalForm = ({ onSubmit }) => {
  let timerId;
  const [formValidState, setformValidState] = useState(INITIAL_STATE);
  useEffect(() => {
    if (!formValidState.date || !formValidState.post || !formValidState.title) {
      setTimeout(() => {
        setformValidState(INITIAL_STATE);
      }, 2000);
    }
    return () => {
      clearTimeout(timerId);






















    };
  }, [formValidState]);

  const addJournalItem = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formProps = Object.fromEntries(formData);

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
