# Учебный проект: мессенджер

Пул-реквест 4 спринт: [ссылка](https://github.com/Vampiracus/middle.messenger.praktikum.yandex/pull/6)

На данном этапе в приложении полностью реализована основная функциональность. Написаны тесты. Настроен прекоммит.

Прототип приложения выполнен в [Figma](https://www.figma.com/file/7UINrrRL12ICT0lXqvFVbi/Messenger-Proto?type=design&node-id=0%3A1&mode=design&t=GvKlX8atBnVE22LR-1 "кликните, чтобы перейти по ссылке")

Использовался шаблонизатор `Handlebars`

Использовался препроцессор `SASS`

Сборка настроена при помощи `Vite`

Настроен автодеплой на Netlify, проект можно найти по [ссылке](https://cosmic-piroshki-2466bd.netlify.app/ "кликните, чтобы перейти по ссылке").

Настроена `Content-security-policy`

Precommit выполняется с помощью `Husky`

Рекомендуется использование браузера Google Chome версии хотя бы `115.0.5790.110`

## Запуск проекта
После установки репозитория локально и после подтягивания зависимостей: для запуска проекта необходимо перейти в папку запустить `npm run start`:
```
$ git clone https://github.com/Vampiracus/middle.messenger.praktikum.yandex.git
$ npm i
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

Запустить вместе eslint, stylelint и проверку типов
```
npm run lint:all
```

## Запуск тестов

Для запуска тестов необходимо выполнить команду
```
npm test
```

## Ссылки на страницы

Все сверстанные страницы находятся в директории `static` (они были сохранены туда из браузера нажатием `ctrl + S`, когда приложение работало в режиме разработки и в нем отображалась соответствующая страница). 

Ниже приведены относительные пути к самим страницам, а также адреса, по которым локальный сервер раздает их (с помощью express)

- Страница входа: http://localhost:3000/

- Страница регистрации: http://localhost:3000/sign-up

- Ошибка 404: http://localhost:3000/anyothertexthere

- Ошибка 500: http://localhost:3000/500

- Страница с чатами http://localhost:3000/messages

- Профиль http://localhost:3000/settings

- Профиль (изменение данных пользователя) http://localhost:3000/settings/data

- Профиль (изменение пароля пользователя) http://localhost:3000/settings/password
