var View = require('./view').View;
var template = require('./templates/home-layout');
var User = require('models/user');
var app = require('app');

module.exports = View.extend({
  template: template,
  id: 'layout',

  initialize: function() {
    this.on('route', function(route) {
      this.renderContent(route);
    }, this);
    // var Header = require('./home/header'),
    //   Link = require('models/link');
    // var links = new Link.Collection();
    // links.initializeHeaderLinks();
    // var header = new Header({collection: links});
    // console.log(User);
    // console.log(User.Data);
    app.userList = new User.Collection();
    app.userList.add(User.Data);
    // userList.fetch();
    // this.setView('header', header, true);
  },
  renderContent: function(page) {
    page = page || 'index';
    var Content = require('./home/' + page);
    var content = new Content();
    this.setView('content', content).render();
  }
});
