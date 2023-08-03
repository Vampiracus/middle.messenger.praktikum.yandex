import './profileFormWrapper.css';
import Handlebars from "handlebars";

export default function profileFormWrapper(content) {
    let template = Handlebars.compile(`
        <div class='profileFormWrapper'>
            {{{content}}}
        </div>
    `)
    return template({
        content
    });
}