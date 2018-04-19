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

  color: computed('model.gritScore', function() {
    const score = this.get('model.gritScore');

    if (score > 0 && score <=1) {
      return 'red'
    }
    else if (score > 1 && score <=2) {
      return 'orange'
    }
    else if (score > 2 && score <=3) {
      return 'purple'
    }
    else if (score > 3 && score <=4) {
      return 'blue'
    }
    else if (score > 4 && score <=5) {
      return 'green'
    }
  }),
});
