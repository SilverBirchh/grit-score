import DS from 'ember-data';

export default DS.Model.extend({
  gender: DS.attr('string'),
  age: DS.attr('number'),
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
  extraCourses: DS.attr('Boolean'),
});
// 
// Do you do any courses outside of work?
// How many hours do you work in a given day?
// How do you react if your boss asks you to stay late and do some extra work?
// I am motivated for work when I wake up in the morning
// Do you take pride in your work?
// Do you ever call off sick when you aren't sick?
