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
          userAnswer: null,
          result: null,
          config: assaultConfig
        }
      );
    });
  },

  nextAssault: function() {
    let result = _.find(this.get('assaults'), (element) => { return element.userAnswer == null; });
    console.log("XXX: result", result);
    return result;
  }
});
