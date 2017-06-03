import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('ascents');
  this.route('climbs');
  this.route('climbers');
  this.route('areas');
  this.route('medias');
});

export default Router;
