import React from "react";
import "./journalItem.css";

const JournalItem = () => {
  const title = "Задача первая";
  const date = new Date();
  const text = "Текст первой задачи расположен здесь";

  return (
    <div className="journal-item">
      <h2 className="journal-item__header">{title}</h2>
      <h2 className="journal-item__body">
        <div className="journal-item__date">{date.toDateString()}</div>
        <div className="journal-text">{text}</div>
      </h2>
    </div>
  );
};

export default JournalItem;
