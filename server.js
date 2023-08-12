import express from 'express';
const PORT = 3000;

import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.static(path.join(__dirname, 'build')));
app.use(express.static(path.join(__dirname, 'static', 'вход1')));
app.use(express.static(path.join(__dirname, 'static', 'вход2')));
app.use(express.static(path.join(__dirname, 'static', 'осн_доб')));
app.use(express.static(path.join(__dirname, 'static', 'осн_загл')));
app.use(express.static(path.join(__dirname, 'static', 'осн_пои')));
app.use(express.static(path.join(__dirname, 'static', 'осн_удал_пол')));
app.use(express.static(path.join(__dirname, 'static', 'осн_удал_чат')));
app.use(express.static(path.join(__dirname, 'static', 'осн_фун')));
app.use(express.static(path.join(__dirname, 'static', 'осн_чат')));
app.use(express.static(path.join(__dirname, 'static', 'проф_изм_дан')));
app.use(express.static(path.join(__dirname, 'static', 'проф_изм_пар')));
app.use(express.static(path.join(__dirname, 'static', 'проф_осн')));
app.use(express.static(path.join(__dirname, 'static', 'проф_ошиб')));
app.use(express.static(path.join(__dirname, 'static', 'рег1')));
app.use(express.static(path.join(__dirname, 'static', 'рег2')));
app.use(express.static(path.join(__dirname, 'static', '404')));
app.use(express.static(path.join(__dirname, 'static', '500')));

app.get(`/`, (req, res) => {res.sendFile(__dirname + '/build/index.html');});
app.get(`/entr1`, (req, res) => {res.sendFile(__dirname + '/static/вход1/index.html');});
app.get(`/entr2`, (req, res) => {res.sendFile(__dirname + '/static/вход2/index.html');});
app.get(`/main_add`, (req, res) => {res.sendFile(__dirname + '/static/осн_доб/index.html');});
app.get(`/main_plug`, (req, res) => {res.sendFile(__dirname + '/static/осн_загл/index.html');});
app.get(`/main_search`, (req, res) => {res.sendFile(__dirname + '/static/осн_пои/index.html');});
app.get(`/main_delete_user`, (req, res) => {res.sendFile(__dirname + '/static/осн_удал_пол/index.html');});
app.get(`/main_delete_chat`, (req, res) => {res.sendFile(__dirname + '/static/осн_удал_чат/index.html');});
app.get(`/main_functions`, (req, res) => {res.sendFile(__dirname + '/static/осн_фун/index.html');});
app.get(`/main_chat`, (req, res) => {res.sendFile(__dirname + '/static/осн_чат/index.html');});
app.get(`/profile_change_data`, (req, res) => {res.sendFile(__dirname + '/static/проф_изм_дан/index.html');});
app.get(`/profile_change_password`, (req, res) => {res.sendFile(__dirname + '/static/проф_изм_пар/index.html');});
app.get(`/profile_main`, (req, res) => {res.sendFile(__dirname + '/static/проф_осн/index.html');});
app.get(`/profile_error`, (req, res) => {res.sendFile(__dirname + '/static/проф_ошиб/index.html');});
app.get(`/registration1`, (req, res) => {res.sendFile(__dirname + '/static/рег1/index.html');});
app.get(`/registration2`, (req, res) => {res.sendFile(__dirname + '/static/рег2/index.html');});
app.get(`/error404`, (req, res) => {res.sendFile(__dirname + '/static/404/index.html');});
app.get(`/error500`, (req, res) => {res.sendFile(__dirname + '/static/500/index.html');});

app.listen(PORT, () => {
  console.log(`Проект работает на порту ${PORT} \n`);
});
