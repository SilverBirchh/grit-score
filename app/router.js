import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('learn');
  this.route('purpose');
  this.authenticatedRoute('question');

  this.route('question', function() {
    this.route('1');
  });
});

export default Router;
