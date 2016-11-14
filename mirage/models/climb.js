import { Model, belongsTo, hasMany } from 'ember-cli-mirage';

export default Model.extend({
  style: belongsTo(),
  grade: belongsTo(),
  area: belongsTo(),
  climbers: hasMany(),
  ascents: hasMany()
});
