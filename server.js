import { fileURLToPath } from 'url';
import path from 'path';
import express from 'express';

const PORT = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.static(path.join(__dirname, 'build')));

app.get('/', (req, res) => { res.sendFile(`${__dirname}/build/index.html`); });

app.listen(PORT, () => {
    console.log(`Проект работает на порту ${PORT} \n`);
});
