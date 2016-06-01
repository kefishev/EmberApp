/*import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({});*/

import LSAdapter from 'ember-localstorage-adapter';

export default LSAdapter.extend({
  namespace: 'emberapp'
});
