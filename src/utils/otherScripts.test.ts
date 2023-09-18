import { expect } from 'chai';
import forHandlebars, { timeToReadable } from './otherScripts';

describe('Other scripts tests', () => {
    beforeEach(() => {
    });

    describe('forHandlebars tests', () => {
        // eslint-disable-next-line no-useless-constructor, no-empty-function
        class DummyBlock { constructor() {} }

        it('should return string with {{{contents}}} and object with { contents }', () => {
            const bl1 = new DummyBlock() as any;
            const bl2 = new DummyBlock() as any;

            expect(forHandlebars([bl1, bl2])).deep.eq([
                '{{{content0}}}\n{{{content1}}}\n',
                {
                    content0: bl1,
                    content1: bl2,
                },
            ]);
            // Need to check that blocks are the same
            expect(forHandlebars([bl1, bl2])[1].content0).to.eq(bl1, 'content0 is not bl1');
            expect(forHandlebars([bl1, bl2])[1].content1).to.eq(bl2, 'content1 is not bl2');
        });
    });

    describe('timeToReadable tests', () => {
        const regex = /^\d\d\d\d-\d\d-\d\d[A-Z]\d\d:\d\d:\d\d\+\d\d:\d\d$/;
        // 2023-09-15T19:22:09+00:00

        const getTimestamp = (d: Date): string => {
            let res = '';
            res += `${d.getFullYear()}-${d.getMonth() > 9 ? '' : '0'}${d.getMonth() + 1}-${d.getDate() > 9 ? '' : '0'}${d.getDate()}`;
            res += `T${d.getHours() > 9 ? '' : '0'}${d.getHours()}:${d.getMinutes() > 9 ? '' : '0'}${d.getMinutes()}:${d.getSeconds() > 9 ? '' : '0'}${d.getSeconds()}`;
            // in Moscow
            res += '+03:00';
            return res;
        };

        it('test funtion to get the current timestamp should work to test properly', () => {
            // eslint-disable-next-line no-unused-expressions
            expect(getTimestamp(new Date(1695017031516)).match(regex)).to.not.be.null;
        });

        it('should return same if time is incorrect format', () => {
            expect(timeToReadable('10:04')).to.eq('10:04');
        });

        it('should return time in minutes if less than 60 min have passed', () => {
            const d = getTimestamp(new Date(1695017031516));

            const res = timeToReadable(d);

            expect(res).to.eq('1 min');
        });

        it('should return time in hours if less than 24 h have passed', () => {
            const d = getTimestamp(new Date(1695017031516));

            const res = timeToReadable(d);

            expect(res).to.eq('1 min');
        });

        it('should return time in hours if less than 24 h have passed', () => {
            const d = getTimestamp(new Date(1695017031516 - 1000 * 60 * 62));

            const res = timeToReadable(d);

            expect(res).to.eq('1 h');
        });

        it('should return time as weekday dd:mm if less than 7 days have passed', () => {
            const d = getTimestamp(new Date(1695017031516 - 1000 * 60 * 60 * 25));

            const res = timeToReadable(d);

            // eslint-disable-next-line no-unused-expressions
            expect(res.match(/... \d\d:\d\d/)).to.not.be.null;
        });

        it('should return time as dd Month hh:mm in other cases', () => {
            const d = getTimestamp(new Date(1695017031516 - 1000 * 60 * 60 * 24 * 8));

            const res = timeToReadable(d);

            // eslint-disable-next-line no-unused-expressions
            expect(res.match(/\d\d ... \d\d:\d\d/)).to.not.be.null;
        });
    });
});
