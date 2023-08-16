import Block from '../../../../utils/Block';
import './profileFormWrapper.scss';

interface IWrapper {
    template: string,
    implementation: Record<string, Block | string | undefined>,
}

export default class ProfileFormWrapper<T extends Record<string, any>> extends Block<IWrapper | T> {
    constructor(templateProps: IWrapper, actualProps:T, children?: Array<Block>) {
        super({ ...templateProps, ...actualProps }, 'div', children);
        this.addClass('profile-form-wrapper');
    }

    render() {
        return Block.compile(this.props.template, this.props.implementation);
    }
}
