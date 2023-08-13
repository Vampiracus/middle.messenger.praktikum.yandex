import './chatHead.scss';
import Handlebars from 'handlebars';
import emptyAvatar from '../../../../../../components/emptyAvatar';
import chatOptions from './chatOptions';

export default function chatHead(chatInfo: {name: string}) {
    const template = Handlebars.compile(`
    <div class='chat-head'>
        <div class='chat-head__name'>
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
