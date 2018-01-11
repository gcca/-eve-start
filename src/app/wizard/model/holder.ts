export default class AllocationHolder<T extends {}> {

  public reference: T;

  constructor(private referenceHolder: new () => T) {
    this.reference = new this.referenceHolder();
  }
}
