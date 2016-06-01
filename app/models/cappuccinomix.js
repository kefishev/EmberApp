import DS from 'ember-data';

export default DS.Model.extend({
  prefName: DS.attr('string'),
  coffee: DS.attr('number'),
  sugar: DS.attr('number')
});
