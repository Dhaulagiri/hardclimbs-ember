import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      medias: this.get('store').query('media', {
      })
    });
  }
});
