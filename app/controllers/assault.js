import Ember from 'ember';

export default Ember.Controller.extend({
  userAnswer: '',
  conquestArchive: Ember.inject.service('conquest-archive'),

  isSuccess: Ember.computed('model.result', function() {
    return this.get('model.result') === true;
  }),

  isError: Ember.computed('model.result', function() {
    return this.get('model.result') === false;
  }),

  isCompleted: Ember.computed.bool('model.completed'),

  isAnswerStillNotFilled: Ember.computed('userAnswer', function() {
    return this.get('userAnswer').length < 2;
  }),

  nextAssault() {
    let assault = this.get('conquestArchive').nextAssault();
    this.set('userAnswer', '');

    if(assault) {
      this.transitionToRoute('assault', assault.id);
    } else {
      this.transitionToRoute('end');
    }
  },

  actions: {
    resolveAssault() {
      this.get('conquestArchive').resolveAssault(this.get('model'), this.get('userAnswer'));

      Ember.run.later(() => { this.nextAssault(); }, 500);
    }
  }
});
