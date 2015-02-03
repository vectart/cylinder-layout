import Ember from 'ember';

export default Ember.Component.extend({
  prepareSections: function () {
    var sections = this.$('> article > section'),
        height = this.$().height();

  }.on('didInsertElement')
});
