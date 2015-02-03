import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'section',
  classNames: ['folding-section'],

  scheduleAnimation: function () {
    Ember.run.next(this.initAnimation.bind(this));
  }.on('didInsertElement'),

  initAnimation: function () {
    this.$().css({
      height: 100 + (Math.random() * 300)
    });

    var animationTop = TweenMax.to(this.get('element'), 1, { rotationX: 90, paused: true, ease: 'Circ', backgroundColor: '#CCC', transformOrigin: 'center bottom' });
    var animationBottom = TweenMax.to(this.get('element'), 1, { rotationX: -90, paused: true, ease: 'Circ', backgroundColor: '#CCC', transformOrigin: 'center top' });

    TweenMax.set(this.get('element'), { transformPerspective: 2000, rotationX: 0, force3D: true });

    this.set('animationTop', animationTop);
    this.set('animationBottom', animationBottom);
    window.scroll.on('scroll', this.rotate.bind(this));
    window.scroll.refresh();
  },

  rotate: function () {
    var height = this.$().height() * 1.28,
        diffTop = Math.max((window.scroll.y * -1) - this.element.offsetTop, 0),
        diffBottom = Math.max((this.element.offsetTop + this.element.clientHeight) - (window.scroll.y * -1 + window.scroll.wrapperHeight), 0);

    this.get('animationTop').seek(Math.min(diffTop / height, 1));
    this.get('animationBottom').seek(Math.min(diffBottom / height, 1));
  }
});
