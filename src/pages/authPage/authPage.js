import popupContent from '../../components/popupContent';
import authorizationForm from './modules/authorizationForm';
import registrationForm from './modules/registrationForm';
import Handlebars from 'handlebars';
import './authPage.css';

export default function authPage() {
    let template = Handlebars.compile(popupContent(`{{{content}}}`));
    return template({content: registrationForm()});
}
