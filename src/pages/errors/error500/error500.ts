import '../errors.css';

export default function error500Page():string {
    return `
    <main class='errorPage'>
        <h1>Ошибка 500</h1>
        <p>Похоже, сервер лежит</p>
        <a>На главную</a>
    </main>
    `;
}
