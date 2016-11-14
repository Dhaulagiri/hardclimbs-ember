import DS from 'ember-data';

const { attr, belongsTo, hasMany } = DS;

export default DS.Model.extend({
  name: attr('string'),
  stillHard: attr('boolean'),
  notes: attr('string'),
  slug: attr('string'),

  style: belongsTo('style'),
  grade: belongsTo('grade'),
  area: belongsTo('area'),
  climbers: hasMany('climber'),
  ascents: hasMany('ascent'),
});
