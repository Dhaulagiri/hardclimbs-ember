import DS from 'ember-data';

const { attr, hasMany } = DS;

export default DS.Model.extend({
  name: attr('string'),
  country: attr('string'),
  slug: attr('string'),

  climbs: hasMany('climb'),
  ascents: hasMany('ascent'),
});
