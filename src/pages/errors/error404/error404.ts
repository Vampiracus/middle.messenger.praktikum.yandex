import './../errors.css';

export function error404Page(): string {
    return `
    <main class='errorPage'>
        <h1>Ошибка 404</h1>
        <a>На главную</a>
    </main>
    `;
}
