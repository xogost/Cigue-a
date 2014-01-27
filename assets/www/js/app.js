App = Ember.Application.create();

App.Router.map(function() {
	this.route("index", {path: "/"});
	this.route("order", {path: "/order"});
});

/*App.IndexRoute = Ember.Route.extend({
  model: function() {
    return ['red', 'yellow', 'blue'];
  }
});*/

App.IndexRoute = Ember.Route.extend({
	redirect: function() {
        // this redirects / to /dashboard
        this.transitionTo('index');
    }
});
