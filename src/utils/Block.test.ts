import { expect } from 'chai';
import Block from './Block';

describe('Block tests', () => {
    let mountCounter = 0;
    let updateCounter = 0;
    let renderCounter = 0;
    class Component extends Block {
        constructor(props: Record<string, any>, children?: Block[]) {
            super(props, 'div', children);
        }

        componentDidMount() {
            mountCounter += 1;
        }

        componentDidUpdate(): boolean {
            updateCounter += 1;
            return true;
        }

        render() {
            renderCounter += 1;
        }
    }
    let block: Component;

    beforeEach(() => {
        mountCounter = 0;
        updateCounter = 0;
        renderCounter = 0;
        block = new Component({});
    });

    describe('initialization tests', () => {
        it('should set props', () => {
            block = new Component({
                a: 'b', c: 'd',
            });

            expect(block.props).to.deep.eq({
                a: 'b', c: 'd',
            });
        });

        it('should call componentDidMount', () => {
            // It is called in beforeEach
            expect(mountCounter).to.eq(1);
        });

        it('should call render()', () => {
            // It is called in beforeEach
            expect(renderCounter).to.eq(1);
        });
    });

    describe('props tests', () => {
        it('should throw an error on deleting props', () => {
            block = new Component({
                a: 'b', c: 'd',
            });

            expect(() => { delete block.props.a; }).to.throw();
        });

        it('should call componentDidUpdate on setProps', () => {
            block.setProps({});

            expect(updateCounter).to.eq(1);
        });

        it('should change props on setProps', () => {
            block = new Component({
                a: 'b', c: 'd',
            });

            block.setProps({ a: 'c' });

            expect(block.props).to.deep.eq({
                a: 'c', c: 'd',
            });
        });

        it('should call render on setProps()', () => {
            block.setProps({ a: 'c' });

            // The first call happens on initialization
            expect(renderCounter).to.eq(2);
        });
    });

    it('should return HTMLElement on get element', () => {
        const el = block.element;

        expect(el.innerHTML).to.eq('');
    });

    it('should add events', () => {
        let clickCounter = 0;
        block = new Component({ events: [['click', () => { clickCounter += 1; }]] });

        block.element.click();

        expect(clickCounter).to.eq(1);
        expect(block.props.events.length).to.eq(1);
    });

    it('should add classes on addClass()', () => {
        block.addClass('my-class');

        // eslint-disable-next-line no-unused-expressions
        expect(block.element.classList.contains('my-class')).to.true;
        expect(block.props.classes).to.deep.eq(['my-class']);
    });

    it('should add attributes on setAttribute()', () => {
        block.addClass('my-class1');
        block.addClass('my-class2');

        block.removeClass('my-class1');

        // eslint-disable-next-line no-unused-expressions
        expect(block.element.classList.contains('my-class1')).to.not.true;
        // eslint-disable-next-line no-unused-expressions
        expect(block.element.classList.contains('my-class2')).to.true;
        expect(block.props.classes).to.deep.eq(['my-class2']);
    });

    it('should remove class on removeClass()', () => {
        block.setAttribute('myAttr', 'value');

        // eslint-disable-next-line no-unused-expressions
        expect(block.element.hasAttribute('myAttr')).to.true;
        expect(block.element.getAttribute('myAttr')).to.eq('value');
        expect(block.props.additionalProperties).to.deep.eq([['myAttr', 'value']]);
    });
});
