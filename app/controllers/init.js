import Ember from 'ember';
// import ConquestArchive from 'country-codes-conquest/app/services/conquest-archive';


export default Ember.Controller.extend({
  conquestArchive: Ember.inject.service('conquest-archive'),

  actions: {
    init() {
      console.log("XXX: init()");
      this.get('conquestArchive').init();
      this.transitionTo('assault');
    }
  }
});
