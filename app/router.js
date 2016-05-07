import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('init', { path: '' });
  this.route('assault', { path: 'assault/:assault_id' });
  this.route('end');
});

export default Router;
