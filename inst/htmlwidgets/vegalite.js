HTMLWidgets.widget({

  name: "vegalite",

  type: "output",

  factory: function(el, width, height) {

    return {

      renderValue: function(x) {

        var spec = JSON.parse(x.spec);
        var tooltip_options = x.tooltip_options;
        var embed_options = x.embed_options;

        vegaEmbed(el, spec, embed_options).then(function(result) {
          // access view as result.view
          vegaTooltip.vegaLite(result.view, spec, tooltip_options);
        }).catch(console.error);
      },

      resize: function(width, height) {

      }

    };
  }
});
