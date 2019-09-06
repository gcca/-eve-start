import BoundedNodes from './bounded-nodes';

import Node from './node';
import Traversal from './traversal';

describe('Wizard', () => {
  describe('model', () => {
    describe('BoundedNodes', () => {
      let boundedNodes: BoundedNodes<number>;
      let traversal: Traversal<number, { node: Node<number> }>;

      describe('with traversal after push', () => {
        beforeEach(() =>{
          boundedNodes = new BoundedNodes<number>();
        });

        beforeEach(() => {
          boundedNodes.push(1);
          boundedNodes.push(2);
          boundedNodes.push(3);
          boundedNodes.push(4);
          boundedNodes.push(5);
        });

        beforeEach(() => {
          traversal = boundedNodes.traversal();
        });

        describe(`after two next's`, () => {
          beforeEach(() => {
            traversal
              .next()
              .next()
            ;
          });

          it(`should get third registered value`, () => {
            expect(traversal.current).toBe(3);
          });
        });
      });

      describe('with traversal before push', () => {
        beforeEach(() =>{
          boundedNodes = new BoundedNodes<number>();
          traversal = boundedNodes.traversal();
        });

        beforeEach(() => {
          boundedNodes.push(1);
          boundedNodes.push(2);
          boundedNodes.push(3);
          boundedNodes.push(4);
          boundedNodes.push(5);
        });

        describe(`after two next's`, () => {
          beforeEach(() => {
            traversal
              .next()
              .next()
            ;
          });

          it(`should get third registered value`, () => {
            expect(traversal.current).toBe(3);
          });
        });
      });
    });
  });
});
