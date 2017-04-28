import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  topic: DS.attr(),
  question: DS.attr(),
  desc: DS.attr()
});
