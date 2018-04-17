import Route from '@ember/routing/route';
import { inject as service } from "@ember/service";

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
            age: -1,
						newIdeasDistractMe: -1,
						setBacksDontDiscourage: -1,
						changingGoals: -1,
						hardWorker: -1,
						difficultMaintainingFocus: -1,
						finishWhatIStart: -1,
						interestsChange: -1,
						diligent: -1,
						obsessedButGaveUp: -1,
						overcomeSetBacks: -1,
						gritScore: -1,
						hoursWorkedWeek: -1,
						storyPointsCompletedPerSprint: -1,
					})
					.save();
			});
	},
});
