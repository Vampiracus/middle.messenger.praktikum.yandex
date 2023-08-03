import './profileMain.css';
import Handlebars from "handlebars";
import myAvatar from './../myAvatar';
import profileMainContent from './components/profileMainContent'

export default function profileMain(me) {
    let template = Handlebars.compile(`
        <div class='profileMain'>
            {{{myAvatar}}}
            <br/>
            {{{content}}}
        </div>
    `)
    return template({
        myAvatar: myAvatar(),
        me,
        content: profileMainContent(me)
    });
}
