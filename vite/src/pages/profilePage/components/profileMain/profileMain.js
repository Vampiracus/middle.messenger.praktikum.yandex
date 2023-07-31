import './profileMain.css';
import Handlebars from "handlebars";
import myAvatar from './../myAvatar';

export default function profileMain() {
    let template = Handlebars.compile(`
        <div class='profileMain'>
            {{{myAvatar}}}
        </div>
    `)
    return template({
        myAvatar: myAvatar(),
    });
}