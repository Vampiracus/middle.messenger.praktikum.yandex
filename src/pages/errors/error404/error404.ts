import '../errors.scss';

export default function error404Page(): string {
    return `
    <main class='error-page'>
        <h1>Ошибка 404</h1>
        <a>На главную</a>
    </main>
    `;
}
