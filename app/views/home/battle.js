var View = require('../view').View,
  template = require('./templates/battle');
var app = require('app');
// var UserList = require('models/user');
var Player = require('./player');

module.exports = View.extend({
  template: template,
  initialize: function() {
    var user1 = app.userList.getRandomUser();
    var user2 = app.userList.getRandomUser();

    this.setView('.one', new Player({model: user1}));
    this.setView('.two', new Player({model: user2}));
  },
  afterRender: function() {
    _.each(this.views, function(view) {
      console.log(view);
      view.render();
    });
    // console.log(this.$('.one').length);
  }

});
