import Handlebars from "handlebars";

export default function toBeRead(n) {
    if (n == 0)
        return ``;

    let template = Handlebars.compile(`
        <div class='chatItem__about__toBeRead'>
            {{n}}
        </div>
    `)
    return template({n})
}