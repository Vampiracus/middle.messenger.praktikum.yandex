import Handlebars from 'handlebars';
import popupContent from '../../components/popupContent';
import authorizationForm from './authorizationForm';
// import registrationForm from './registrationForm';
import './authPage.scss';

export default function authPage() {
    const template = Handlebars.compile(popupContent('{{{content}}}'));

    return template({ content: authorizationForm() });
}
