import m from 'mithril';
import Item from '../models/Item';

let ItemList = {
  oninit: Item.loadList,

  view: function() {
    return Item.list.length > 0 ? ItemList.viewList() : ItemList.viewNoList();
  },
  
  viewList: function() {
    return m('table', [
      m('thead', m('tr', [
        m('th', 'Id'),
        m('th', 'Title'),
        m('th', 'Actions'),
      ])),
      m('tbody', Item.list.map(item => m('tr', [
        m('td', item.id),
        m('td', item.title),
        m('td', m('a.button', { onclick: function() { Item.delete(item.id); } }, 'Delete')),
      ]))),
    ]);
  },
  
  viewNoList: function() {
    return m('p', 'No items.');
  }
};

module.exports = ItemList;
