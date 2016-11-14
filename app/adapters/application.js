import JSONAPIAdapter from 'ember-data/adapters/json-api';
import config from 'hardclimbs-ember/config/environment';

export default JSONAPIAdapter.extend({
  namespace: config.namespace,
  host: config.api
});
