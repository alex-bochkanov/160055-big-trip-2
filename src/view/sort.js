import AbstractView from '../framework/view/abstract-view.js';

function createSortElementTemplate(sort) {
  const {type} = sort;

  return (
    `<div class="trip-sort__item  trip-sort__item--${type}">
    <input id="sort-${type}" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-${type}">
    <label class="trip-sort__btn" for="sort-${type}">${type}</label>
  </div>`
  );
}

function createSortTemplate(sortItems) {
  return (`<form class="trip-events__trip-sort  trip-sort" action="#" method="get">
  ${sortItems.map((sort) => createSortElementTemplate(sort)).join('')}
</form>`);
}

export default class SortView extends AbstractView {
  #sorts = null;

  constructor({sorts}) {
    super();
    this.#sorts = sorts;
  }

  get template() {
    return createSortTemplate(this.#sorts);
  }
}
