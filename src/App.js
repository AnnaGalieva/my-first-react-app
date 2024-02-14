import logo from './logo.svg';
import './App.css';
import Greeting from './components/Greeting';
import CurrentTime from './components/CurrentTime';
import EventCard from './components/EventCard';
function App() {
  return (
    <div className="App">
      <h1>text</h1>
      <p>texting</p>

      <Greeting />
      <CurrentTime />
      <div>  <EventCard title="Концерт группы Крутая группа'" date="22 октября 2024, 19:00" location="Москва, Крокус Сити Холл" />
        <EventCard title="Выставка 'Мир Динозавров'" date="5 ноября 2024, 10:00" location="Санкт-Петербург, Экспофорум" />
        <EventCard title="Фестиваль еды 'Вкусная осень'" date="12 ноября 2024, 12:00" location="Нижний Новгород, Парк культуры и отдыха" /></div>

    </div>
  );
}

export default App;
