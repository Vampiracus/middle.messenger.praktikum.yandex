import PopupContent from '../../components/popupContent';
import AuthorizationForm from './authorizationForm';
// import RegistrationForm from './RegistrationForm';
import './authPage.scss';

export default class AuthPage extends PopupContent {
    constructor() {
        const theForm = new AuthorizationForm();
        super({}, '{{{theForm}}}', { theForm }, [theForm]);
        this.setProps({ active: true });
    }
}
