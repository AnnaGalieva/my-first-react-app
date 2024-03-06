// Вам необходимо разработать HOC withLoadingIndicator, который можно использовать для оборачивания любого компонента. Этот HOC должен принимать параметр isLoading, который определяет, идет ли в данный момент загрузка. Если isLoading равен true, то вместо оборачиваемого компонента должен отображаться загрузочный индикатор.

// Создайте HOC withLoadingIndicator, который принимает компонент и возвращает новый компонент, который показывает либо индикатор загрузки, либо содержимое оригинального компонента в зависимости от пропса isLoading.
// Можно использовать простой текстовый индикатор или любой спиннер из доступных библиотек.
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faSpinner } from "@fortawesome/free-solid-svg-icons";
// /* eslint-disable react/prop-types */
// export default function Loading({ isLoading }) {
//     return (
//         <>
//             {isLoading && (
//                 <h2>
//                     Loading <FontAwesomeIcon icon={faSpinner} />
//                 </h2>
//             )}
//             {!isLoading && <h2>Loading end</h2>}
//         </>
//     );
// }






