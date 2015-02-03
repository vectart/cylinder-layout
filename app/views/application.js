import Ember from 'ember';

export default Ember.View.extend({
  classNames: ['application'],

  initIScroll: function () {
    var scroll = new IScroll(this.element.parentNode, {
      mouseWheel: true,
      probeType: 3
    });

    window.scroll = scroll;
  }.on('didInsertElement')
});
