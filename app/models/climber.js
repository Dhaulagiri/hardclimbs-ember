import DS from 'ember-data';

const { attr, hasMany } = DS;

export default DS.Model.extend({
  firstName: attr('string'),
  lastName: attr('string'),
  sex: attr('string'),
  dob: attr('date'),
  height: attr('string'),
  slug: attr('string'),

  climbs: hasMany('climb'),
  ascents: hasMany('ascent'),
});
