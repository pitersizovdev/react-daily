import "./App.css";
import Button from "./components/Button/Button";
import JournalItem from "./components/JurnalItem/JournalItem";

function App() {
  const data = [
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
  return (
    <>
      <Button />
      <JournalItem
        title={data[0].title}
        text={data[0].text}
        date={data[0].date}
      />
      <JournalItem
        title={data[1].title}
        text={data[1].text}
        date={data[1].date}
      />
    </>
  );
}

export default App;
