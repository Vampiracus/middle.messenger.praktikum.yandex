import { expect } from 'chai';
import * as validation from './validation'

describe('validation tests', () => {
    describe('email', () => {
        it('should not contain anything but A-Za-z0-9-_.@', () => {
            expect(typeof validation.validateEmail('#@#.#')).to.eq('string');
            expect(typeof validation.validateEmail('?@?.?')).to.eq('string');
            expect(typeof validation.validateEmail('<@<.<')).to.eq('string');
            expect(typeof validation.validateEmail('>@>.>')).to.eq('string');
            expect(typeof validation.validateEmail('/@/./')).to.eq('string');
            expect(typeof validation.validateEmail('\\@\\.\\')).to.eq('string');
            expect(typeof validation.validateEmail('\'@\'.\'')).to.eq('string');
            expect(typeof validation.validateEmail('"@"."')).to.eq('string');

            expect(typeof validation.validateEmail('a@a.z')).to.eq('boolean');
            expect(typeof validation.validateEmail('A@A.Z')).to.eq('boolean');
            expect(typeof validation.validateEmail('1@1.9')).to.eq('boolean');
            expect(typeof validation.validateEmail('-@-.-')).to.eq('boolean');
            expect(typeof validation.validateEmail('_@_._')).to.eq('boolean');
        });
    });

    describe('name', () => {
        it('should not contain anything but A-ZА-ЯЁa-zа-яё-', () => {
            expect(typeof validation.validateName('@')).to.eq('string');
            expect(typeof validation.validateName('#')).to.eq('string');
            expect(typeof validation.validateName('?')).to.eq('string');
            expect(typeof validation.validateName('<')).to.eq('string');
            expect(typeof validation.validateName('>')).to.eq('string');
            expect(typeof validation.validateName('/')).to.eq('string');
            expect(typeof validation.validateName('\\')).to.eq('string');
            expect(typeof validation.validateName('\'')).to.eq('string');
            expect(typeof validation.validateName('"')).to.eq('string');
        });

        it('should start with a capital', () => {
            expect(typeof validation.validateName('abc')).to.eq('string');
            expect(typeof validation.validateName('абв')).to.eq('string');

            expect(typeof validation.validateName('Abc')).to.eq('boolean');
            expect(typeof validation.validateName('Абв')).to.eq('boolean');
            expect(typeof validation.validateName('Ёё')).to.eq('boolean');
        });

        it('should have at least one symbol in it', () => {
            expect(typeof validation.validateName('')).to.eq('string');
        });
    });
});
