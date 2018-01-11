import AllocationHolder from './holder';
import Boundaries from './boundaries';
import Node from './node';
import Traversal from './traversal';

export default class BoundedNodes<T> {

  public push: (value: T) => void;

  private boundariesHolder: AllocationHolder<Boundaries<T>>;

  constructor() {
    this.push = this.firstPush;
    this.boundariesHolder = new AllocationHolder<Boundaries<T>>(Boundaries);
  }

  public traversal(): Traversal<T, Boundaries<T>> {
    return new Traversal<T, Boundaries<T>>(this.boundariesHolder);
  }

  private firstPush(value: T): void {
    const node = { value } as Node<T>;
    node.back = node.next = node;

    const holder = this.boundariesHolder.reference;
    holder.first = holder.last = node;
    this.push = this.lastPush;
  }

  private lastPush(value: T): void {
    const holder = this.boundariesHolder.reference;
    const node = {
      back: holder.last,
      value,
    } as Node<T>;
    node.next = node;

    holder.last.next = node;
    holder.last = node;
  }
}
