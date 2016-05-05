import Ember from 'ember';

export default Ember.Controller.extend({
  userAnswer: null,

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

      console.log('XXX: model', this.get('model'));
    }
  }
});
