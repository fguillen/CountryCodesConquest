import Ember from 'ember';

export default Ember.Route.extend({
  conquestArchive: Ember.inject.service('conquest-archive'),

  model() {
    return this.get('conquestArchive').nextAssault();
  }
});
