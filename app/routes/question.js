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
						storyPointsCompletedPerSprint: 0,
					})
					.save();
			});
	},
});
