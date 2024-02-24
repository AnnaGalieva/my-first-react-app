// Создайте компонент MessagesList, который отображает список сообщений. Каждое сообщение должно иметь уникальный id и текст.
// Используйте проп key при рендеринге списка, чтобы обеспечить оптимальную производительность.
import { messages } from "./data";
import Message from "./Message";

export default function MessagesList() {
    return (
        <>
            {messages.map((message) => (
                <Message key={message.id} {...message} />
            ))}
        </>
    );
}

// import { messages } from "../data";
// import Message from "./Message";
// import { PropTypes } from "prop-types";

// export default function MessagesList({ themeColor }) {
// return (
// <>
// {messages.map((message) => (
// <Message themeColor={themeColor} key={message.id} {...message} />
// ))}
// </>
// );
// }

// MessagesList.propTypes = {
// themeColor: PropTypes.string,
// };

