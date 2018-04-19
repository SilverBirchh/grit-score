import Route from '@ember/routing/route';
import { get } from '@ember/object';
import { inject as service } from '@ember/service';

export default Route.extend({
  session: service(),

  store: service(),

  afterModel(model) {
    this.calculateGritScore(model);
  },

  calculateGritScore(model) {
    const attrs = [];
    model.eachAttribute(attr => {
      if (
        [
          'newIdeasDistractMe',
          'setBacksDontDiscourage',
          'changingGoals',
          'hardWorker',
          'difficultMaintainingFocus',
          'finishWhatIStart',
          'interestsChange',
          'diligent',
          'obsessedButGaveUp',
          'overcomeSetBacks'
        ].includes(attr)
      ) {
        const attrValue = get(this.modelFor('question'), attr);
        attrs.push(attrValue);
      }
    });

    const score = attrs.reduce(reducer) / 10;
    const id = this.get('session.currentUser.uid');

    this.get('store')
      .findRecord('user', id)
      .then(function(user) {
        user.set('gritScore', score);
        user.save();
      });
  }
});

const reducer = (accumulator, currentValue) => accumulator + currentValue;
