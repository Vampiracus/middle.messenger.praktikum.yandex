import Handlebars from 'handlebars';

export default function toBeRead(n: number) {
    if (n === 0) return '';

    const template = Handlebars.compile(`
        <div class='chatItem__about__toBeRead'>
            {{n}}
        </div>
    `);
    return template({ n });
}
