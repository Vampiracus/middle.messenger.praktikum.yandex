import Handlebars from 'handlebars';
import popupContent from '../../components/popupContent';
// import authorizationForm from './modules/authorizationForm';
import registrationForm from './modules/registrationForm';
import './authPage.css';

export default function authPage() {
    const template = Handlebars.compile(popupContent('{{{content}}}'));

    return template({ content: registrationForm(), });
}
