import { templates, select, settings, classNames } from '../settings.js';
import utils from '../utils.js';

export class Booking {
  constructor(element) {

    const thisBooking = this;
    thisBooking.render(element);
    thisBooking.initWidgets();
    thisBooking.getData();
  }
}

render(element){
  const thisBooking = this;
  const generatedHTML = templates.bookingWidget();
  thisBooking.dom = {};
  thisBooking.dom.wrapper = element;
  thisBooking.dom.wrapper.innerHTML = generatedHTML;
  thisBooking.dom.peopleAmount = thisBooking.dom.wrapper.querySelector(select.booking.peopleAmount);
  thisBooking.dom.hoursAmount = thisBooking.dom.wrapper.querySelector(select.booking.hoursAmount);
};
