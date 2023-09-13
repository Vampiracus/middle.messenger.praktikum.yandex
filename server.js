import { fileURLToPath } from 'url';
import path from 'path';
import express from 'express';
import history from 'express-history-api-fallback';

const PORT = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.static(path.join(__dirname, 'build')));
app.use(history('index.html', { root: './build' }));

app.listen(PORT, () => {
    console.log(`Проект работает на порту ${PORT} \nhttp://localhost:${PORT}/`);
});
