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
