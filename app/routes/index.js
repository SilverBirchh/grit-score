import Route from '@ember/routing/route';

export default Route.extend({
	actions: {
		start() {
      const provider = 'anonymous';

			this.get('session')
				.close()
				.then(() => {
					this.get('session')
						.open('firebase', {
							provider: provider,
						})
						.then(() => {
							this.transitionTo('question');
						})
						.catch((err) => {
							console.log(err);
						});
				})
				.catch(() => {
					this.get('session')
						.open('firebase', {
							provider: provider,
						})
						.then(() => {
							this.transitionTo('question');
						})
						.catch((err) => {
              console.log(err);
						});
				});
		},
	},
});
