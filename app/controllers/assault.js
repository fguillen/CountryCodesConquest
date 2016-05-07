import Ember from 'ember';

export default Ember.Controller.extend({
  userAnswer: null,
  conquestArchive: Ember.inject.service('conquest-archive'),

  fieldClass: Ember.computed('model.result', function() {
    if(this.get('model.result') === null) { return ""; }
    if(this.get('model.result') === true) { return "has-success"; }
    if(this.get('model.result') === false) { return "has-error"; }
  }),

  nextAssault() {
    let assault = this.get('conquestArchive').nextAssault();
    this.set('userAnswer', null);

    if(assault) {
      this.transitionToRoute('assault', assault.id);
    } else {
      this.transitionToRoute('end');
    }
  },

  actions: {
    resolveAssault() {
      this.get('conquestArchive').resolveAssault(this.get('model'), this.get('userAnswer'));

      Ember.run.later(() => { this.nextAssault(); }, 1000);
    }
  }
});
