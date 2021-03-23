import EmberRouter from '@ember/routing/router';
import config from 'super-rentals/config/environment';

/**
 * This class manages what pages are available to the Router.
 */
export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

/**
 * Add a route named `about` which is accessible via URL. i.e. /about
 * the `path` object for contact route, explicity  creates a custom path we can use
 */
Router.map(function () {
  this.route('about');
  this.route('contact', { path: '/getting-in-touch' });
  this.route('error', { path: '/*' });
});
