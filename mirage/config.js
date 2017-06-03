import config from '../config/environment';

export default function() {
  this.urlPrefix = config.api;
  this.namespace = config.namespace;
  this.timing = 100;

  this.get('areas');
  this.get('ascents');
  this.get('climbs');
  this.get('climbers');
  this.get('medias');

  if (config.api !== undefined) {
    this.passthrough('areas');
    this.passthrough('ascents');
    this.passthrough('climbs');
    this.passthrough('climbers');
    this.passthrough('medias');
  }
}
