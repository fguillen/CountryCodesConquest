import Ember from 'ember';

export default Ember.Controller.extend({
  userResponse: null,

  actions: {
    resolveAssault() {
      console.log("XXX: userResponse", this.get('userResponse'));
    }
  }
});
