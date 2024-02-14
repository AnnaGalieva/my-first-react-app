{/* <EventCard title="Концерт группы Крутая группа'" date="22 октября 2024, 19:00" location="Москва, Крокус Сити Холл"/>
<EventCard title="Выставка 'Мир Динозавров'" date="5 ноября 2024, 10:00" location="Санкт-Петербург, Экспофорум"/>
<EventCard title="Фестиваль еды 'Вкусная осень'" date="12 ноября 2024, 12:00" location="Нижний Новгород, Парк культуры и отдыха"/> */}

// function EventCard(props) {
//     return (
//         <div className="event-card">
//             <h3>{props.title}</h3>
//             <p>{props.date}</p>
//             <p>{props.location}</p>
//         </div>
//     );
// }
// export default EventCard;

function EventCard({title, date, location}) {
    return (
        <div className="event-card">
            <h3>{title}</h3>
            <p>{date}</p>
            <p>{location}</p>
        </div>
    );
}
export default EventCard;

