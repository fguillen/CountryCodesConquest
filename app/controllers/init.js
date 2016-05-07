import Ember from 'ember';

export default Ember.Controller.extend({
  conquestArchive: Ember.inject.service('conquest-archive'),

  actions: {
    init() {
      console.log("XXX: init()");
      this.get('conquestArchive').init();
      this.transitionToRoute('assault', this.get('conquestArchive').nextAssault().id);
    }
  }
});
