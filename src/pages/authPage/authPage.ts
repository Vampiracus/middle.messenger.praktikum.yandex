import PopupContent from '../../components/popupContent';
import AuthorizationForm from './authorizationForm';
import RegistrationForm from './registrationForm';
import './authPage.scss';

export default class AuthPage extends PopupContent {
    constructor() {
        const reg = new RegistrationForm();
        const entr = new AuthorizationForm();
        let theForm: RegistrationForm | AuthorizationForm = reg;
        super({}, '{{{theForm}}}', { theForm }, [theForm]);
        this.setProps({ active: true });

        Object.assign(globalThis, {
            toEntr: () => {
                theForm = entr;
                this.setProps({ implementation: { theForm } });
            },
            toReg: () => {
                theForm = reg;
                this.setProps({ implementation: { theForm } });
            },
        });
    }
}
