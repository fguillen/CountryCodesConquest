import Ember from 'ember';
import { v1 } from "ember-uuid";

export default Ember.Service.extend({
  numAssaults: 10,
  assaults: [],
  initialized: false,
  db: Ember.inject.service('db'),

  initialize: function() {
    this.get('assaults').clear();

    _.times(this.get('numAssaults'), () => {
      let assaultConfig = _.sample(this.get('db.challenges'));

      this.get('assaults').pushObject(
        {
          id: v1(),
          completed: false,
          userAnswer: null,
          result: null,
          question: assaultConfig.question,
          answer: assaultConfig.answer
        }
      );
    });

    this.set('initialized', true);
  },

  nextAssault: function() {
    let result = _.find(this.get('assaults'), (element) => { return !element.completed; });
    return result;
  },

  getAssault: function(assaultId) {
    let result = _.find(this.get('assaults'), (element) => { return assaultId === element.id; });
    return result;
  },

  resolveAssault: function(assault, userAnswer){
    Ember.set(assault, 'userAnswer', userAnswer.toUpperCase());

    if(assault.answer === assault.userAnswer){
      Ember.set(assault, 'result', true);
    } else {
      Ember.set(assault, 'result', false);
    }

    Ember.set(assault, 'completed', true);
  }
});
