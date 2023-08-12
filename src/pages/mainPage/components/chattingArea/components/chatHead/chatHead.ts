import './chatHead.css';
import Handlebars from 'handlebars';
import emptyAvatar from '../../../../../../components/emptyAvatar';
import chatOptions from './chatOptions';

export default function chatHead(chatInfo: {name: string}) {
    const template = Handlebars.compile(`
    <div class='chatHead'>
        <div class='chatHead__name'>
            {{{avatar}}}
            {{{name}}}
        </div>
        {{{chatOptions}}}
    </div>
    `);
    return template({
        name: chatInfo.name,
        avatar: emptyAvatar(),
        chatOptions: chatOptions(),
    });
}
