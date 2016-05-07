import Ember from 'ember';

export default Ember.Service.extend({
  numAssaults: 10,
  assaults: [],
  db: Ember.inject.service('db'),

  init: function() {
    this.get('assaults').clear();

    _.times(this.get('numAssaults'), () => {
      let assaultConfig = _.sample(this.get('db.challenges'));

      this.get('assaults').pushObject(
        {
          completed: false,
          userAnswer: null,
          result: null,
          question: assaultConfig.question,
          answer: assaultConfig.answer
        }
      );
    });
  },

  nextAssault: function() {
    let result = _.find(this.get('assaults'), (element) => { return !element.completed; });
    return result;
  },

  resolveAssault: function(assault, userAnswer){
    Ember.set(assault, 'userAnswer', userAnswer);

    if(assault.answer === userAnswer){
      Ember.set(assault, 'result', true);
    } else {
      Ember.set(assault, 'result', false);
    }

    Ember.set(assault, 'completed', true);
  }
});
