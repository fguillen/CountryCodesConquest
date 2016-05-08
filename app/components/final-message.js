import Ember from 'ember';

export default Ember.Component.extend({
  messages: {
    'isSuperGood': [ 'Perfect!', 'You rocks!', 'This is incredible!', 'Fantastic!', 'Superb!'],
    'isGood': [ 'Yeah!', 'This is Good!', 'Well Done!'],
    'isFine': [ 'Not bad!', 'You can do better!', 'so-so!'],
    'isBad': [ 'Buff!', 'Try again!', 'You need to improve!'],
    'isHorrible': [ 'Really?', 'This is horrible!', 'Go home!']
  },
  conquestArchive: Ember.inject.service('conquest-archive'),
  state: Ember.computed('conquestArchive.percentageRightAnswers', function() {
    if(this.get('conquestArchive.percentageRightAnswers') === 100) {
      return 'isSuperGood';
    } else if(this.get('conquestArchive.percentageRightAnswers') >= 80 && this.get('conquestArchive.percentageRightAnswers') < 100) {
      return 'isGood';
    } else if(this.get('conquestArchive.percentageRightAnswers') >= 60 && this.get('conquestArchive.percentageRightAnswers') < 80) {
      return 'isFine';
    } else if(this.get('conquestArchive.percentageRightAnswers') >= 40 && this.get('conquestArchive.percentageRightAnswers') < 60) {
      return 'isBad';
    } else {
      return 'isHorrible';
    }
  }),
  isSuperGood: Ember.computed.equal('state', 'isSuperGood'),
  isGood: Ember.computed.equal('state', 'isGood'),
  isFine: Ember.computed.equal('state', 'isFine'),
  isBad: Ember.computed.equal('state', 'isBad'),
  isHorrible: Ember.computed.equal('state', 'isHorrible'),
  message: Ember.computed('state', function() {
    return _.sample(this.get('messages')[this.get('state')]);
  })
});
