import './profileFormWrapper.scss';
import Handlebars from 'handlebars';

export default function profileFormWrapper(content: string) {
    const template = Handlebars.compile(`
        <div class='profile-form-wrapper'>
            {{{content}}}
        </div>
    `);
    return template({
        content,
    });
}
