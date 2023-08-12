import './dropOutMenu.css';

export default function dropOutMenu() {
    return `
    <div class='dropOutMenu'>
        <div> <div class='dropOutMenu__optionPicture dropOutMenu__optionPicture_large'>+</div> <span> Добавить пользователя </span> </div>
        <div> <div class='dropOutMenu__optionPicture'>x</div> <span> Удалить пользователя </span> </div>
        <div> <div class='dropOutMenu__optionPicture dropOutMenu__optionPicture_red'>x</div> <span> Удалить чат </span> </div>
    </div>
    `;
}
