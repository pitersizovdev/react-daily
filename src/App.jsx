import "./App.css";
import CardButton from "./components/CardButton/CardButton";
import Header from "./components/Header/Header";
import JournalAddButton from './components/JournalAddButton/JournalAddButton';
import JournalList from "./components/JournalList/JournalList";
import JournalItem from "./components/JurnalItem/JournalItem";
import Body from "./layout/Body/Body";
import LeftPanel from "./layout/LeftPanel/LeftPanel";

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
    <div className="app">
      <LeftPanel>
        <Header />
        <JournalAddButton/>
        <JournalList>
          <CardButton>
            <JournalItem
              title={data[0].title}
              text={data[0].text}
              date={data[0].date}
            />
          </CardButton>
          <CardButton>
            <JournalItem
              title={data[1].title}
              text={data[1].text}
              date={data[1].date}
            />
          </CardButton>
        </JournalList>
      </LeftPanel>
      <Body>Body</Body>
    </div>
  );
}

export default App;
