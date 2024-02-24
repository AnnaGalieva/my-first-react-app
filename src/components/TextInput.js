// компонент содержит текстовое поле ввода и отображает введенный текст под ним в реальном времени
import { useState } from "react";

export default function TextInput() {
    const [inputText, setinputText] = useState(null);

    return (
        <>
            <label htmlFor="input">Введите текст: </label>
            <input
                onChange={(event) => setinputText(event.target.value)}
                type="text"
                id="input"
                maxLength={10}
            ></input>
            {!inputText && <p>Пока ничего не введено</p>}
            {inputText && <p>{inputText}</p>}
        </>
    );
}

// import { useEffect, useState } from "react";

// function TextInput() {
// const [txt, setTxt] = useState();

// const getTxt = ({target}) => {
// setTxt(target.value);
// };

// return (
// <div>
// <input type="text" value={txt} onChange={getTxt} maxLength="10"/>
// <p>Вы ввели: {txt}</p>
// </div>
// );
// }

// export default TextInput;