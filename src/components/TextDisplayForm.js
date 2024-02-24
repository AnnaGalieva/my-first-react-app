// Создать React компонент TextDisplayForm, который позволяет пользователю ввести текст в поле ввода и отобразить его на экране в стилизованном виде по нажатию кнопки.
// Создание поля ввода (TextField)
// Добавить TextField для ввода текста пользователем.
// Установить метку (label) поля ввода на "Введите текст".
// Сделать поле ввода на всю ширину (fullWidth).
// Разместить кнопку под полем ввода.
// Установить текст кнопки на "Отобразить текст".
// При нажатии на кнопку введенный текст должен отображаться под кнопкой.
// Отображение введенного текста
// Использовать состояние для хранения введенного и отображаемого текста.
// При нажатии на кнопку текст из поля ввода должен отображаться в стилизованной карточке (Card) под кнопкой.
// Стилизация отображаемого текста
// Для отображения текста использовать компонент Typography с вариантом h5.

import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';

function TextDisplayForm() {
    const [text, setText] = useState("");
    const [printedText, setPrintedText] = useState("");

    const handleText = (event) => {
        event.preventDefault();
        setPrintedText(text);
        setText("");
    };

    return (
        <div>
            <TextField
                label="Введите текст"
                variant="outlined"
                fullWidth
                value={text}
                onChange={(e) => setText(e.target.value)}
                margin="normal"
            />
            <Button
                variant="contained"
                color="primary"
                onClick={handleText}
                style={{ marginBottom: 20 }}
            >
                Отобразить текст
            </Button>
            <h4>{printedText}</h4>
        </div>
    );
}

export default TextDisplayForm;