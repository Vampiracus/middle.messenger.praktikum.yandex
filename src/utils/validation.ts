// Функции возвращают ложь, если слово не прошло валидацию

export function validateEmail(email:string): boolean | string {
    const regex = /^[A-Za-z0-9.\-_]+@[A-Za-z0-9.\-_]+\.[A-Za-z0-9.\-_]+$/;
    if (regex.test(email)) return true;
    return 'Некорректный email';
}

export function validateName(name: string): boolean | string {
    const regex = /^[A-ZА-ЯЁ]{1}[a-zа-я-ё]*$/;
    if (regex.test(name)) return true;
    return 'Имя должно начинаться с большой буквы и состоять только из букв (допустимы дефисы)';
}

export function validateLogin(login: string): boolean | string {
    const regex = /^[A-Za-z0-9\-_]*[A-Za-z\-_]+[A-Za-z0-9\-_]*$/;
    if (login.length < 3) return 'Логин должен состояить минимум из 3 символов';
    if (/^[0-9]*$/.test(login)) return 'Логин не может состоять только из цифр';
    if (regex.test(login)) return true;
    return 'Логин может состоять только из букв, цифр или символов \'-\', \'_\'';
}

export function validatePassword(password: string): boolean | string {
    const letter = /^.*[A-Z].*$/;
    const digit = /^.*[0-9].*$/;
    if (password.length < 8) return 'Пароль должен состоять минимум из 8 символов';
    if (!letter.test(password)) return 'В пароле должна быть хотя бы одна заглавная буква';
    if (!digit.test(password)) return 'В пароле должна быть хотя бы одна цифра';
    return true;
}

export function validatePhone(phone: string): boolean | string {
    const regex = /^\+?[0-9]{10,15}$/;
    if (/[^+0-9]/.test(phone)) return 'Допустимы только цифры и \'+\'';
    if (regex.test(phone)) return true;
    return 'Некорректный номер телефона';
}
