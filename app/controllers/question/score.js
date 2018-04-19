import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
	rotate: computed('model.gritScore', function() {
		const score = this.get('model.gritScore');
    const scorePercent = (score / 5) * 100;


    if (scorePercent && scorePercent < 50) {
      const right = 'display: none';
      const left = `transform: rotate(${(scorePercent * 3.6)}deg)`
      const clip = 'clip: rect(0, 1em, 1em, 0.5em);';
      return {
        left,
        right,
        clip
      };
    } else {
      const right = `transform: rotate(180deg)`
      const left = `transform: rotate(${(scorePercent * 3.6)}deg)`
      const clip = 'rect(auto, auto, auto, auto);'
      return {
        left,
        right,
        clip
      };
    }

	}),
});
