import Node from './node';

export default class Boundaries<T> {
  public first: Node<T>;
  public last: Node<T>;

  public get node(): Node<T> {
    return this.first;
  }

  public set node(first: Node<T>) {
    this.first = first;
  }
}


