import DS from 'ember-data';

export default DS.Model.extend({
  newIdeasDistractMe: DS.attr('number'),
  setBacksDontDiscourage: DS.attr('number'),
  changingGoals: DS.attr('number'),
  hardWorker: DS.attr('number'),
  difficultMaintainingFocus: DS.attr('number'),
  finishWhatIStart: DS.attr('number'),
  interestsChange: DS.attr('number'),
  diligent: DS.attr('number'),
  obsessedButGaveUp: DS.attr('number'),
  overcomeSetBacks: DS.attr('number'),
  gritScore: DS.attr('number'),
  hoursWorkedWeek: DS.attr('number'),
  storyPointsCompletedPerSprint: DS.attr('number'),
});
