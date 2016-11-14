import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      ascents: this.get('store').query('ascent', {
      })
    });
  }
});
