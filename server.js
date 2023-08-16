import { fileURLToPath } from 'url';
import path from 'path';
import express from 'express';

const PORT = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.static(path.join(__dirname, 'build')));
app.use(express.static(path.join(__dirname, 'static', '404')));
app.use(express.static(path.join(__dirname, 'static', '500')));
app.use(express.static(path.join(__dirname, 'static', 'authorization')));
app.use(express.static(path.join(__dirname, 'static', 'chats')));
app.use(express.static(path.join(__dirname, 'static', 'profile')));
app.use(express.static(path.join(__dirname, 'static', 'profiledata')));
app.use(express.static(path.join(__dirname, 'static', 'profilepassword')));
app.use(express.static(path.join(__dirname, 'static', 'registration')));

app.get('/', (req, res) => { res.sendFile(`${__dirname}/build/index.html`); });
app.get('/404', (req, res) => { res.sendFile(`${__dirname}/static/404/index.html`); });
app.get('/500', (req, res) => { res.sendFile(`${__dirname}/static/500/index.html`); });
app.get('/authorization', (req, res) => { res.sendFile(`${__dirname}/static/authorization/index.html`); });
app.get('/chats', (req, res) => { res.sendFile(`${__dirname}/static/chats/index.html`); });
app.get('/profile', (req, res) => { res.sendFile(`${__dirname}/static/profile/index.html`); });
app.get('/profile/data', (req, res) => { res.sendFile(`${__dirname}/static/profiledata/index.html`); });
app.get('/profile/password', (req, res) => { res.sendFile(`${__dirname}/static/profilepassword/index.html`); });
app.get('/registration', (req, res) => { res.sendFile(`${__dirname}/static/registration/index.html`); });

app.listen(PORT, () => {
    console.log(`Проект работает на порту ${PORT} \n`);
});
