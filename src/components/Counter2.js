// отображает число и 2 кнопки: ода для увеличения значения на 1, а другая уменьшения на 1.
// Используйте хук USE STATE
import { useState } from "react";
import Button from '@mui/material/Button';

function Counter2() {
    const [count, setCount] = useState(0);

    const upCount = () => {
        setCount(count + 1)
    }

    const downCount = () => {
        if (count === 0)
            return;
        setCount(count - 1)
    }

    return (
        <div>
            <Button onClick={downCount} variant="contained">-1</Button>
            <div>{count}</div>
            <Button onClick={upCount} variant="contained">+1</Button>
        </div>
    );
}

export default Counter2;