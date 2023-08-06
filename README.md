# Учебный проект: мессенджер

Пул-реквест 1 спринт: [ссылка](https://github.com/Vampiracus/middle.messenger.praktikum.yandex/pull/3)

На данном этапе только сверстаны страницы будущего веб-приложения. Прототип приложения выполнен в [Figma](https://www.figma.com/file/7UINrrRL12ICT0lXqvFVbi/Messenger-Proto?type=design&node-id=0%3A1&mode=design&t=GvKlX8atBnVE22LR-1 "кликните, чтобы перейти по ссылке")

Использовался шаблонизатор `Handlebars`

Использовался препроцессор `PostCSS` вместе с плагином `PreCSS`

Сборка настроена при помощи `Vite`

Настроен автодеплой на Netlify, проект можно найти по [ссылке](https://cosmic-piroshki-2466bd.netlify.app/ "кликните, чтобы перейти по ссылке"). На Netlify выложена не раздача статики, как в локале с помощью express; а само приложение. Поскольку реализация переходов между страницами не входит в первый спринт, там можно увидеть лишь одну из сверстанных страниц.

Рекомендуется использование браузера Google Chome версии хотя бы `115.0.5790.110`

## Запуск проекта
После установки репозитория локально и после подтягивания зависимостей: для запуска проекта необходимо перейти в папку запустить `npm run start`:
```
$ git clone https://github.com/Vampiracus/middle.messenger.praktikum.yandex.git
$ npm i
$ cd vite
$ npm run start
```
Произойдет сборка проекта в папку `build` и запустится скрипт server.js, он будет раздавать статику по адресу http://localhost:3000/. 

---

Для сборки проекта необходимо запустить команду
```
npm run build
```
Проект будет собран и помещен в папку build

## Ссылки на страницы

Все сверстанные страницы находятся в директории `static` (они были сохранены туда из браузера нажатием `ctrl + S`, когда приложение работало в режиме разработки и в нем отображалась соответствующая страница). 

Ниже приведены относительные пути к самим страницам, а также адреса, по которым локальный сервер раздает их (с помощью express)

#### Авторизация

- Страница входа: `static/вход1/index.html`, http://localhost:3000/entr1

- Страница входа (неправильные данные): `static/вход2/index.html`, http://localhost:3000/entr2

- Страница регистрации: `static/рег1/index.html`, http://localhost:3000/registration1

- Страница регистрации (неправильные данные): `static/рег2/index.html`, http://localhost:3000/registration2

#### Ошибки

- Ошибка 404: `static/404/index.html`, http://localhost:3000/error404

- Ошибка 5**: `static/500/index.html`, http://localhost:3000/error500

#### Главная страница

- Главная страница `static/осн_загл/index.html`, http://localhost:3000/main_plug

- Главная страница (чат) `static/осн_чат/index.html`, http://localhost:3000/main_chat

- Главная страница (функции чата) `static/осн_фун/index.html`, http://localhost:3000/main_functions

- Главная страница (поиск) `static/осн_пои/index.html`, http://localhost:3000/main_search

- Главная страница (поиск) `static/осн_пои/index.html`, http://localhost:3000/main_search

- Главная страница (добавить пользователя) `static/осн_доб/index.html`, http://localhost:3000/main_add

- Главная страница (удалить пользователя) `static/осн_удал_пол/index.html`, http://localhost:3000/main_delete_user

- Главная страница (удалить чат) `static/осн_удал_чат/index.html`, http://localhost:3000/main_delete_chat

#### Профиль

- Профиль `static/проф_осн/index.html`, http://localhost:3000/profile_main

- Профиль (изменение данных пользователя) `static/проф_изм_дан/index.html`, http://localhost:3000/profile_change_data

- Профиль (изменение пароля пользователя) `static/проф_изм_пар/index.html`, http://localhost:3000/profile_change_password

- Профиль (изменение ошибка загрузки файла для аватарки) `static/проф_ошиб/index.html`, http://localhost:3000/profile_error
