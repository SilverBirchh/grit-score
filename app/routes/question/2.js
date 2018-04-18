import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { get } from '@ember/object';
export default Route.extend({
	session: service(),

	store: service(),

	model() {
		return this.modelFor('question');
	},
});
