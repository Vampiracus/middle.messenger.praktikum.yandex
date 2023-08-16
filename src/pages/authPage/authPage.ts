import PopupContent from '../../components/PopupContent';
import AuthorizationForm from './AuthorizationForm';
// import RegistrationForm from './RegistrationForm';
import './authPage.scss';

export default class AuthPage extends PopupContent {
    constructor() {
        const theForm = new AuthorizationForm();
        super({}, '{{{theForm}}}', { theForm }, [theForm]);
        this.setProps({ active: true });
    }
}
