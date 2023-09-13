import './formInput.scss';
import Block from '../../utils/Block';
import MyInput, { IInput } from './myInput/myInput';
import MyLable from './myLabel/myLabel';

// eslint-disable-next-line no-unused-vars
type validateFunc = ((word: string) => boolean | string);

interface Props {
    labelText: string,
    inputProps: IInput,
    validationFunction: validateFunc,
    classes?: string[],
}

export default class FormInput extends Block<Props> {
    constructor(props: Props) {
        const onChange = () => {
            this.setProps({
                labelText: this.props.labelText,
                validationFunction: this.props.validationFunction,
                inputProps: {
                    ...this.props.inputProps,
                    value: this.children[0].props.value,
                },
            });
            this.validate();
        };
        const events: [string, EventListener][] = [
            ['blur', onChange],
            ['change', onChange],
            ...props.inputProps.events,
        ];
        super({ ...props }, 'div', [
            new MyInput({
                ...props.inputProps,
                events,
                classes: ['form-input'],
            }),
            new MyLable({
                text: props.labelText,
                forId: props.inputProps.id,
            }),
        ]);
        this.addClass('form-input-wrapper');
    }

    validate(): boolean {
        const validated = this.props.validationFunction(this.props.inputProps.value);
        if (validated !== true) {
            this.setIncorrect();
            this.children[1].setProps({ text: `${this.props.labelText}\n${validated}` });
        } else {
            this.setCorrect();
            this.children[1].setProps({ text: this.props.labelText });
        }
        return validated === true;
    }

    componentDidUpdate(): boolean {
        this.children[0].setProps({ value: this.props.inputProps.value });
        return false;
    }

    setCorrect() {
        this.children[1].removeClass('form-input__label_incorrect');
        this.children[1].addClass('form-input__label_correct');
    }

    setIncorrect() {
        this.children[1].addClass('form-input__label_incorrect');
        this.children[1].removeClass('form-input__label_correct');
    }

    render() {
        return Block.compile(`
        {{{label}}}
        {{{input}}}
        `, {
            input: this.children[0],
            label: this.children[1],
        });
    }
}
