export default interface Node<T> {
  back: Node<T>;
  next: Node<T>;
  value: T;
}
