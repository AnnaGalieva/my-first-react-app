// Создать компонент TodoList, который позволяет добавлять элементы в список дел через текстовое поле ввода. Список должен обновляться при добавлении нового дела.
import { useState } from "react";

export default function TodoList() {
    const [inputText, setinputText] = useState("");
    const [arr, setArr] = useState(["Prod 1", "Prod 2"]);

    function clickHandler() {
        if (!inputText.trim()) {
            return;
        }
        setArr([...arr, inputText]);
        setinputText("");
    }

    return (
        <>
            <label htmlFor="input">Введите текст: </label>
            <input
                onChange={(event) => setinputText(event.target.value)}
                type="text"
                id="input"
                maxLength={10}
            ></input>
            <button onClick={clickHandler}>Click to add</button>
            <ul>
                {arr.map((item) => (
                    <p key={arr.indexOf(item)}>{item}</p>
                ))}
            </ul>
        </>
    );
}