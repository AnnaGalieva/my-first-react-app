// Создать компонент Timer, который отображает таймер, увеличивающийся на 1 каждую секунду. Использовать useEffect для установки и очистки интервала.
import { useEffect, useState } from "react";

function Timer() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date())
        }, 1000);

        return () => {
            clearInterval(timer)
        }
    }, [])

    return (
        <div>
            <p>Время {time.toLocaleTimeString()}</p>
        </div>
    );
}

export default Timer;



// import { useEffect, useState } from "react";

// function Timer2() {
//     const [time, setTime] = useState(0);

//     useEffect(() => {
//         const timer = setInterval(() => {
//             setTime(prevTime => prevTime + 1)
//         }, 1000);

//         return () => {
//             clearInterval(timer)
//         }
//     }, [])

//     return (
//         <div>
//             <p>Таймер {time}</p>
//         </div>
//     );
// }

// export default Timer2;