var CSSDataTypes =
{
  "<absolute-size>": {
    "link": "https://www.w3.org/TR/2013/CR-css-fonts-3-20131003/#absolute-size-value",
    "animtype-link": "",
    "testcases": [["xx-small", "xx-large"]]
  },
  "<angle>": {
    "link": "https://www.w3.org/TR/css3-values/#angles",
    "animtype-link": "",
    "testcases": [["10deg", "50deg"]]
  },
  "<animateable-feature>": {
    "link": "https://www.w3.org/TR/2015/CR-css-will-change-1-20151203/#typedef-animateable-feature",
    "animtype-link": "",
    "testcases": [["scroll-position", "contents"]]
  },
  "<alphavalue>": {
    "link": "https://www.w3.org/TR/2011/REC-css3-color-20110607/#opacity",
    "animtype-link": "https://www.w3.org/TR/2011/REC-css3-color-20110607/#opacity",
    "testcases": [[0.1, 0.5]]
  },
  "<attachment>": {
    "link": "https://www.w3.org/TR/2014/CR-css3-background-20140909/#ltattachmentgt",
    "animtype-link": "",
    "testcases": [["fixed", "local"]]
  },
  "<baseline-position>": {
    "link": "https://www.w3.org/TR/2014/WD-css-align-3-20141218/#typedef-baseline-position",
    "animtype-link": "",
    "testcases": [["baseline", "last-baseline"]]
  },
  "<baseline-shift>": {
    "link": "https://www.w3.org/TR/2014/WD-css-align-3-20141218/#typedef-baseline-position",
    "animtype-link": "",
    "testcases": [["baseline", "last-baseline"]]
  },
  "<basic-shape>": {
    "link": "https://www.w3.org/TR/2015/WD-css-inline-3-20150917/#propdef-baseline-shift",
    "animtype-link": "",
    "testcases": ["<percentage>", "<length>"]
  },
  "<bg-position>": {
    "link": "https://www.w3.org/TR/2005/WD-css3-background-20050216/#ltbg-positiongt",
    "animtype-link": "",
    "testcases": ["<percentage>", "<length>", ["left", "center"]]
  },
  "<bg-image>": {
    "link": "https://www.w3.org/TR/2014/CR-css3-background-20140909/#ltbg-imagegt",
    "animtype-link": "",
    "testcases": ["<image>"]
  },
  "<bg-size>": {
    "link": "https://www.w3.org/TR/2014/CR-css3-background-20140909/#ltbg-sizegt",
    "animtype-link": "",
    "testcases": ["<length>", "<percentage>", ["contain", "cover"]]
  },
  "<blend-mode>": {
    "link": "https://www.w3.org/TR/2015/CR-compositing-1-20150113/#ltblendmodegt",
    "animtype-link": "",
    "testcases": [["multiply", "screen"]]
  },
  "<border-style>": {
    "link": "https://www.w3.org/TR/CSS2/tables.html#table-border-styles",
    "animtype-link": "",
    "testcases": [["none", "dotted"]]
  },
  "<border-width>": {
    "link": "https://www.w3.org/TR/CSS21/box.html#value-def-border-width",
    "animtype-link": "",
    "testcases": ["<length>", ["thin", "thick"]] // same as <line-width>
  },
  "<box>": {
    "link": "https://www.w3.org/TR/2014/CR-css3-background-20140909/#ltboxgt",
    "animtype-link": "",
    "testcases": [["padding-box", "content-box"]]
  },
  "<content-distribution>": {
    "link": "https://www.w3.org/TR/2014/WD-css-align-3-20141218/#typedef-content-distribution",
    "animtype-link": "",
    "testcases": [["space-between", "space-around"]]
  },
  "<color>": {
    "link": "https://drafts.csswg.org/css-color-3/#valuea-def-color",
    "animtype-link": "https://drafts.csswg.org/css-transitions/#animtype-color",
    "testcases": [["yellow", "green"]]
  },
  "<col-width>": {
    "link": "https://www.w3.org/TR/2015/NOTE-css-template-3-20150326/#ltcol-widthgt",
    "animtype-link": "",
    "testcases": ["<length>", "<percentage>"]
  },
  "<clip-source>": {
    "link": "https://www.w3.org/TR/2014/CR-css-masking-1-20140826/#typedef-clip-source",
    "animtype-link": "",
    "testcases": ["<url>"]
  },
  "<compositing-operator>": {
    "link": "https://www.w3.org/TR/2014/CR-css-masking-1-20140826/#typedef-compositing-operator",
    "animtype-link": "",
    "testcases": [["add", "subtract"]]
  },
  "<content-list>": {
    "link": "https://www.w3.org/TR/2014/WD-css-gcpm-3-20140513/#content-list",
    "animtype-link": "",
    "testcases": [["content(text)", "content(after)"]]
  },
  "<content-position>": {
    "link": "https://www.w3.org/TR/2014/WD-css-align-3-20141218/#typedef-content-position",
    "animtype-link": "",
    "testcases": [["flex-start", "flex-end"]]
  },
  "<dasharray>": {
    "link": "https://www.w3.org/TR/2015/WD-svg-strokes-20150409/#DataTypeDasharray",
    "animtype-link": "https://www.w3.org/TR/2015/WD-svg-strokes-20150409/#DataTypeDasharray",
    "testcases": ["<length>", "<percentage>", "<number>"]
  },
  "<east-asian-variant-values>": {
    "link": "https://www.w3.org/TR/2013/CR-css-fonts-3-20131003/#east-asian-variant-values",
    "animtype-link": "",
    "testcases": [["jis78", "jis83"]]
  },
  "<east-asian-width-values>": {
    "link": "https://www.w3.org/TR/2013/CR-css-fonts-3-20131003/#east-asian-width-values",
    "animtype-link": "",
    "testcases": [["full-width", "proportional-width"]]
  },
  "<family-name>": {
    "link": "https://www.w3.org/TR/2013/CR-css-fonts-3-20131003/#family-name-value",
    "animtype-link": "",
    "testcases": [["Helvetica", "Verdana"]]
  },
  "<feature-tag-value>": {
    "link": "https://www.w3.org/TR/2013/CR-css-fonts-3-20131003/#feature-tag-value",
    "animtype-link": "",
    "testcases": ["<ident>"]
  },
  "<filter-function-list>": {
    "link": "https://www.w3.org/TR/2014/WD-filter-effects-1-20141125/#typedef-filter-function-list",
    "animtype-link": "",
    "testcases": [["blur(10px)", "blur(50px)"]]
  },
  "<font-stretch>": {
    "link": "http://www.w3.org/TR/2013/CR-css-fonts-3-20131003/#propdef-font-stretch",
    "animtype-link": "https://www.w3.org/TR/2013/CR-css-fonts-3-20131003/#font-stretch-animation",
    "testcases": [["condensed", "expanded"]]
  },
  "<font-weight>": {
    "link": "https://www.w3.org/TR/2013/CR-css-fonts-3-20131003/#propdef-font-weight",
    "animtype-link": "https://drafts.csswg.org/css-transitions/#animtype-font-weight",
    "testcases": [["bold", "lighter"], [100, 500]]
  },
  "<frequency>": {
    "link": "https://www.w3.org/TR/2011/REC-CSS2-20110607/aural.html#value-def-frequency",
    "animtype-link": "https://www.w3.org/TR/2011/REC-CSS2-20110607/aural.html#value-def-frequency",
    "testcases": [["100hz", "200hz"]]
  },
  "<generic-family>": {
    "link": "https://www.w3.org/TR/2013/CR-css-fonts-3-20131003/#generic-family-value",
    "animtype-link": "",
    "testcases": [["serif", "sans-serif"]]
  },
  "<geometry-box>": {
    "link": "https://www.w3.org/TR/2014/CR-css-masking-1-20140826/#typedef-geometry-box",
    "animtype-link": "",
    "testcases": [["fill-box", "stroke-box"]]
  },
  "<grid-line>": {
    "link": "https://www.w3.org/TR/2015/WD-css-grid-1-20150917/#typedef-grid-line",
    "animtype-link": "",
    "testcases": ["<integer>"]
  },
  "<ident>": {
    "link": "https://drafts.csswg.org/mediaqueries-4/#typedef-ident",
    "animtype-link": "",
    "testcases": [["ident-1", "ident-2"]]
  },
  "<integer>": {
    "link": "https://www.w3.org/TR/css3-values/#integers",
    "animtype-link": "https://drafts.csswg.org/css-transitions/#animtype-integer",
    "testcases": [[1, 5]]
  },
  "<image>": {
    "link": "https://www.w3.org/TR/2014/CR-css3-background-20140909/#ltimagegt",
    "animtype-link": "",
    "testcases": ["<url>"]
  },
  "<isolation-mode>": {
    "link": "https://www.w3.org/TR/2015/CR-compositing-1-20150113/#isolated-propid",
    "animtype-link": "",
    "testcases": [["auto", "isolate"]]
  },
  "<item-position>": {
    "link": "https://www.w3.org/TR/2014/WD-css-align-3-20141218/#typedef-item-position",
    "animtype-link": "",
    "testcases": [["flex-start", "flex-end"]]
  },
  "<knockout-offset>": {
    "link": "https://www.w3.org/TR/2015/WD-svg-markers-20150409/#DataTypeKnockoutOffset",
    "animtype-link": "",
    "testcases": ["<length>", "<percentage>", "<number>"]
  },
  "<length>": {
    "link": "https://www.w3.org/TR/css3-values/#lengths",
    "animtype-link": "https://drafts.csswg.org/css-transitions/#animtype-lpcalc",
    "testcases": [["10px", "50px"]]
  },
  "<line-style>": {
    "link": "https://www.w3.org/TR/2014/CR-css3-background-20140909/#ltline-stylegt",
    "animtype-link": "",
    "testcases": [["dotted", "solid"]]
  },
  "<line-width>": {
    "link": "https://www.w3.org/TR/2014/CR-css3-background-20140909/#ltline-widthgt",
    "animtype-link": "",
    "testcases": ["<length>", ["thin", "thick"]]
  },
  "<marker-ref>": {
    "link": "https://www.w3.org/TR/2015/WD-svg-markers-20150409/#DataTypeMarkerRef",
    "animtype-link": "https://www.w3.org/TR/2015/WD-svg-markers-20150409/#DataTypeMarkerRef",
    "testcases": ["<url>"]
  },
  "<mask-reference>": {
    "link": "https://www.w3.org/TR/2014/CR-css-masking-1-20140826/#typedef-mask-reference",
    "animtype-link": "",
    "testcases": ["<image>"]
  },
  "<masking-mode>": {
    "link": "http://www.w3.org/TR/2015/WD-motion-1-20150409/#propdef-motion-rotation",
    "animtype-link": "",
    "testcases": [["alpha", "luminance"]]
  },
  "<motion-rotation>": {
    "link": "https://www.w3.org/TR/2014/CR-css-masking-1-20140826/#typedef-masking-mode",
    "animtype-link": "",
    "testcases": [["auto 90deg", "reverse 45deg"]]
  },
  "<number>": {
    "link": "https://www.w3.org/TR/css3-values/#numbers",
    "animtype-link": "https://drafts.csswg.org/css-transitions/#animtype-number",
    "testcases": [[1, 5]]
  },
  "<paint>": {
    "link": "https://svgwg.org/svg2-draft/painting.html#SpecifyingPaint",
    "animtype-link": "https://svgwg.org/svg2-draft/painting.html#SpecifyingPaint",
    "testcases": [["context-fill", "context-stroke"]]
  },
  "<percentage>": {
    "link": "https://www.w3.org/TR/css3-values/#percentages",
    "animtype-link": "https://drafts.csswg.org/css-transitions/#animtype-percentage",
    "testcases": [["10%", "50%"]]
  },
  "<position>": {
    "link": "https://www.w3.org/TR/2014/CR-css3-background-20140909/#ltpositiongt",
    "animtype-link": "",
    "testcases": [["left", "right"], "<percentage>", "<length>"]
  },
  "<rectangle>": {
    "link": "https://www.w3.org/TR/2014/CR-css-masking-1-20140826/#funcdef-rect",
    "animtype-link": "https://drafts.csswg.org/css-transitions-1/#animtype-rect",
    "testcases":
      [["rect(10px, 10px, 10px, 10px)", "rect(50px, 50px, 50px, 50px)"]]
  },
  "<relative-size>": {
    "link": "https://www.w3.org/TR/2013/CR-css-fonts-3-20131003/#relative-size-value",
    "animtype-link": "",
    "testcases": [["larger", "smaller"]]
  },
  "<repeat-style>": {
    "link": "https://www.w3.org/TR/2014/CR-css3-background-20140909/#ltrepeat-stylegt",
    "animtype-link": "",
    "testcases": [["space", "round"]]
  },
  "<row-height>": {
    "link": "https://www.w3.org/TR/2015/NOTE-css-template-3-20150326/#ltrow-heightgt",
    "animtype-link": "",
    "testcases": ["<length>", "<percentage>"]
  },
  "<shadow>": {
    "link": "https://www.w3.org/TR/2014/CR-css3-background-20140909/#ltshadowgt",
    "animtype-link": "https://drafts.csswg.org/css-transitions/#animtype-shadow-list",
    "testcases": [["10px 10px", "50px 50px"]] //<length> <length>
  },
  "<single-animation-direction>": {
    "link": "https://www.w3.org/TR/2013/WD-css3-animations-20130219/#single-animation-direction",
    "animtype-link": "",
    "testcases": [["reverse", "alternate"]]
  },
  "<single-animation-fill-mode>": {
    "link": "https://www.w3.org/TR/2013/WD-css3-animations-20130219/#single-animation-fill-mode",
    "animtype-link": "",
    "testcases": [["reverse", "alternate"]]
  },
  "<single-animation-iteration-count>": {
    "link": "https://www.w3.org/TR/2013/WD-css3-animations-20130219/#single-animation-iteration-count",
    "animtype-link": "",
    "testcases": ["<number>"]
  },
  "<single-animation-name>": {
    "link": "https://www.w3.org/TR/2013/WD-css3-animations-20130219/#single-animation-name",
    "animtype-link": "",
    "testcases": ["<ident>"]
  },
  "<single-animation-play-state>": {
    "link": "https://www.w3.org/TR/2013/WD-css3-animations-20130219/#single-animation-play-state",
    "animtype-link": "",
    "testcases": [["running", "paused"]]
  },
  "<single-transition>": {
    "link": "https://www.w3.org/TR/2013/WD-css3-transitions-20131119/#single-transition",
    "animtype-link": "",
    "testcases": [["color 1s linear 1", "color 5s linear 5"]]
  },
  "<single-transition-property>": {
    "link": "https://www.w3.org/TR/2013/WD-css3-transitions-20131119/#single-transition-property",
    "animtype-link": "",
    "testcases": [["color", "background-color"]]
  },
  "<single-transition-timing-function>": {
    // same as <transition-timing-function>
    "link": "https://www.w3.org/TR/2013/WD-css3-transitions-20131119/#single-transition-timing-function",
    "animtype-link": "",
    "testcases": [["ease-in", "ease-out"]]
  },
  "<stroke-alignment>": {
    "link": "https://www.w3.org/TR/2015/WD-svg-strokes-20150409/#StrokeAlignmentProperty",
    "animtype-link": "",
    "testcases": [["center", "inner"]]
  },
  "<stroke-dashadjust>": {
    "link": "https://www.w3.org/TR/2015/WD-svg-strokes-20150409/#StrokeDashadjustProperty",
    "animtype-link": "",
    "testcases": [["stretch", "compress"]]
  },
  "<stroke-linecap>": {
    "link": "https://www.w3.org/TR/2015/WD-svg-strokes-20150409/#StrokeLinecapProperty",
    "animtype-link": "",
    "testcases": [["butt", "round"]]
  },
  "<stroke-linejoin>": {
    "link": "https://www.w3.org/TR/2015/WD-svg-strokes-20150409/#StrokeLinejoinProperty",
    "animtype-link": "",
    "testcases": [["miter", "miter-clip"]]
  },
  "<time>": {
    "link": "https://www.w3.org/TR/css3-values/#time",
    "animtype-link": "",
    "testcases": [["1s", "5s"]]
  },
  "<track-size>": {
    "link": "https://www.w3.org/TR/2015/WD-css-grid-1-20150917/#typedef-track-size",
    "animtype-link": "",
    "testcases": ["<length>"]
  },
  "<transform-function>": {
    "link": "https://www.w3.org/TR/2013/WD-css-transforms-1-20131126/#typedef-transform-function",
    "animtype-link": "",
    "testcases": [["translate(10px 10px)", "translate(50px 50px)"]]
  },
  "<transition-timing-function>": {
    "link": "https://www.w3.org/TR/2012/WD-css3-transitions-20120403/#transition-timing-function",
    "animtype-link": "",
    "testcases": [["ease-in", "ease-out"]]
  },
  "<url>": {
    "link": "https://www.w3.org/TR/css3-values/#url-value",
    "animtype-link": "",
    "testcases": [["url(test-1)", "url(test-2)"]]
  },
  "<visibility>": {
    "link": "https://www.w3.org/TR/2007/WD-css3-box-20070809/#visibility",
    "animtype-link": "https://drafts.csswg.org/css-transitions/#animtype-visibility",
    "testcases": [["visible", "hidden"]]
  },
  "<width>": {
    "link": "https://www.w3.org/TR/CSS2/visudet.html#propdef-width",
    "animtype-link": "",
    "testcases": ["<length>", "<percentage>", ["auto", "10px"]]
  }
};
