import Ember from 'ember';

export default Ember.Controller.extend({
  userAnswer: null,

  fieldClass: Ember.computed('model.result', function() {
    if(this.get('model.result') == null) return "";
    if(this.get('model.result') == true) return "has-success";
    if(this.get('model.result') == false) return "has-error";
  }),

  actions: {
    resolveAssault() {
      console.log("XXX: userAnswer", this.get('userAnswer'));
      this.set('model.userAnswer', this.get('userAnswer'));

      if(this.get('model.config.answer') == this.get('userAnswer')){
        console.log('XXX: User response correct!');
        this.set('model.result', true);
      } else {
        console.log('XXX: User response error');
        this.set('model.result', false);
      }

      this.set('model.completed', true);
      console.log('XXX: model', this.get('model'));
    },

    nextAssault() {
      this.transitionToRoute('assault');
    }
  }
});
