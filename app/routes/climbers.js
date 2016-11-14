import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      climbers: this.get('store').query('climber', {
      })
    });
  }
});
