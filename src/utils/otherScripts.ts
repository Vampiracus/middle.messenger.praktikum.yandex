import Block from './Block';

/**
 * Из полученных блоков формирует строку-заглушку для Handlebars из blocks.length строк вида:
 *
 * {{{content0}}}
 *
 * {{{content1}}}
 *
 * ...
 *
 * А также формирует объект вида:
 *
 * { content0: blocks[0], content1: blocks[1], ... }
 */
export default function forHandlebars(blocks: Block[]): [string, Record<string, Block>] {
    const contentObj: Record<string, Block> = {};
    let content: string = '';
    for (let i = 0; i < blocks.length; i++) {
        const cur = `content${i}`;
        content += `{{{${cur}}}}\n`;
        contentObj[cur] = blocks[i];
    }
    return [content, contentObj];
}

function checkKeys(a: Record<string, any>, b: Record<string, any>): boolean {
    for (const key of Object.keys(a)) {
        if (typeof b[key] !== typeof a[key]) return false;
        if (!(a[key] === undefined && b[key] === undefined)) {
            if (typeof a[key] === 'object' && !isEqual(a[key], b[key])) return false;
            if (typeof a[key] !== 'object' && a[key] !== b[key]) return false;
        }
    }
    return true;
}

export function isEqual(a: object, b: object): boolean {
    if (a === null || b === null) {
        if (a !== null || b != null) { return false; }
        return true;
    }

    if (!checkKeys(a, b) || !checkKeys(b, a)) { return false; }
    return true;
}

const weekDay = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export function timeToReadable(time: string): string {
    const regex = /^\d\d\d\d-\d\d-\d\d[A-Z]\d\d:\d\d:\d\d\+\d\d:\d\d$/;
    if (!regex.test(time)) return time;
    const msgTime = Date.parse(time);
    let timePassed = Math.ceil((Date.now() - msgTime) / 60000);
    if (timePassed < 60) return `${timePassed} min`;
    timePassed = Math.floor(timePassed / 60);
    if (timePassed < 24) return `${timePassed} h`;
    timePassed = Math.floor(timePassed / 24);
    const date = new Date(msgTime);
    if (timePassed < 7) return `${weekDay[date.getDay()]}`;
    return `${date.getDate() < 10 ? '0' : ''}${date.getDate()} ${month[date.getMonth()]}`;
}
