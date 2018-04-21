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
            gender: '',
            age: 0,
            newIdeasDistractMe: 0,
            setBacksDontDiscourage: 0,
            changingGoals: 0,
            hardWorker: 0,
            difficultMaintainingFocus: 0,
            finishWhatIStart: 0,
            interestsChange: 0,
            diligent: 0,
            obsessedButGaveUp: 0,
            overcomeSetBacks: 0,
            gritScore: 0,
            hoursWorkedWeek: 0,
            extraCourses: false,
            workExtraHours: 0,
            motivatedForWork: 0,
            prideInWork: 0,
            callOffSick: 0,
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
