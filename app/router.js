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
    this.route('2');
    this.route('3');
    this.route('4');
    this.route('5');
    this.route('6');
    this.route('7');
    this.route('8');
    this.route('9');
    this.route('10');
    this.route('11');
    this.route('12');
    this.route('13');
    this.route('score');
    this.route('14');
    this.route('15');
    this.route('16');
    this.route('17');
    this.route('18');
  });
  this.route('info');
});

export default Router;
