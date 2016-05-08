import Ember from 'ember';

export default Ember.Component.extend({
  conquestArchive: Ember.inject.service('conquest-archive'),
  percentage: Ember.computed('conquestArchive.assaults.@each.completed', function() {
    let totalAssaults = this.get('conquestArchive.assaults').length;
    let completedAssaults = _.where(this.get('conquestArchive.assaults'), { completed: true }).length;
    let result = (completedAssaults / totalAssaults) * 100;

    console.log('XXX: [services/progress-bar.js].percentage(), totalAssaults', totalAssaults);
    console.log('XXX: [services/progress-bar.js].percentage(), completedAssaults', completedAssaults);
    console.log('XXX: [services/progress-bar.js].percentage(), result', result);

    return result;
  })
});
