import DS from 'ember-data';

const { attr, hasMany } = DS;

export default DS.Model.extend({
  url: attr('string'),
  description: attr('string'),
  pullQuote: attr('string'),

  ascents: hasMany('ascent'),
  climbs: hasMany('climb')
});
