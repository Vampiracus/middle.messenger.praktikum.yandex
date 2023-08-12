import './profileMain.css';
import Handlebars from 'handlebars';
import myAvatar from '../myAvatar';
import profileMainContent from './profileMainContent';

export default function profileMain(me: UserInfo) {
    const template = Handlebars.compile(`
        <div class='profileMain'>
            <br/>
            {{{myAvatar}}}
            <br/>
            {{{content}}}
        </div>
    `);
    return template({
        myAvatar: myAvatar(),
        me,
        content: profileMainContent(me),
    });
}
