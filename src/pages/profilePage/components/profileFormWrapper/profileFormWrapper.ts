import './profileFormWrapper.css';
import Handlebars from "handlebars";

export default function profileFormWrapper(content: string) {
    let template = Handlebars.compile(`
        <div class='profileFormWrapper'>
            {{{content}}}
        </div>
    `)
    return template({
        content
    });
}
