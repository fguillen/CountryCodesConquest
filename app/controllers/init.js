import Ember from 'ember';

export default Ember.Controller.extend({
  conquestArchive: Ember.inject.service('conquest-archive'),

  actions: {
    initialize() {
      console.log("XXX: initialize()");
      this.get('conquestArchive').initialize();
      this.transitionToRoute('assault', this.get('conquestArchive').nextAssault().id);
    }
  }
});
