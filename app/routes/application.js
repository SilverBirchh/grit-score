import Route from '@ember/routing/route';

export default Route.extend({
  actions: {
    accessDenied: function() {
      this.transitionTo("index");
    }
  }
});
