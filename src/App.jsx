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
import Box from './components/Box';
import List from './components/List';
import React from "react";
import { BrowserRouter, RouterProvider } from 'react-router-dom';
import ListPage from './components/ListPage';
import DetailPage from './components/DetailPage';
import {useState} from 'react';
import NotFound from './components/NotFound';
function App() {
  const [products, setProducts] = useState([
    { name: "pr1", text: "pr text" },
    { name: "pr2", text: "pr text" },
    { name: "pr3", text: "pr text" },
  ]);
  const router = BrowserRouter([
    { path: "/", element: <ListPage products={products} /> },
    {
      path: "/detail/:product.id",
      element: <DetailPage products={products} />
    },
    {
      path: "*",
      element: <NotFound />
    }
  ])
  const name = 'Anna'
  const liElements = [1, 2, 3, 4, 5, 6, 7]
  const renderItem = (item, index) => {
    const style = { color: index % 2 === 0 ? 'blue' : 'red' };
    return (
      <div style={style}>
        {item} - Уникальный стиль
      </div>
    );
  };

  return (
    <div className="App">
      <RouterProvider router={router} />
      <h1>Изучаем React!</h1>
      <List listItems={liElements} renderItem={renderItem} />
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
        {/* <div>
        <Box>
          <p>This is the first item.</p>
        </Box>
        <Box>
          <p>This is the second item.</p>
        </Box>
        <Box>
          <p>This is the third item.</p>
        </Box>
        <Box>
          <img src={img} />
        </Box>
      </div>
    </div> */}

      </div>
    </div>
  );

}

export default App;



