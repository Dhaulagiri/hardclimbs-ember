import { Model, belongsTo, hasMany } from 'ember-cli-mirage';

export default Model.extend({
  clkimber: belongsTo(),
  grade: belongsTo(),
  climb: belongsTo(),
  medias: hasMany()
});
