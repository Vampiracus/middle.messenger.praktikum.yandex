import './../errors.css';

export function error500Page() {
    return `
    <div class='errorPage'>
        <h1>Ошибка 500</h1>
        <p>Похоже, сервер лежит</p>
        <a>На главную</a>
    </div>
    `;
}