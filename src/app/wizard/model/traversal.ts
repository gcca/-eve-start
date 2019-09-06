import AllocationHolder from './holder';
import Node from './node';

export default class Traversal<T, Holder extends { node: Node<T> }> {

  private holder: Holder;

  constructor(private allocationHolder: AllocationHolder<Holder>) {
    this.holder = this.allocationHolder.reference;
  }

  public back(): this {
    this.holder.node = this.holder.node.back;

    return this;
  }

  public get current(): T {
    return this.holder.node.value;
  }

  public next(): this {
    this.holder.node = this.holder.node.next;

    return this;
  }
}
