var View = require('../view').View,
  template = require('./templates/player');

module.exports = View.extend({
  template: template,
  initialize: function() {
    console.log(this.model);
  },
  serialize: function() {
    return this.model.toJSON();
  }
});
