import Ember from 'ember';
// import DB from 'contry-codes-conquest/app/services/db';

export default Ember.Service.extend({
  numAssaults: 10,
  assaults: [],
  db: Ember.inject.service('db'),

  init: function() {
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
  }
});
