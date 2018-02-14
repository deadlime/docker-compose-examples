import m from 'mithril';

let Item = {
  list: [],
  titleToSave: '',
  
  updateTitleToSave: function(title) {
    Item.titleToSave = title;
  },
  
  canSubmit: function() {
    return Item.titleToSave.length > 0;
  },
  
  loadList: function() {
    m.request({
      method: 'GET',
      url: '/api/items'
    })
    .then(result => Item.list = result);
  },
  
  create: function() {
    m.request({
      method: 'PUT',
      url: '/api/items',
      data: { title: Item.titleToSave }
    })
    .then(result => Item.loadList());

    Item.titleToSave = '';
  },
  
  delete: function(id) {
    m.request({
      method: 'DELETE',
      url: '/api/items/' + id
    })
    .then(result => Item.loadList());
  }
};

module.exports = Item;
