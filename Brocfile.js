/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');

var app = new EmberApp();

app.import('bower_components/iscrolltest/build/iscroll-probe.js');
app.import('bower_components/gsap/src/uncompressed/TweenMax.js');
app.import('bower_components/gsap/src/uncompressed/TimelineMax.js');
app.import('bower_components/gsap/src/uncompressed/easing/EasePack.js');
app.import('bower_components/oridomi/oridomi.js');

module.exports = app.toTree();
