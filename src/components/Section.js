export default class Section {
  constructor({ renderer }, selector) {
    this._renderer = renderer;

    this._container = document.querySelector(selector);
  }

  renderItems(items) {
    items.forEach((item) => this.addItem(this._renderer(item)));
    //this._items.forEach(this._renderer);
  }

  addItem(element) {
    this._container.append(element);
  }
}
