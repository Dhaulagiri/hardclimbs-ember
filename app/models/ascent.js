import DS from 'ember-data';

const { attr, belongsTo, hasMany } = DS;

export default DS.Model.extend({
  date: attr('date'),
  dateEnd: attr('date'),
  ascentNumber: attr('number'),
  note: attr('string'),
  ascentNumberFormat: attr('string'),

  climber: belongsTo('climber'),
  climb: belongsTo('climb'),
  medias: hasMany('media'),
  grade: belongsTo('grade')
});
