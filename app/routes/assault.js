import Ember from 'ember';

export default Ember.Route.extend({
  conquestArchive: Ember.inject.service('conquest-archive'),

  model(params) {
    let assault = this.get('conquestArchive').getAssault(params.assault_id);
    console.log("XXX: [routes/assault.js].model(), assault", assault);
    return assault;
  }
});
