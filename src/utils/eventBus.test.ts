import { expect } from 'chai';
import EventBus from './eventBus';

describe('eventBus tests', () => {
    let eventBus: EventBus;

    let callback1Count: number;
    let callback2Count: number;
    const callback1 = () => { callback1Count += 1; };
    const callback2 = () => { callback2Count += 1; };

    beforeEach(() => {
        eventBus = new EventBus();
        callback1Count = 0;
        callback2Count = 0;
        eventBus.on('cb', callback1);
        eventBus.on('cb', callback2);
    });

    it('should call callbacks on emit', () => {
        eventBus.emit('cb');

        expect(callback1Count).eq(1);
        expect(callback2Count).eq(1);
    });

    it('should give the ability to unsibscribe', () => {
        eventBus.off('cb', callback1);
        eventBus.emit('cb');

        expect(callback1Count).eq(0);
        expect(callback2Count).eq(1);
    });

    it('should not do anythin on emit() if the event does not exist', () => {
        eventBus.off('cb', callback1);
        eventBus.off('cb', callback2);

        expect(() => { eventBus.emit('cb'); }).to.not.throw();
        expect(() => { eventBus.emit('event'); }).to.not.throw();
    });
});
