import Traversal from './traversal';

import AllocationHolder from './holder';
import Node from './node';

class Holder {
  public node: Node<number>;
}

describe('Wizard', () => {
  describe('model', () => {
    describe('Traversal', () => {

      let traversal: Traversal<number, Holder>;
      let allocationHolder: AllocationHolder<Holder>;

      let one: Node<number>;
      let two: Node<number>;
      let three: Node<number>;
      let four: Node<number>;
      let five: Node<number>;

      beforeEach(() => {
        allocationHolder = new AllocationHolder<Holder>(Holder);
      });

      beforeEach(() => {
        one = { value: 1 } as Node<number>;
        two = { value: 2 } as Node<number>;
        three = { value: 3 } as Node<number>;
        four = { value: 4 } as Node<number>;
        five = { value: 5 } as Node<number>;

        one.back = five;
        two.back = one;
        three.back = two;
        four.back = three;
        five.back = four;

        one.next = two;
        two.next = three;
        three.next = four;
        four.next = five;
        five.next = one;
      });

      describe('from node \'one\'', () => {
        beforeEach(() => {
          allocationHolder.reference.node = one;
          traversal = new Traversal<number, Holder>(allocationHolder);
        });

        it('should start from node \'one\'', () => {
          expect(traversal.current).toBe(1);
        });

        describe('after next', () => {
          beforeEach(() => {
            traversal.next();
          });

          it('should go to node \'two\'', () => {
            expect(traversal.current).toBe(2);
          });
        });

        describe('after three nested next\'s', () => {
          beforeEach(() => {
            traversal
              .next()
              .next()
              .next()
            ;
          });

          it('should go to node \'four\'', () => {
            expect(traversal.current).toBe(4);
          });
        });

        describe('after back', () => {
          beforeEach(() => {
            traversal.back();
          });

          it('should go to node \'five\'', () => {
            expect(traversal.current).toBe(5);
          });
        });

        describe('after three nested back\'s', () => {
          beforeEach(() => {
            traversal
              .back()
              .back()
              .back()
            ;
          });

          it('should go to node \'three\'', () => {
            expect(traversal.current).toBe(3);
          });
        });
      });

      describe('from node \'five\'', () => {
        beforeEach(() => {
          allocationHolder.reference.node = five;
          traversal = new Traversal<number, Holder>(allocationHolder);
        });

        it('should start from node \'five\'', () => {
          expect(traversal.current).toBe(5);
        });

        describe('after next', () => {
          beforeEach(() => {
            traversal.next();
          });

          it('should go to node \'one\'', () => {
            expect(traversal.current).toBe(1);
          });
        });

        describe('after three nested next\'s', () => {
          beforeEach(() => {
            traversal
              .next()
              .next()
              .next()
            ;
          });

          it('should go to node \'three\'', () => {
            expect(traversal.current).toBe(3);
          });
        });

        describe('after back', () => {
          beforeEach(() => {
            traversal.back();
          });

          it('should go to node \'four\'', () => {
            expect(traversal.current).toBe(4);
          });
        });

        describe('after three nested back\'s', () => {
          beforeEach(() => {
            traversal
              .back()
              .back()
              .back()
            ;
          });

          it('should go to node \'two\'', () => {
            expect(traversal.current).toBe(2);
          });
        });
      });
    });
  });
});
