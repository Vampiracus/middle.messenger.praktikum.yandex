// Функции возвращают ложь, если слово не прошло валидацию

export function validateEmail(email:string): boolean {
    const regex = /^[A-Za-z0-9.\-_]+@[A-Za-z0-9.\-_]+\.[A-Za-z0-9.\-_]+$/;
    return regex.test(email);
}

export function validateName(name: string): boolean {
    const regex = /^[A-ZА-ЯЁ]{1}[a-zа-я-ё]*$/;
    return regex.test(name);
}

export function validateLogin(login: string): boolean {
    const regex = /^[A-Za-z0-9\-_]*[A-Za-z]+[A-Za-z0-9\-_]*$/;
    return regex.test(login) && login.length >= 3 && login.length <= 20;
}

export function validatePassword(password: string): boolean {
    const letter = /^.*[A-Z].*$/;
    const digit = /^.*[0-9].*$/;
    return letter.test(password) && digit.test(password)
        && password.length >= 8 && password.length <= 40;
}

export function validatePhone(phone: string): boolean {
    const regex = /^\+?[0-9]{10,15}$/;
    return regex.test(phone);
}
