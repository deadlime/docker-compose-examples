import m from 'mithril';
import Item from '../models/Item';

let ItemForm = {
  save: function(e) {
    e.preventDefault();
    Item.create();
  },
  
  view: function() {
    return m('form', m('fieldset', [
      m('label[for="title"]', 'Title'),
      m('input[type="text"][id="title"]', {
        oninput: m.withAttr('value', Item.updateTitleToSave),
        value: Item.titleToSave
      }),
      m('input.button-primary[type="submit"][value="Save"]', {
        disabled: !Item.canSubmit(),
        onclick: ItemForm.save
      }),
    ]));
  }
};

module.exports = ItemForm;
