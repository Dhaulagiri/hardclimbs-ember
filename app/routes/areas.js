import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      areas: this.get('store').query('area', {
      })
    });
  }
});
