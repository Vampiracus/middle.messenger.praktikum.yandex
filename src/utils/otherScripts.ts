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
    if (timePassed < 7) return `${weekDay[date.getDay()]} ${date.getHours() > 9 ? '' : '0'}${date.getHours()}:${date.getMinutes() > 9 ? '' : '0'}${date.getMinutes()}`;
    return `${date.getDate() < 10 ? '0' : ''}${date.getDate()} ${month[date.getMonth()]} ${date.getHours() > 9 ? '' : '0'}${date.getHours()}:${date.getMinutes() > 9 ? '' : '0'}${date.getMinutes()}`;
}
