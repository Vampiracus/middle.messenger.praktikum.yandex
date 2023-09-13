import PopupContent from '../../../components/popupContent';
import RegistrationForm from './registrationForm';
import '../authPage.scss';

export default class RegPage extends PopupContent {
    constructor() {
        const reg = new RegistrationForm();

        super({}, '{{{theForm}}}', { theForm: reg }, [reg]);

        this.setProps({ active: true });
    }
}
