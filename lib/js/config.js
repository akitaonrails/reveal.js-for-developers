// More info https://github.com/hakimel/reveal.js#configuration
Reveal.initialize({
	controls: true,
	progress: true,
	history: true,
	center: true,

  transition: 'slide', // none/fade/slide/convex/concave/zoom

	// More info https://github.com/hakimel/reveal.js#dependencies
	dependencies: [
		{ src: 'lib/js/classList.js', condition: function() { return !document.body.classList; } },
		{ src: 'plugin/markdown/marked.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
		{ src: 'plugin/markdown/markdown.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
		{ src: 'plugin/zoom-js/zoom.js', async: true },
    { src: 'plugin/notes/notes.js', async: true },

    { src: 'bower_components/jquery/dist/jquery.min.js' },
    { src: 'bower_components/highlightjs/highlight.pack.min.js'},
    { src: 'plugin/sampler/sampler.js' },
    { src: 'bower_components/reveal-code-focus/reveal-code-focus.js', async: true, callback: function() { RevealCodeFocus(); } },
    { src: 'bower_components/d3/d3.min.js' },
    { src: 'bower_components/function-plot/dist/function-plot.js' },
    { src: 'bower_components/reveal.js-plugins/chart/Chart.min.js' },
    { src: 'bower_components/reveal.js-plugins/chart/csv2chart.js' },
    { src: 'bower_components/reveal.js-plugins/anything/anything.js' },
    { src: 'plugin/mermaid/mermaid.js', async: true },
    { src: 'plugin/elapsed-time-bar/elapsed-time-bar.js', async: true },
    { src: 'plugin/tagcloud/tagcloud.js', async: true },
    { src: 'bower_components/reveal.js-menu/menu.js', async: true }
  ],

  anything: [
    {
      className: "plot",
      defaults: {
        width: 500,
        height: 500,
        grid: true
      },
      initialize: (function(container, options) {
        options.target = "#" + container.id;
        functionPlot(options);
      })
    }
  ],

  chart: {
    defaults: {
      global: {
        title: { fontColor: "#FFF" },
      },
      legend: {
        labels: { fontColor: "#FFF" },
      },
      scale: {
        scaleLabel: { fontColor: "#FFF" },
        gridLines: { color: "#FFF", zeroLineColor: "#FFF" },
        ticks: { fontColor: "#FFF" },
      }
    },
    line: { borderColor: [ "rgba(20,220,220,.8)" , "rgba(220,120,120,.8)", "rgba(20,120,220,.8)" ], "borderDash": [ [5,10], [0,0] ]},
    bar: { backgroundColor: [ "rgba(20,220,220,.8)" , "rgba(220,120,120,.8)", "rgba(20,120,220,.8)" ]},
    pie: { backgroundColor: [ ["rgba(0,0,0,.8)" , "rgba(220,20,20,.8)", "rgba(20,220,20,.8)", "rgba(220,220,20,.8)", "rgba(20,20,220,.8)"] ]},
    radar: { borderColor: [ "rgba(20,220,220,.8)" , "rgba(220,120,120,.8)", "rgba(20,120,220,.8)" ]},
  },

  // Configuration for elapsed-time-bar plugin
  allottedTime: 2 * 60 * 1000, // 2 minutes
  progressBarHeight: 6,
  // barColor: 'rgb(200, 0, 0)',
  // pausedBarColor: 'rgba(200,0,0, .6)',
  keyboard: {
    // type Enter to pause/resume time bar
    13: function() {
      ElapsedTimeBar.isPaused ? ElapsedTimeBar.resume() : ElapsedTimeBar.pause();
    },
    // type r to reset time bar
    82: function() {
      ElapsedTimeBar.reset();
    }
  },

});
