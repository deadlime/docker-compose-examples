import m from 'mithril';
import ItemForm from './ItemForm';
import ItemList from './ItemList';

module.exports = {
  view: function() {
    return [
      m('h1', 'Simple Application Example'),
      m('h2', 'Add new item'),
      m(ItemForm),
      m('h2', 'Current items'),
      m(ItemList),
    ];
  }
};
