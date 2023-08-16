# Учебный проект: мессенджер

Пул-реквест 2 спринт: [ссылка](https://github.com/Vampiracus/middle.messenger.praktikum.yandex/pull/4)

На данном этапе сверстаны страницы будущего веб-приложения, реализован компонентный подход, реализован класс HTTPTransport для HTTP-запросов, настроена валидация форм и вывод объектов в консоль при отправке формы.

Прототип приложения выполнен в [Figma](https://www.figma.com/file/7UINrrRL12ICT0lXqvFVbi/Messenger-Proto?type=design&node-id=0%3A1&mode=design&t=GvKlX8atBnVE22LR-1 "кликните, чтобы перейти по ссылке")

Использовался шаблонизатор `Handlebars`

Использовался препроцессор `SASS`

Сборка настроена при помощи `Vite`

Настроен автодеплой на Netlify, проект можно найти по [ссылке](https://cosmic-piroshki-2466bd.netlify.app/ "кликните, чтобы перейти по ссылке"). На Netlify выложена не раздача статики, как в локале с помощью express; а само приложение. Там можно увидеть лишь одну из сверстанных страниц.

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

## Линтовка файлов

Для запуска проверки файлов проекта на соответствие конфигурациям stylelint и ESLint необходимо запустить следующие команды:

Stylelint
```
npm run stylelint
```

ESLint
```
npm run lint
```

ESLint без предупреждений
```
npm run lint:quiet
```

ESLint с автофиксом по возможности
```
npm run lint:fix
```

Проверка типов typescript
```
npm run typeslint
```

## Ссылки на страницы

Все сверстанные страницы находятся в директории `static` (они были сохранены туда из браузера нажатием `ctrl + S`, когда приложение работало в режиме разработки и в нем отображалась соответствующая страница). 

Ниже приведены относительные пути к самим страницам, а также адреса, по которым локальный сервер раздает их (с помощью express)

- Страница входа: `static/authorization/index.html`, http://localhost:3000/authorization

- Страница регистрации: `static/registration/index.html`, http://localhost:3000/registration

- Ошибка 404: `static/404/index.html`, http://localhost:3000/404

- Ошибка 500: `static/500/index.html`, http://localhost:3000/500

- Страница с чатами `static/chats/index.html`, http://localhost:3000/chats

- Профиль `static/profile/index.html`, http://localhost:3000/profile

- Профиль (изменение данных пользователя) `static/profiledata/index.html`, http://localhost:3000/profiledata

- Профиль (изменение пароля пользователя) `static/profilepassword/index.html`, http://localhost:3000/profilepassword
