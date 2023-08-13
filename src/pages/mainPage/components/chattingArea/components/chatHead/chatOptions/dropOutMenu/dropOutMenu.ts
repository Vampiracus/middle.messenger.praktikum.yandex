import './dropOutMenu.scss';

export default function dropOutMenu() {
    return `
    <div class='drop-out-menu'>
        <div> <div class='drop-out-menu__option-picture drop-out-menu__option-picture_large'>+</div> <span> Добавить пользователя </span> </div>
        <div> <div class='drop-out-menu__option-picture'>x</div> <span> Удалить пользователя </span> </div>
        <div> <div class='drop-out-menu__option-picture drop-out-menu__option-picture_red'>x</div> <span> Удалить чат </span> </div>
    </div>
    `;
}
