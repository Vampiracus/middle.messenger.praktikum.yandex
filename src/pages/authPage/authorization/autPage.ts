import PopupContent from '../../../components/popupContent';
import AuthorizationForm from './authorizationForm';
import '../authPage.scss';

export default class AutPage extends PopupContent {
    constructor() {
        const aut = new AuthorizationForm();

        super({}, '{{{theForm}}}', { theForm: aut }, [aut]);

        this.setProps({ active: true });
    }
}
