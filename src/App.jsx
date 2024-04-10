import { useState } from "react";
import "./App.css";
import CardButton from "./components/CardButton/CardButton";
import Header from "./components/Header/Header";
import JournalAddButton from "./components/JournalAddButton/JournalAddButton";
import JournalList from "./components/JournalList/JournalList";
import JournalItem from "./components/JurnalItem/JournalItem";
import Body from "./layout/Body/Body";
import LeftPanel from "./layout/LeftPanel/LeftPanel";
import JournalForm from "./components/JournalForm/JournalForm";

const INITIAL_DATA = [
  {
    title: "Задача первая",
    text: "Текст первой задачи расположен здесь",
    date: new Date(),
  },
  {
    title: "Задача вторая",
    text: "Текст второй задачи расположен здесь",
    date: new Date(),
  },
];

function App() {
  const [items, setItems] = useState(INITIAL_DATA);
  const addItem = (item) => {
    setItems((oldItems) => [
      ...oldItems,
      {
        text: item.text,
        title: item.title,
        date: new Date(item.date),
      },
    ]);
  };

  return (
    <div className="app">
      <LeftPanel>
        <Header />
        <JournalAddButton />
        <JournalList>
          {items.map((el) => (
            <CardButton>
              <JournalItem title={el.title} text={el.text} date={el.date} />
            </CardButton>
          ))}
        </JournalList>
      </LeftPanel>
      <Body>
        <JournalForm onSubmit={addItem} />
      </Body>
    </div>
  );
}

export default App;
