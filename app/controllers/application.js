import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    newBattle() {
      this.transitionToRoute('init');
    }
  }
});
