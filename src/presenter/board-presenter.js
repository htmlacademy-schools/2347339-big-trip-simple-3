import RouteEventView from '../view/route-event-view.js';
import EventsListView from '../view/events-list.js';
import EditForm from '../view/edit-form-view.js';
import { render } from '../render.js';

export default class BoardPresenter {

  eventsListComponent = new EventsListView();

  constructor({boardContainer}) {
    this.boardContainer = boardContainer;
  }

  init() {
    render(this.eventsListComponent, this.boardContainer);
    render(new EditForm(), this.eventsListComponent.getElement());

    for (let i = 0; i < 3; i++) {
      render(new RouteEventView(), this.eventsListComponent.getElement());
    }
  }

}
