import Ember from 'ember';

export default Ember.Route.extend({
  conquestArchive: Ember.inject.service('conquest-archive'),

  beforeModel() {
    if(!this.get('conquestArchive.initialized')) {
      this.transitionTo('init');
    }
  },

  model() {
    return this.get('conquestArchive.assaults');
  }
});
