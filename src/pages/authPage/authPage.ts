import PopupContent from '../../components/PopupContent';
import AuthorizationForm from './AuthorizationForm';
// import RegistrationForm from './RegistrationForm';
import './authPage.scss';

export default class AuthPage extends PopupContent {
    constructor() {
        super([new AuthorizationForm()]);
        this.setProps({ active: true });
    }
}
