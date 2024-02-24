import logo from './logo.svg';
import './App.css';

import CurrentTime from './components/CurrentTime';
import EventCard from './components/EventCard';
import Counter from './components/Counter';
import TextInput from './components/TextInput';
import TodoList from './components/TodoList';
import Timer from './components/Timer';
import Greeting from './components/Gretting';
import Counter2 from './components/Counter2';
import MessagesList from './components/MessagesList';
import TextDisplayForm from './components/TextDisplayForm';
function App() {
  const name = 'Anna'
  return (
    <div className="App">
      <TextDisplayForm />
      {/* <MessagesList /> */}
      <Counter2 />
      <Greeting name={name} />
      <Greeting />
      <h1>text</h1>
      <p>texting</p>
      <Counter />

      <CurrentTime />
      <TextInput />
      <TodoList />
      <Timer />

      <div>  <EventCard title="Концерт группы Крутая группа'" date="22 октября 2024, 19:00" location="Москва, Крокус Сити Холл" />
        <EventCard title="Выставка 'Мир Динозавров'" date="5 ноября 2024, 10:00" location="Санкт-Петербург, Экспофорум" />
        <EventCard title="Фестиваль еды 'Вкусная осень'" date="12 ноября 2024, 12:00" location="Нижний Новгород, Парк культуры и отдыха" /></div>


    </div>
  );
}

export default App;
