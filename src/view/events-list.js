import { createElement } from '../render.js';

function getEventsListTemplate() {
  return `
  <ul class="trip-events__list"></ul>
  `;
}

export default class EventsListView {
  getTemplate() {
    return getEventsListTemplate();
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
