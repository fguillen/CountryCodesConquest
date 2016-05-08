import Ember from 'ember';

export default Ember.Component.extend({
  conquestArchive: Ember.inject.service('conquest-archive'),
  percentage: Ember.computed.alias('conquestArchive.percentageCompleted')
});
