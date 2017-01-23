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
		{ src: 'plugin/highlight/highlight.js', async: true, callback: function() { hljs.initHighlightingOnLoad(); } },
		{ src: 'plugin/zoom-js/zoom.js', async: true },
    { src: 'plugin/notes/notes.js', async: true },

    { src: 'bower_components/reveal.js-plugins/chart/Chart.min.js' },
    { src: 'bower_components/reveal.js-plugins/chart/csv2chart.js' },
    { src: 'bower_components/reveal.js-plugins/anything/anything.js' },
    { src: 'plugin/mermaid/mermaid.js' },
  ],

  anything: [
    {
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
});
