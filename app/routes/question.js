import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { get } from '@ember/object';

export default Route.extend({
  session: service(),

  store: service(),

  model() {
    const uid = this.get('session.currentUser.uid');
    return this.get('store')
      .find('user', uid)
      .catch(() => {
        return this.get('store')
          .createRecord('user', {
            id: uid,
            gender: 'male',
            age: 1,
            newIdeasDistractMe: 3,
            setBacksDontDiscourage: 3,
            changingGoals: 3,
            hardWorker: 3,
            difficultMaintainingFocus: 3,
            finishWhatIStart: 3,
            interestsChange: 3,
            diligent: 3,
            obsessedButGaveUp: 3,
            overcomeSetBacks: 3,
            gritScore: 1,
            hoursWorkedWeek: 1,
            extraCourses: false,
            workExtraHours: 3,
            motivatedForWork: 3,
            prideInWork: 3,
            callOffSick: 3,
          })
          .save();
      });
  },

  actions: {
    save(prop) {
      const id = this.get('session.currentUser.uid');
      const propValue = get(this.modelFor('question'), prop);

      this.get('store')
        .findRecord('user', id)
        .then(function(user) {
          user.set(prop, propValue);
          user.save();
        });
    },

    next() {
      let route = Number(
        this.router.currentRouteName.substring(
          this.router.currentRouteName.indexOf('.') + 1
        )
      );
      this.transitionTo(`question.${++route}`);
    },

    previous() {
      let route = Number(
        this.router.currentRouteName.substring(
          this.router.currentRouteName.indexOf('.') + 1
        )
      );
      this.transitionTo(`question.${--route}`);
    }
  }
});
