import Ember from 'ember';

export default Ember.Component.extend({
  conquestArchive: Ember.inject.service('conquest-archive'),
  isSuperGood: Ember.computed.equal('conquestArchive.percentageRightAnswers', 100),
  isGood: Ember.computed('conquestArchive.percentageRightAnswers', function() {
    return this.get('conquestArchive.percentageRightAnswers') >= 80 && this.get('conquestArchive.percentageRightAnswers') < 100;
  }),
  isFine: Ember.computed('conquestArchive.percentageRightAnswers', function() {
    return this.get('conquestArchive.percentageRightAnswers') >= 60 && this.get('conquestArchive.percentageRightAnswers') < 80;
  }),
  isBad: Ember.computed('conquestArchive.percentageRightAnswers', function() {
    return this.get('conquestArchive.percentageRightAnswers') >= 40 && this.get('conquestArchive.percentageRightAnswers') < 60;
  }),
  isHorrible: Ember.computed('conquestArchive.percentageRightAnswers', function() {
    return this.get('conquestArchive.percentageRightAnswers') >= 0 && this.get('conquestArchive.percentageRightAnswers') < 40;
  }),
});
