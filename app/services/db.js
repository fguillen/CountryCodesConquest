import Ember from 'ember';

export default Ember.Service.extend({
  challenges: [
    { question: "Spain", answer: "ES" },
    { question: "United States", answer: "US" },
    { question: "Germany", answer: "DE" }
  ]
});
