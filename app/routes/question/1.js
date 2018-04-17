import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { get } from '@ember/object';
export default Route.extend({
	session: service(),

	store: service(),

	model() {
		return this.modelFor('question');
	},

	actions: {
		saveGender() {
			const id = this.get('session.currentUser.uid');
			const gender = get(this.modelFor('question'), 'gender');

			this.get('store')
				.findRecord('user', id)
				.then(function(user) {
					user.set('gender', gender);
          user.save();
				});
		},
	},
});
