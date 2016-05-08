import Ember from 'ember';

export default Ember.Controller.extend({
  settings: Ember.inject.service('settings'),

  actions: {
    newBattle() {
      this.transitionToRoute('init');
    }
  }
});
