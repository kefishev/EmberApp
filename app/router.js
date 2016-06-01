import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('about', { path: '/about' });
  this.route('snack', { path: '/snack' });
  this.route('beverage', { path: '/beverage' });
  this.route('snackserved', { path: '/snackserved' });
  this.route('beverageserved', { path: '/beverageserved' });
  this.route('coffee');
  this.route('coffeeserved');
  this.route('coffeemix');
  this.route('cappuccinomix');
});

export default Router;
