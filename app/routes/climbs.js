import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      climbs: this.get('store').query('climb', {
        include: 'style,grade'
      })
    });
  }
});
