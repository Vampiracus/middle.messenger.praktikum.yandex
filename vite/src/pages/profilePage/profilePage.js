import './profilePage.css';
import backToMainComponent from './components/backToMainComponent';
import Handlebars from "handlebars";
import profileMain from './components/profileMain';

export default function profilePage() {
    let template = Handlebars.compile(`
        <div class='profilePage'>
            {{{backToMainComponent}}}
            {{{profileMain}}}
        </div>
    `)
    return template({
        backToMainComponent: backToMainComponent(),
        profileMain: profileMain()
    });
}