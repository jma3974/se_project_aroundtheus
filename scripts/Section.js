export default class Section {
  constructor({ items, renderer }, classSelector) {
    this._renderItems = items;
    this._renderer = renderer;

    this._container = document.querySelector(classSelector);
  }

  renderItems() {
    this._renderItems.forEach((item) => this.addItem(this._renderer(item)));
  }

  addItem(element) {
    this._container.append(element);
  }
}
