var CSSProperties =
{
  // Data format
  // "$property-name": {
  //  "link": "$link-to-spec",
  //  "test-datatypes": ["<$datatyoe>" or ["start value", "end value"], ...],
  //  "animatables": ["<$datatyoe>", ...], // by individual spec.
  //  "need-prefix": { "$BrowserName1": "$prefix1", "$BrowserName2": "$prefix2" }
  // },
  // also please ref CSSDataTypes.js

  "align-content": {
    "link": "https://drafts.csswg.org/css-align/#propdef-align-content",
    "test-datatypes": ["<content-position>"] //@see CSSDataTypes.js
  },
  "align-items": {
    "link": "https://drafts.csswg.org/css-align/#propdef-align-items",
    "test-datatypes": ["<item-position>"],
    "animatables": []
  },
  "align-self": {
    "link": "https://drafts.csswg.org/css-align/#propdef-align-self",
    "test-datatypes": ["<item-position>"],
    "animatables": []
  },
  "alignment-baseline": {
    "link": "https://drafts.csswg.org/css-inline/#alignment-baseline-property",
    "test-datatypes": [["text-bottom", "text-top"]],
    "animatables": []
  },
  "animation-delay": {
    "link": "https://drafts.csswg.org/css-animations-1/#animation-delay",
    "test-datatypes": ["<time>"],
    "animatables": []
  },
  "animation-direction": {
    "link": "https://drafts.csswg.org/css-animations-1/#animation-direction",
    "test-datatypes": ["<single-animation-direction>"],
    "animatables": []
  },
  "animation-duration": {
    "link": "https://drafts.csswg.org/css-animations-1/#animation-duration",
    "test-datatypes": ["<time>"],
    "animatables": []
  },
  "animation-fill-mode": {
    "link": "https://drafts.csswg.org/css-animations-1/#animation-fill-mode",
    "test-datatypes": ["<single-animation-fill-mode>"],
    "animatables": []
  },
  "animation-iteration-count": {
    "link": "https://drafts.csswg.org/css-animations-1/#animation-iteration-count",
    "test-datatypes": ["<single-animation-iteration-count>"],
    "animatables": []
  },
  "animation-name": {
    "link": "https://drafts.csswg.org/css-animations-1/#animation-name",
    "test-datatypes": ["<single-animation-name>"],
    "animatables": []
  },
  "animation-play-state": {
    "link": "https://drafts.csswg.org/css-animations-1/#animation-play-state",
    "test-datatypes": ["<single-animation-play-state>"],
    "animatables": []
  },
  "animation-timing-function": {
    "link": "https://drafts.csswg.org/css-animations-1/#animation-timing-function",
    "test-datatypes": ["<transition-timing-function>"],
    "animatables": []
  },
  "appearance": {
    "link": "https://drafts.csswg.org/css-ui-4/#propdef-appearance",
    "test-datatypes": [["auto", "none"]],
    "animatables": []
  },
  "azimuth": {
    "link": "http://www.w3.org/TR/2011/REC-CSS2-20110607/aural.html#propdef-azimuth",
    "test-datatypes": ["<angle>", ["center-left", "center-right"]],
    "animatables": []
  },
  "backface-visibility": {
    "link": "https://drafts.csswg.org/css-transforms/#propdef-backface-visibility",
    "test-datatypes": [["visible", "hidden"]],
    "animatables": []
  },
  "background-attachment": {
    "link": "https://drafts.csswg.org/css-backgrounds-3/#background-attachment",
    "test-datatypes": ["<attachment>"],
    "animatables": []
  },
  "background-blend-mode": {
    "link": "https://drafts.fxtf.org/compositing-1/#propdef-background-blend-mode",
    "test-datatypes": ["<blend-mode>"],
    "animatables": []
  },
  "background-clip": {
    "link": "https://drafts.csswg.org/css-backgrounds-3/#background-clip",
    "test-datatypes": ["<box>"],
    "animatables": []
  },
  "background-color": {
    "link": "https://drafts.csswg.org/css-backgrounds-3/#background-color",
    "test-datatypes": ["<color>"],
    "animatables": ["<color>"],
    "css-transition-animatables": ["<color>"]
  },
  "background-image": {
    "link": "https://drafts.csswg.org/css-backgrounds-3/#background-image",
    "test-datatypes": ["<bg-image>"],
    "animatables": []
  },
  "background-origin": {
    "link": "https://drafts.csswg.org/css-backgrounds-3/#background-origin",
    "test-datatypes": ["<box>"],
    "animatables": []
  },
  "background-position": {
    "link": "https://drafts.csswg.org/css-backgrounds-3/#background-position",
    "test-datatypes": ["<position>"],
    "animatables": ["<length>", "<percentage>"],
    "css-transition-animatables": ["<length>", "<percentage>"]
  },
  "background-repeat": {
    "link": "https://drafts.csswg.org/css-backgrounds-3/#background-repeat",
    "test-datatypes": ["<repeat-style>"],
    "animatables": []
  },
  "background-size": {
    "link": "https://drafts.csswg.org/css-backgrounds-3/#background-size",
    "test-datatypes": ["<bg-size>"],
    "animatables": ["<length>", "<percentage>"]
  },
  "baseline-shift": {
    "link": "https://drafts.csswg.org/css-inline/#propdef-baseline-shift",
    "test-datatypes": ["<length>", "<percentage>", ["sub", "super"]],
    "animatables": []
  },
  "border-bottom-color": {
    "link": "https://drafts.csswg.org/css-backgrounds-3/#border-bottom-color",
    "test-datatypes": ["<color>"],
    "animatables": ["<color>"],
    "css-transition-animatables": ["<color>"]
  },
  "border-bottom-left-radius": {
    "link": "https://drafts.csswg.org/css-backgrounds-3/#border-bottom-left-radius",
    "test-datatypes": ["<length>", "<percentage>"],
    "animatables": ["<length>", "<percentage>"]
  },
  "border-bottom-right-radius": {
    "link": "https://drafts.csswg.org/css-backgrounds-3/#border-bottom-right-radius",
    "test-datatypes": ["<length>", "<percentage>"],
    "animatables": ["<length>", "<percentage>"]
  },
  "border-bottom-style": {
    "link": "https://drafts.csswg.org/css-backgrounds-3/#border-bottom-style",
    "test-datatypes": ["<line-style>"],
    "animatables": []
  },
  "border-bottom-width": {
    "link": "https://drafts.csswg.org/css-backgrounds-3/#border-bottom-width",
    "test-datatypes": ["<line-width>"],
    "animatables": ["<length>"],
    "css-transition-animatables": ["<color>"]
  },
  "border-boundary": {
    "link": "https://drafts.csswg.org/css-round-display/#border-boundary-property",
    "test-datatypes": [["parent", "display"]],
    "animatables": []
  },
  "border-collapse": {
    "link": "https://drafts.csswg.org/css-tables/#propdef-border-collapse",
    "test-datatypes": [["collapse", "separate"]],
    "animatables": []
  },
  "border-image-outset": {
    "link": "https://drafts.csswg.org/css-backgrounds-3/#border-image-outset",
    "test-datatypes": ["<length>", "<number>"],
    "animatables": []
  },
  "border-image-repeat": {
    "link": "https://drafts.csswg.org/css-backgrounds-3/#border-image-repeat",
    "test-datatypes": [["stretch", "repeat"]],
    "animatables": []
  },
  "border-image-slice": {
    "link": "https://drafts.csswg.org/css-backgrounds-3/#border-image-slice",
    "test-datatypes": ["<number>", "<percentage>"],
    "animatables": []
  },
  "border-image-source": {
    "link": "https://drafts.csswg.org/css-backgrounds-3/#border-image-source",
    "test-datatypes": ["<image>"],
    "animatables": []
  },
  "border-image-width": {
    "link": "https://drafts.csswg.org/css-backgrounds-3/#border-image-width",
    "test-datatypes": ["<length>", "<percentage>", "<number>"],
    "animatables": []
  },
  "border-left-color": {
    "link": "https://drafts.csswg.org/css-backgrounds-3/#border-left-color",
    "test-datatypes": ["<color>"],
    "animatables": ["<color>"],
    "css-transition-animatables": ["<color>"]
  },
  "border-left-style": {
    "link": "https://drafts.csswg.org/css-backgrounds-3/#border-left-style",
    "test-datatypes": ["<line-style>"],
    "animatables": []
  },
  "border-left-width": {
    "link": "https://drafts.csswg.org/css-backgrounds-3/#border-left-width",
    "test-datatypes": ["<line-width>"],
    "animatables": ["<length>"],
    "css-transition-animatables": ["<length>"]
  },
  "border-right-color": {
    "link": "https://drafts.csswg.org/css-backgrounds-3/#border-right-color",
    "test-datatypes": ["<color>"],
    "animatables": ["<color>"],
    "css-transition-animatables": ["<color>"]
  },
  "border-right-style": {
    "link": "https://drafts.csswg.org/css-backgrounds-3/#border-right-style",
    "test-datatypes": ["<line-style>"],
    "animatables": []
  },
  "border-right-width": {
    "link": "https://drafts.csswg.org/css-backgrounds-3/#border-right-width",
    "test-datatypes": ["<line-width>"],
    "animatables": ["<length>"],
    "css-transition-animatables": ["<length>"]
  },
  "border-spacing": {
    "link": "https://drafts.csswg.org/css-tables/#propdef-border-spacing",
    "test-datatypes": ["<length>"],
    "animatables": [],
    "css-transition-animatables": ["<length>"]
  },
  "border-top-color": {
    "link": "https://drafts.csswg.org/css-backgrounds-3/#border-top-color",
    "test-datatypes": ["<color>"],
    "animatables": ["<color>"],
    "css-transition-animatables": ["<color>"]
  },
  "border-top-left-radius": {
    "link": "https://drafts.csswg.org/css-backgrounds-3/#border-top-left-radius",
    "test-datatypes": ["<length>", "<percentage>"],
    "animatables": ["<length>", "<percentage>"]
  },
  "border-top-right-radius": {
    "link": "https://drafts.csswg.org/css-backgrounds-3/#border-top-right-radius",
    "test-datatypes": ["<length>", "<percentage>"],
    "animatables": ["<length>", "<percentage>"]
  },
  "border-top-style": {
    "link": "https://drafts.csswg.org/css-backgrounds-3/#border-top-style",
    "test-datatypes": ["<line-style>"],
    "animatables": []
  },
  "border-top-width": {
    "link": "https://drafts.csswg.org/css-backgrounds-3/#border-top-width",
    "test-datatypes": ["<line-width>"],
    "animatables": ["<length>"],
    "css-transition-animatables": ["<length>"]
  },
  "box-decoration-break": {
    "link": "https://drafts.csswg.org/css-break/#propdef-box-decoration-break",
    "test-datatypes": [["slice", "clone"]],
    "animatables": []
  },
  "box-shadow": {
    "link": "https://drafts.csswg.org/css-backgrounds-3/#box-shadow",
    "test-datatypes": ["<shadow>"],
    "animatables": []
  },
  "box-sizing": {
    "link": "https://drafts.csswg.org/css-ui-4/#box-sizing",
    "test-datatypes": [["content-box", "border-box"]],
    "animatables": []
  },
  "box-snap": {
    "link": "https://drafts.csswg.org/css-line-grid/#propdef-box-snap",
    "test-datatypes": [["block-start", "block-end"]],
    "animatables": []
  },
  "box-suppress": {
    "link": "https://drafts.csswg.org/css-display/#propdef-box-suppress",
    "test-datatypes": [["show", "discard"]],
    "animatables": []
  },
  "break-after": {
    "link": "https://drafts.csswg.org/css-break/#propdef-break-after",
    "test-datatypes": [["auto", "avoid"]],
    "animatables": []
  },
  "break-before": {
    "link": "https://drafts.csswg.org/css-break/#propdef-break-before",
    "test-datatypes": [["auto", "avoid"]],
    "animatables": []
  },
  "break-inside": {
    "link": "https://drafts.csswg.org/css-break/#propdef-break-inside",
    "test-datatypes": [["auto", "avoid"]],
    "animatables": []
  },
  "caption-side": {
    "link": "https://drafts.csswg.org/css-tables/#propdef-caption-side",
    "test-datatypes": [["top", "bottom"]],
    "animatables": []
  },
  "caret-color": {
    "link": "https://drafts.csswg.org/css-ui-4/#caret-color",
    "test-datatypes": ["<color>"],
    "animatables": []
  },
  "caret-shape": {
    "link": "https://drafts.csswg.org/css-ui-4/#propdef-caret-shape",
    "test-datatypes": [["auto", "bar"]],
    "animatables": []
  },
  "chains": {
    "link": "https://drafts.csswg.org/css-template/#chains0",
    "test-datatypes": ["<ident>"],
    "animatables": []
  },
  "clear": {
    "link": "https://drafts.csswg.org/css-page-floats/#propdef-clear",
    "test-datatypes": [["inline-start", "inline-end"]],
    "animatables": []
  },
  "clip": {
    "link": "https://drafts.fxtf.org/css-masking-1/#propdef-clip",
    "test-datatypes": ["<rectangle>"],
    "animatables": [],
    "css-transition-animatables": ["<rectangle>"]
  },
  "clip-path": {
    "link": "https://drafts.fxtf.org/css-masking-1/#propdef-clip-path",
    "test-datatypes": ["<clip-source>", "<basic-shape>", "<geometry-box>"],
    "animatables": ["<basic-shape>"]
  },
  "clip-rule": {
    "link": "https://drafts.fxtf.org/css-masking-1/#propdef-clip-rule",
    "test-datatypes": [["nonzero", "evenodd"]],
    "animatables": []
  },
  "color": {
    "link": "https://drafts.csswg.org/css-color-4/#propdef-color",
    "test-datatypes": ["<color>"],
    "animatables": ["<color>"]
  },
  "color-interpolation-filters": {
    "link": "https://drafts.fxtf.org/filters/#propdef-color-interpolation-filters",
    "test-datatypes": [["auto", "sRGB"]],
    "animatables": []
  },
  "column-count": {
    "link": "https://drafts.csswg.org/css-multicol/#propdef-column-count",
    "test-datatypes": ["<integer>"],
    "animatables": [],
    "need-prefix": { "Firefox": "-moz" }
  },
  "column-fill": {
    "link": "https://drafts.csswg.org/css-multicol/#propdef-column-fill",
    "test-datatypes": [["auto", "balance"]],
    "animatables": [],
    "need-prefix": { "Firefox": "-moz" }
  },
  "column-gap": {
    "link": "https://drafts.csswg.org/css-multicol/#propdef-column-gap",
    "test-datatypes": ["<length>"],
    "animatables": [],
    "need-prefix": { "Firefox": "-moz" }
  },
  "column-rule-color": {
    "link": "https://drafts.csswg.org/css-multicol/#propdef-column-rule-color",
    "test-datatypes": ["<color>"],
    "animatables": [],
    "need-prefix": { "Firefox": "-moz" }
  },
  "column-rule-style": {
    "link": "https://drafts.csswg.org/css-multicol/#propdef-column-rule-style",
    "test-datatypes": ["<border-style>"],
    "animatables": [],
    "need-prefix": { "Firefox": "-moz" }
  },
  "column-rule-width": {
    "link": "https://drafts.csswg.org/css-multicol/#propdef-column-rule-width",
    "test-datatypes": ["<border-width>"],
    "animatables": [],
    "need-prefix": { "Firefox": "-moz" }
  },
  "column-span": {
    "link": "https://drafts.csswg.org/css-multicol/#propdef-column-span",
    "test-datatypes": [["none", "all"]],
    "animatables": [],
    "need-prefix": { "Firefox": "-moz" }
  },
  "column-width": {
    "link": "https://drafts.csswg.org/css-multicol/#propdef-column-width",
    "test-datatypes": [],
    "animatables": [],
    "need-prefix": { "Firefox": "-moz" }
  },
  "content": {
    "link": "https://drafts.csswg.org/css-content-3/#propdef-content",
    "test-datatypes": [["normal", "none"]],
    "animatables": []
  },
  "counter-increment": {
    "link": "https://drafts.csswg.org/css-lists-3/#propdef-counter-increment",
    "test-datatypes": ["<ident>"],
    "animatables": []
  },
  "counter-reset": {
    "link": "https://drafts.csswg.org/css-lists-3/#propdef-counter-reset",
    "test-datatypes": ["<ident>"],
    "animatables": []
  },
  "counter-set": {
    "link": "https://drafts.csswg.org/css-lists-3/#propdef-counter-set",
    "test-datatypes": ["<ident>"],
    "animatables": []
  },
  "crop": {
    "link": "https://www.w3.org/TR/css3-content/#crop",
    "test-datatypes": ["<rectangle>"],
    "animatables": []
  },
  "cue-after": {
    "link": "https://www.w3.org/TR/css3-speech/#cue-after",
    "test-datatypes": ["<url>"],
    "animatables": []
  },
  "cue-before": {
    "link": "https://www.w3.org/TR/css3-speech/#cue-before",
    "test-datatypes": ["<url>"],
    "animatables": []
  },
  "cursor": {
    "link": "https://drafts.csswg.org/css2/ui.html#propdef-cursor",
    "test-datatypes": [["pointer", "wait"]],
    "animatables": []
  },
  "direction": {
    "link": "https://drafts.csswg.org/css-writing-modes-3/#propdef-direction",
    "test-datatypes": [["ltr", "rtl"]],
    "animatables": []
  },
  "display": {
    "link": "https://drafts.csswg.org/css-display/#propdef-display",
    "test-datatypes": [["inline", "block"]],
    "animatables": []
  },
  "dominant-baseline": {
    "link": "https://drafts.csswg.org/css-inline/#propdef-dominant-baseline",
    "test-datatypes": [["auto", "ideographic"]],
    "animatables": []
  },
  "elevation": {
    "link": "https://www.w3.org/TR/2011/REC-CSS2-20110607/aural.html#propdef-elevation",
    "test-datatypes": ["<angle>", ["below", "above"]],
    "animatables": []
  },
  "empty-cells": {
    "link": "https://drafts.csswg.org/css-tables/#propdef-empty-cells",
    "test-datatypes": [["show", "hide"]],
    "animatables": []
  },
  "filter": {
    "link": "https://drafts.fxtf.org/filters/#propdef-filter",
    "test-datatypes": ["<filter-function-list>"],
    "animatables": []
  },
  "flex-basis": {
    "link": "https://drafts.csswg.org/css-flexbox/#propdef-flex-basis",
    "test-datatypes": ["<width>"],
    "animatables": ["<width>"]
  },
  "flex-direction": {
    "link": "https://drafts.csswg.org/css-flexbox/#propdef-flex-direction",
    "test-datatypes": [["row", "row-reverse"]],
    "animatables": []
  },
  "flex-grow": {
    "link": "https://drafts.csswg.org/css-flexbox/#propdef-flex-grow",
    "test-datatypes": ["<number>"],
    "animatables": ["<number>"]
  },
  "flex-shrink": {
    "link": "https://drafts.csswg.org/css-flexbox/#propdef-flex-shrink",
    "test-datatypes": ["<number>"],
    "animatables": ["<number>"]
  },
  "flex-wrap": {
    "link": "https://drafts.csswg.org/css-flexbox/#propdef-flex-wrap",
    "test-datatypes": [["nowrap", "wrap"]],
    "animatables": []
  },
  "float": {
    "link": "https://drafts.csswg.org/css-page-floats/#propdef-float",
    "test-datatypes": [["left", "right"]],
    "animatables": []
  },
  "float-defer": {
    "link": "https://drafts.csswg.org/css-page-floats/#propdef-float-defer",
    "test-datatypes": ["<integer>", ["last", "none"]],
    "animatables": []
  },
  "float-offset": {
    "link": "https://drafts.csswg.org/css-page-floats/#propdef-float-offset",
    "test-datatypes": ["<length>", "<percentage>"],
    "animatables": []
  },
  "float-reference": {
    "link": "https://drafts.csswg.org/css-page-floats/#propdef-float-reference",
    "test-datatypes": [["inline", "column"]],
    "animatables": []
  },
  "flood-color": {
    "link": "https://drafts.fxtf.org/filters/#propdef-flood-color",
    "test-datatypes": ["<color>"],
    "animatables": ["<color>"]
  },
  "flood-opacity": {
    "link": "https://drafts.fxtf.org/filters/#propdef-flood-opacity",
    "test-datatypes": ["<alphavalue>", "<percentage>"],
    "animatables": ["<alphavalue>", "<percentage>"]
  },
  "flow": {
    "link": "https://drafts.csswg.org/css-template/#flow0",
    "test-datatypes": ["<ident>"],
    "animatables": []
  },
  "flow-from": {
    "link": "https://drafts.csswg.org/css-regions/#propdef-flow-from",
    "test-datatypes": ["<ident>"],
    "animatables": []
  },
  "flow-into": {
    "link": "https://drafts.csswg.org/css-regions/#propdef-flow-into",
    "test-datatypes": ["<ident>"],
    "animatables": []
  },
  "font-family": {
    "link": "https://drafts.csswg.org/css-fonts-3/#propdef-font-family",
    "test-datatypes": ["<family-name>", "<generic-family>"],
    "animatables": []
  },
  "font-kerning": {
    "link": "https://drafts.csswg.org/css-fonts-3/#propdef-font-kerning",
    "test-datatypes": [["auto", "normal"]],
    "animatables": []
  },
  "font-language-override": {
    "link": "https://drafts.csswg.org/css-fonts-3/#propdef-font-language-override",
    "test-datatypes": ["<ident>"],
    "animatables": []
  },
  "font-size": {
    "link": "https://drafts.csswg.org/css-fonts-3/#propdef-font-size",
    "test-datatypes":
      ["<absolute-size>", "<relative-size>", "<length>", "<percentage>"],
    "animatables": ["<length>"],
    "css-transition-animatables": ["<length>"]
  },
  "font-size-adjust": {
    "link": "https://drafts.csswg.org/css-fonts-3/#propdef-font-size-adjust",
    "test-datatypes": ["<number>"],
    "animatables": ["<number>"]
  },
  "font-stretch": {
    "link": "https://drafts.csswg.org/css-fonts-3/#propdef-font-stretch",
    "test-datatypes": ["<font-stretch>"],
    "animatables": ["<font-stretch>"]
  },
  "font-style": {
    "link": "https://drafts.csswg.org/css-fonts-3/#propdef-font-style",
    "test-datatypes": [["italic", "oblique"]],
    "animatables": []
  },
  "font-synthesis": {
    "link": "https://drafts.csswg.org/css-fonts-3/#propdef-font-synthesis",
    "test-datatypes": [["none", "weight style"]],
    "animatables": []
  },
  "font-variant-alternates": {
    "link": "https://drafts.csswg.org/css-fonts-3/#propdef-font-variant-alternates",
    "test-datatypes": [["swash(unknown)", "stylistic(unknown)"]],
    "animatables": []
  },
  "font-variant-caps": {
    "link": "https://drafts.csswg.org/css-fonts-3/#propdef-font-variant-caps",
    "test-datatypes": [["small-caps", "unicase"]],
    "animatables": []
  },
  "font-variant-east-asian": {
    "link": "https://drafts.csswg.org/css-fonts-3/#propdef-font-variant-east-asian",
    "test-datatypes": ["<east-asian-variant-values>", "<east-asian-width-values>"],
    "animatables": []
  },
  "font-variant-ligatures": {
    "link": "https://drafts.csswg.org/css-fonts-3/#propdef-font-variant-ligatures",
    "test-datatypes": [["common-ligatures", "no-common-ligatures"]],
    "animatables": []
  },
  "font-variant-numeric": {
    "link": "https://drafts.csswg.org/css-fonts-3/#propdef-font-variant-numeric",
    "test-datatypes": [["lining-nums", "oldstyle-nums"]],
    "animatables": []
  },
  "font-variant-position": {
    "link": "https://drafts.csswg.org/css-fonts-3/#propdef-font-variant-position",
    "test-datatypes": [["sub", "super"]],
    "animatables": []
  },
  "font-weight": {
    "link": "https://drafts.csswg.org/css-fonts-3/#propdef-font-weight",
    "test-datatypes": ["<font-weight>"],
    "animatables": ["<font-weight>"],
    "css-transition-animatables": ["<font-weight>"]
  },
  "footnote-display": {
    "link": "https://drafts.csswg.org/css-gcpm/#propdef-footnote-display",
    "test-datatypes": [["block", "inline"]],
    "animatables": []
  },
  "footnote-policy": {
    "link": "https://drafts.csswg.org/css-gcpm/#propdef-footnote-policy",
    "test-datatypes": [["auto", "line"]],
    "animatables": []
  },
  "glyph-orientation-vertical": {
    "link": "https://drafts.csswg.org/css-writing-modes-3/#propdef-glyph-orientation-vertical",
    "test-datatypes": [["0deg", "90deg"]],
    "animatables": []
  },
  "grid-auto-columns": {
    "link": "https://drafts.csswg.org/css-grid/#propdef-grid-auto-columns",
    "test-datatypes": ["<track-size>"],
    "animatables": []
  },
  "grid-auto-flow": {
    "link": "https://drafts.csswg.org/css-grid/#propdef-grid-auto-flow",
    "test-datatypes": [["row", "column"]],
    "animatables": []
  },
  "grid-auto-rows": {
    "link": "https://drafts.csswg.org/css-grid/#propdef-grid-auto-rows",
    "test-datatypes": ["<track-size>"],
    "animatables": []
  },
  "grid-column": {
    "link": "https://drafts.csswg.org/css-grid/#propdef-grid-column",
    "test-datatypes": ["<grid-line>"],
    "animatables": []
  },
  "grid-column-end": {
    "link": "https://drafts.csswg.org/css-grid/#propdef-grid-column-end",
    "test-datatypes": ["<grid-line>"],
    "animatables": []
  },
  "grid-column-gap": {
    "link": "https://drafts.csswg.org/css-grid/#propdef-grid-column-gap",
    "test-datatypes": ["<length>"],
    "animatables": []
  },
  "grid-column-start": {
    "link": "https://drafts.csswg.org/css-grid/#propdef-grid-column-start",
    "test-datatypes": ["<grid-line>"],
    "animatables": []
  },
  "grid-row-end": {
    "link": "https://drafts.csswg.org/css-grid/#propdef-grid-row-end",
    "test-datatypes": ["<grid-line>"],
    "animatables": []
  },
  "grid-row-gap": {
    "link": "https://drafts.csswg.org/css-grid/#propdef-grid-row-gap",
    "test-datatypes": ["<length>"],
    "animatables": []
  },
  "grid-row-start": {
    "link": "https://drafts.csswg.org/css-grid/#propdef-grid-row-start",
    "test-datatypes": ["<grid-line>"],
    "animatables": []
  },
  "grid-template-areas": {
    "link": "https://drafts.csswg.org/css-template/#grid-template-areas",
    "test-datatypes": ["<ident>"],
    "animatables": []
  },
  "grid-template-columns": {
    "link": "https://drafts.csswg.org/css-template/#grid-template-columns",
    "test-datatypes": ["<col-width>"],
    "animatables": []
  },
  "grid-template-rows": {
    "link": "https://drafts.csswg.org/css-template/#grid-template-rows",
    "test-datatypes": ["<row-height>"],
    "animatables": []
  },
  "hanging-punctuation": {
    "link": "https://drafts.csswg.org/css-text-3/#propdef-hanging-punctuation",
    "test-datatypes": [["first", "last"]],
    "animatables": []
  },
  "height": {
    "link": "https://www.w3.org/TR/2016/WD-CSS22-20160412/visudet.html#propdef-height",
    "test-datatypes": ["<length>", "<percentage>"],
    "animatables": ["<length>", "<percentage>"],
    "css-transition-animatables": ["<length>", "<percentage>"]
  },
  "hyphenate-character": {
    "link": "https://drafts.csswg.org/css-text-4/#propdef-hyphenate-character",
    "test-datatypes": ["<ident>"],
    "animatables": []
  },
  "hyphenate-limit-chars": {
    "link": "https://drafts.csswg.org/css-text-4/#propdef-hyphenate-limit-chars",
    "test-datatypes": ["<integer>"],
    "animatables": []
  },
  "hyphenate-limit-last": {
    "link": "https://drafts.csswg.org/css-text-4/#propdef-hyphenate-limit-last",
    "test-datatypes": [["always", "column"]],
    "animatables": []
  },
  "hyphenate-limit-lines": {
    "link": "https://drafts.csswg.org/css-text-4/#propdef-hyphenate-limit-lines",
    "test-datatypes": ["<integer>"],
    "animatables": []
  },
  "hyphenate-limit-zone": {
    "link": "https://drafts.csswg.org/css-text-4/#propdef-hyphenate-limit-zone",
    "test-datatypes": ["<length>", "<percentage>"],
    "animatables": []
  },
  "hyphens": {
    "link": "https://drafts.csswg.org/css-text-3/#propdef-hyphens",
    "test-datatypes": [["manual", "auto"]],
    "animatables": []
  },
  "image-orientation": {
    "link": "https://drafts.csswg.org/css-images-3/#propdef-image-orientation",
    "test-datatypes": ["<angle>"],
    "animatables": []
  },
  "image-rendering": {
    "link": "https://drafts.csswg.org/css-images-3/#propdef-image-rendering",
    "test-datatypes": [["crisp-edges", "pixelated"]],
    "animatables": []
  },
  "image-resolution": {
    "link": "https://drafts.csswg.org/css-images-3/#propdef-image-resolution",
    "test-datatypes": [["100dpi", "500dpi"]],
    "animatables": []
  },
  "initial-letter": {
    "link": "https://drafts.csswg.org/css-inline/#propdef-initial-letter",
    "test-datatypes": ["<number>"],
    "animatables": []
  },
  "initial-letter-align": {
    "link": "https://drafts.csswg.org/css-inline/#propdef-initial-letter-align",
    "test-datatypes": [["alphabetic", "ideographic"]],
    "animatables": []
  },
  "initial-letter-wrap": {
    "link": "https://drafts.csswg.org/css-inline/#propdef-initial-letter-wrap",
    "test-datatypes": ["<length>", ["first", "all"]],
    "animatables": []
  },
  "isolation": {
    "link": "https://drafts.fxtf.org/compositing-1/#propdef-isolation",
    "test-datatypes": ["<isolation-mode>"],
    "animatables": []
  },
  "justify-content": {
    "link": "https://drafts.csswg.org/css-align/#propdef-justify-content",
    "test-datatypes": ["<baseline-position>", "<content-distribution>"],
    "animatables": []
  },
  "justify-items": {
    "link": "https://drafts.csswg.org/css-align/#propdef-justify-items",
    "test-datatypes": ["<baseline-position>", "<item-position>"],
    "animatables": []
  },
  "justify-self": {
    "link": "https://drafts.csswg.org/css-align/#propdef-justify-self",
    "test-datatypes": ["<baseline-position>"],
    "animatables": []
  },
  "left": {
    "link": "https://drafts.csswg.org/css-position/#propdef-left",
    "test-datatypes": ["<length>", "<percentage>"],
    "animatables": ["<length>", "<percentage>"],
    "css-transition-animatables": ["<length>", "<percentage>"]
  },
  "letter-spacing": {
    "link": "https://drafts.csswg.org/css-text-3/#propdef-letter-spacing",
    "test-datatypes": ["<length>"],
    "animatables": ["<length>"],
    "css-transition-animatables": ["<length>"]
  },
  "lighting-color": {
    "link": "https://drafts.fxtf.org/filters/#propdef-lighting-color",
    "test-datatypes": ["<color>"],
    "animatables": ["<color>"]
  },
  "line-break": {
    "link": "https://drafts.csswg.org/css-text-3/#propdef-line-break",
    "test-datatypes": [["loose", "normal"]],
    "animatables": []
  },
  "line-grid": {
    "link": "https://drafts.csswg.org/css-line-grid/#propdef-line-grid",
    "test-datatypes": [["match-parent", "create"]],
    "animatables": []
  },
  "line-height": {
    "link": "https://www.w3.org/TR/2016/WD-CSS22-20160412/visudet.html#propdef-line-height",
    "test-datatypes": ["<number>", "<length>", "<percentage>"],
    "animatables": ["<number>", "<length>"],
    "css-transition-animatables": ["<number>", "<length>"]
  },
  "line-snap": {
    "link": "https://drafts.csswg.org/css-line-grid/#propdef-line-snap",
    "test-datatypes": [["baseline", "contain"]],
    "animatables": []
  },
  "list-style-image": {
    "link": "https://drafts.csswg.org/css-lists-3/#propdef-list-style-image",
    "test-datatypes": ["<image>"],
    "animatables": []
  },
  "list-style-position": {
    "link": "https://drafts.csswg.org/css-lists-3/#propdef-list-style-position",
    "test-datatypes": [["inside", "outside"]],
    "animatables": []
  },
  "list-style-type": {
    "link": "https://drafts.csswg.org/css-lists-3/#propdef-list-style-type",
    "test-datatypes": ["<ident>"],
    "animatables": []
  },
  "margin-bottom": {
    "link": "https://drafts.csswg.org/css-box/#margin-bottom",
    "test-datatypes": ["<length>", "<percentage>"],
    "animatables": ["<length>"],
    "css-transition-animatables": ["<length>"]
  },
  "margin-left": {
    "link": "https://drafts.csswg.org/css-box/#margin-left",
    "test-datatypes": ["<length>", "<percentage>"],
    "animatables": ["<length>"],
    "css-transition-animatables": ["<length>"]
  },
  "margin-right": {
    "link": "https://drafts.csswg.org/css-box/#margin-right",
    "test-datatypes": ["<length>", "<percentage>"],
    "animatables": ["<length>"],
    "css-transition-animatables": ["<length>"]
  },
  "margin-top": {
    "link": "https://drafts.csswg.org/css-box/#margin-top",
    "test-datatypes": ["<length>", "<percentage>"],
    "animatables": ["<length>"],
    "css-transition-animatables": ["<length>"]
  },
  "marker-end": {
    "link": "https://svgwg.org/specs/markers/#MarkerEndProperty",
    "test-datatypes": ["<marker-ref>"],
    "animatables": ["<marker-ref>"]
  },
  "marker-knockout-left": {
    "link": "https://svgwg.org/specs/markers/#MarkerKnockoutLeftProperty",
    "test-datatypes": ["<knockout-offset>"],
    "animatables": ["<knockout-offset>"]
  },
  "marker-knockout-right": {
    "link": "https://svgwg.org/specs/markers/#MarkerKnockoutRightProperty",
    "test-datatypes": ["<knockout-offset>"],
    "animatables": ["<knockout-offset>"]
  },
  "marker-mid": {
    "link": "https://svgwg.org/specs/markers/#MarkerMidProperty",
    "test-datatypes": ["<marker-ref>"],
    "animatables": ["<marker-ref>"]
  },
  "marker-pattern": {
    "link": "https://svgwg.org/specs/markers/#MarkerPatternProperty",
    "test-datatypes": ["<marker-ref>"],
    "animatables": ["<marker-ref>"]
  },
  "marker-segment": {
    "link": "https://svgwg.org/specs/markers/#MarkerSegmentProperty",
    "test-datatypes": ["<marker-ref>"],
    "animatables": ["<marker-ref>"]
  },
  "marker-side": {
    "link": "http://dev.w3.org/csswg/css3-lists/#propdef-marker-side",
    "test-datatypes": [["list-item", "list-container"]],
    "animatables": []
  },
  "marker-start": {
    "link": "https://svgwg.org/specs/markers/#MarkerStartProperty",
    "test-datatypes": ["<marker-ref>"],
    "animatables": ["<marker-ref>"]
  },
  "marquee-direction": {
    "link": "https://www.w3.org/TR/2008/WD-css3-marquee-20080801/#marquee-direction",
    "test-datatypes": [["forward", "reverse"]],
    "animatables": []
  },
  "marquee-speed": {
    "link": "https://www.w3.org/TR/2008/WD-css3-marquee-20080801/#marquee-speed",
    "test-datatypes": [["slow", "normal"]],
    "animatables": []
  },
  "marquee-style": {
    "link": "https://www.w3.org/TR/2008/WD-css3-marquee-20080801/#marquee-style",
    "test-datatypes": [["scroll", "slide"]],
    "animatables": []
  },
  "mask-border-mode": {
    "link": "https://drafts.fxtf.org/css-masking-1/#propdef-mask-border-mode",
    "test-datatypes": [["luminance", "alpha"]],
    "animatables": []
  },
  "mask-border-outset": {
    "link": "https://drafts.fxtf.org/css-masking-1/#propdef-mask-border-outset",
    "test-datatypes": ["<length>", "<number>"],
    "animatables": []
  },
  "mask-border-repeat": {
    "link": "https://drafts.fxtf.org/css-masking-1/#propdef-mask-border-repeat",
    "test-datatypes": [["stretch", "repeat"]],
    "animatables": []
  },
  "mask-border-slice": {
    "link": "https://drafts.fxtf.org/css-masking-1/#propdef-mask-border-slice",
    "test-datatypes": ["<percentage>", "<number>"],
    "animatables": []
  },
  "mask-border-source": {
    "link": "https://drafts.fxtf.org/css-masking-1/#propdef-mask-border-mode",
    "test-datatypes": ["<image>"],
    "animatables": []
  },
  "mask-border-width": {
    "link": "https://drafts.fxtf.org/css-masking-1/#propdef-mask-border-width",
    "test-datatypes": ["<length>", "<percentage>", "<number>"],
    "animatables": []
  },
  "mask-clip": {
    "link": "https://drafts.fxtf.org/css-masking-1/#propdef-mask-clip",
    "test-datatypes": ["<geometry-box>"],
    "animatables": []
  },
  "mask-composite": {
    "link": "https://drafts.fxtf.org/css-masking-1/#propdef-mask-composite",
    "test-datatypes": ["<compositing-operator>"],
    "animatables": []
  },
  "mask-image": {
    "link": "https://drafts.fxtf.org/css-masking-1/#propdef-mask-image",
    "test-datatypes": ["<mask-reference>"],
    "animatables": []
  },
  "mask-mode": {
    "link": "https://drafts.fxtf.org/css-masking-1/#propdef-mask-mode",
    "test-datatypes": ["<masking-mode>"],
    "animatables": []
  },
  "mask-origin": {
    "link": "https://drafts.fxtf.org/css-masking-1/#propdef-mask-origin",
    "test-datatypes": ["<geometry-box>"],
    "animatables": []
  },
  "mask-position": {
    "link": "https://drafts.fxtf.org/css-masking-1/#propdef-mask-position",
    "test-datatypes": ["<position>"],
    "animatables": []
  },
  "mask-repeat": {
    "link": "https://drafts.fxtf.org/css-masking-1/#propdef-mask-repeat",
    "test-datatypes": ["<repeat-style>"],
    "animatables": []
  },
  "mask-size": {
    "link": "https://drafts.fxtf.org/css-masking-1/#propdef-mask-size",
    "test-datatypes": ["<bg-size>"],
    "animatables": []
  },
  "mask-type": {
    "link": "https://drafts.fxtf.org/css-masking-1/#propdef-mask-type",
    "test-datatypes": [["luminance", "alpha"]],
    "animatables": []
  },
  "max-height": {
    "link": "https://www.w3.org/TR/2016/WD-CSS22-20160412/visudet.html#propdef-max-height",
    "test-datatypes": ["<length>", "<percentage>"],
    "animatables": ["<length>", "<percentage>"],
    "css-transition-animatables": ["<length>", "<percentage>"]
  },
  "max-lines": {
    "link": "https://drafts.csswg.org/css-overflow-3/#propdef-max-lines",
    "test-datatypes": ["<integer>"],
    "animatables": []
  },
  "max-width": {
    "link": "https://www.w3.org/TR/2016/WD-CSS22-20160412/visudet.html#propdef-max-width",
    "test-datatypes": ["<length>", "<percentage>"],
    "animatables": ["<length>", "<percentage>"],
    "css-transition-animatables": ["<length>", "<percentage>"]
  },
  "min-height": {
    "link": "https://www.w3.org/TR/2016/WD-CSS22-20160412/visudet.html#propdef-min-height",
    "test-datatypes": ["<length>", "<percentage>"],
    "animatables": ["<length>", "<percentage>"],
    "css-transition-animatables": ["<length>", "<percentage>"]
  },
  "min-width": {
    "link": "https://www.w3.org/TR/2016/WD-CSS22-20160412/visudet.html#propdef-min-width",
    "test-datatypes": ["<length>", "<percentage>"],
    "animatables": ["<length>", "<percentage>"],
    "css-transition-animatables": ["<length>", "<percentage>"]
  },
  "mix-blend-mode": {
    "link": "https://drafts.fxtf.org/compositing-1/#propdef-mix-blend-mode",
    "test-datatypes": ["<blend-mode>"],
    "animatables": []
  },
  "motion-offset": {
    "link": "http://dev.w3.org/fxtf/motion-1/#propdef-motion-offset",
    "test-datatypes": ["<length>", "<percentage>"],
    "animatables": ["<length>", "<percentage>"]
  },
  "motion-path": {
    "link": "http://dev.w3.org/fxtf/motion-1/#propdef-motion-path",
    "test-datatypes": ["<url>", "<basic-shape>", "<geometry-box>"],
    "animatables": []
  },
  "motion-rotation": {
    "link": "http://dev.w3.org/fxtf/motion-1/#propdef-motion-rotation",
    "test-datatypes": ["<motion-rotation>"],
    "animatables": ["<motion-rotation>"]
  },
  "move-to": {
    "link": "https://www.w3.org/TR/css3-content/#moving",
    "test-datatypes": [["normal", "here"]],
    "animatables": []
  },
  "nav-down": {
    "link": "https://drafts.csswg.org/css-ui-4/#nav-dir",
    "test-datatypes": [["current", "root"]],
    "animatables": []
  },
  "nav-left": {
    "link": "https://drafts.csswg.org/css-ui-4/#nav-dir",
    "test-datatypes": [["current", "root"]],
    "animatables": []
  },
  "nav-right": {
    "link": "https://drafts.csswg.org/css-ui-4/#nav-dir",
    "test-datatypes": [["current", "root"]],
    "animatables": []
  },
  "nav-up": {
    "link": "https://drafts.csswg.org/css-ui-4/#nav-dir",
    "test-datatypes": [["current", "root"]],
    "animatables": []
  },
  "object-fit": {
    "link": "https://drafts.csswg.org/css-images-3/#propdef-object-fit",
    "test-datatypes": [["fill", "contain"]],
    "animatables": []
  },
  "object-position": {
    "link": "https://drafts.csswg.org/css-images-3/#propdef-object-position",
    "test-datatypes": ["<position>"],
    "animatables": ["<position>"]
  },
  "offset-after": {
    "link": "https://drafts.csswg.org/css-position/#propdef-offset-after",
    "test-datatypes": ["<length>", "<percentage>"],
    "animatables": ["<length>", "<percentage>"]
  },
  "offset-before": {
    "link": "https://drafts.csswg.org/css-position/#propdef-offset-before",
    "test-datatypes": ["<length>", "<percentage>"],
    "animatables": ["<length>", "<percentage>"]
  },
  "offset-end": {
    "link": "https://drafts.csswg.org/css-position/#propdef-offset-end",
    "test-datatypes": ["<length>", "<percentage>"],
    "animatables": ["<length>", "<percentage>"]
  },
  "offset-start": {
    "link": "https://drafts.csswg.org/css-position/#propdef-offset-start",
    "test-datatypes": ["<length>", "<percentage>"],
    "animatables": ["<length>", "<percentage>"]
  },
  "opacity": {
    "link": "https://drafts.csswg.org/css-color-4/#propdef-opacity",
    "test-datatypes": ["<alphavalue>"],
    "animatables": ["<alphavalue>"],
    "css-transition-animatables": ["<alphavalue>"]
  },
  "order": {
    "link": "https://drafts.csswg.org/css-flexbox/#propdef-order",
    "test-datatypes": ["<integer>"],
    "animatables": ["<integer>"]
  },
  "orphans": {
    "link": "https://drafts.csswg.org/css-break/#propdef-orphans",
    "test-datatypes": ["<integer>"],
    "animatables": []
  },
  "outline-color": {
    "link": "https://drafts.csswg.org/css-ui-4/#outline-color",
    "test-datatypes": ["<color>"],
    "animatables": ["<color>"],
    "css-transition-animatables": ["<color>"]
  },
  "outline-offset": {
    "link": "https://drafts.csswg.org/css-ui/#propdef-outline-offset",
    "test-datatypes": ["<length>"],
    "animatables": ["<length>"]
  },
  "outline-style": {
    "link": "https://drafts.csswg.org/css-ui/#propdef-outline-style",
    "test-datatypes": ["<border-style>"],
    "animatables": []
  },
  "outline-width": {
    "link": "https://drafts.csswg.org/css-ui/#propdef-outline-width",
    "test-datatypes": ["<border-style>"],
    "animatables": ["<length>"],
    "css-transition-animatables": ["<length>"]
  },
  "overflow": {
    "link": "https://drafts.csswg.org/css-overflow-3/#propdef-overflow",
    "test-datatypes": [["visible", "hidden"]],
    "animatables": []
  },
  "overflow-wrap": {
    "link": "https://drafts.csswg.org/css-text-3/#propdef-overflow-wrap",
    "test-datatypes": [["normal", "break-word"]],
    "animatables": []
  },
  "overflow-x": {
    "link": "https://drafts.csswg.org/css-overflow-3/#propdef-overflow-x",
    "test-datatypes": [["visible", "hidden"]],
    "animatables": []
  },
  "overflow-y": {
    "link": "https://drafts.csswg.org/css-overflow-3/#propdef-overflow-y",
    "test-datatypes": [["visible", "hidden"]],
    "animatables": []
  },
  "padding-bottom": {
    "link": "https://drafts.csswg.org/css-box/#padding-bottom",
    "test-datatypes": ["<length>", "<percentage>"],
    "animatables": ["<length>", "<percentage>"],
    "css-transition-animatables": ["<length>"]
  },
  "padding-left": {
    "link": "https://drafts.csswg.org/css-box/#padding-left",
    "test-datatypes": ["<length>", "<percentage>"],
    "animatables": ["<length>", "<percentage>"],
    "css-transition-animatables": ["<length>"]
  },
  "padding-right": {
    "link": "https://drafts.csswg.org/css-box/#padding-right",
    "test-datatypes": ["<length>", "<percentage>"],
    "animatables": ["<length>", "<percentage>"],
    "css-transition-animatables": ["<length>"]
  },
  "padding-top": {
    "link": "https://drafts.csswg.org/css-box/#padding-top",
    "test-datatypes": ["<length>", "<percentage>"],
    "animatables": ["<length>", "<percentage>"],
    "css-transition-animatables": ["<length>"]
  },
  "page": {
    "link": "https://drafts.csswg.org/css-page-3/#propdef-page",
    "test-datatypes": ["<ident>"],
    "animatables": []
  },
  "page-break-after": {
    "link": "https://drafts.csswg.org/css-break-3/#propdef-break-after",
    "test-datatypes": [["always", "avoid"]],
    "animatables": []
  },
  "page-break-before": {
    "link": "https://drafts.csswg.org/css-break-3/#propdef-break-before",
    "test-datatypes": [["always", "avoid"]],
    "animatables": []
  },
  "page-policy": {
    "link": "https://www.w3.org/TR/css3-content/#page-policy",
    "test-datatypes": [["start", "first"]],
    "animatables": []
  },
  "pause-after": {
    "link": "https://www.w3.org/TR/css3-speech/#pause-after",
    "test-datatypes": ["<time>", ["x-weak", "strong"]],
    "animatables": []
  },
  "pause-before": {
    "link": "https://www.w3.org/TR/css3-speech/#pause-before",
    "test-datatypes": ["<time>", ["x-weak", "strong"]],
    "animatables": []
  },
  "perspective": {
    "link": "https://drafts.csswg.org/css-transforms/#propdef-perspective",
    "test-datatypes": ["<length>"],
    "animatables": ["<length>"]
  },
  "perspective-origin": {
    "link": "https://drafts.csswg.org/css-transforms/#propdef-perspective-origin",
    "test-datatypes": ["<length>", "<percentage>", ["left", "right"]],
    "animatables": ["<length>", "<percentage>"]
  },
  "pitch": {
    "link": "https://www.w3.org/TR/2011/REC-CSS2-20110607/aural.html#propdef-pitch",
    "test-datatypes": ["<frequency>", ["x-low", "x-high"]],
    "animatables": []
  },
  "pitch-range": {
    "link": "https://www.w3.org/TR/2011/REC-CSS2-20110607/aural.html#propdef-pitch-range",
    "test-datatypes": ["<number>"],
    "animatables": []
  },
  "play-during": {
    "link": "https://www.w3.org/TR/2011/REC-CSS2-20110607/aural.html#propdef-play-during",
    "test-datatypes": ["<url>"],
    "animatables": []
  },
  "polar-anchor": {
    "link": "https://drafts.csswg.org/css-round-display/#propdef-polar-anchor",
    "test-datatypes": ["<position>"],
    "animatables": ["<position>"]
  },
  "polar-angle": {
    "link": "https://drafts.csswg.org/css-round-display/#propdef-polar-angle",
    "test-datatypes": ["<angle>"],
    "animatables": ["<angle>"]
  },
  "polar-distance": {
    "link": "https://drafts.csswg.org/css-round-display/#propdef-polar-distance",
    "test-datatypes": ["<length>", "<percentage>"],
    "animatables": ["<length>", "<percentage>"]
  },
  "polar-origin": {
    "link": "https://drafts.csswg.org/css-round-display/#propdef-polar-origin",
    "test-datatypes": ["<position>"],
    "animatables": ["<length>", "<percentage>"]
  },
  "position": {
    "link": "https://drafts.csswg.org/css-position/#propdef-position",
    "test-datatypes": [["absolute", "fixed"]],
    "animatables": []
  },
  "presentation-level": {
    "link": "https://www.w3.org/TR/css3-preslev/#presentation-level",
    "test-datatypes": ["<integer>", ["same", "increment"]],
    "animatables": []
  },
  "quotes": {
    "link": "https://drafts.csswg.org/css-content-3/#propdef-quotes",
    "test-datatypes": ["<ident>"],
    "animatables": []
  },
  "region-fragment": {
    "link": "https://drafts.csswg.org/css-regions/#propdef-region-fragment",
    "test-datatypes": [["auto", "break"]],
    "animatables": []
  },
  "resize": {
    "link": "https://drafts.csswg.org/css-ui/#propdef-resize",
    "test-datatypes": [["both", "horizontal"]],
    "animatables": []
  },
  "rest-after": {
    "link": "https://www.w3.org/TR/css3-speech/#rest-after",
    "test-datatypes": ["<time>", ["x-weak", "strong"]],
    "animatables": []
  },
  "rest-before": {
    "link": "https://www.w3.org/TR/css3-speech/#rest-before",
    "test-datatypes": ["<time>", ["x-weak", "strong"]],
    "animatables": []
  },
  "richness": {
    "link": "https://www.w3.org/TR/2011/REC-CSS2-20110607/aural.html#propdef-richness",
    "test-datatypes": ["<number>"],
    "animatables": []
  },
  "right": {
    "link": "https://drafts.csswg.org/css-position/#propdef-right",
    "test-datatypes": ["<length>", "<percentage>"],
    "animatables": ["<length>", "<percentage>"],
    "css-transition-animatables": ["<length>"]
  },
  "ruby-align": {
    "link": "http://dev.w3.org/csswg/css-ruby-1/#propdef-ruby-align",
    "test-datatypes": [["start", "space-between"]],
    "animatables": []
  },
  "ruby-merge": {
    "link": "http://dev.w3.org/csswg/css-ruby-1/#propdef-ruby-merge",
    "test-datatypes": [["separate", "collapse"]],
    "animatables": []
  },
  "ruby-position": {
    "link": "http://dev.w3.org/csswg/css-ruby-1/#propdef-ruby-position",
    "test-datatypes": [["over right", "under left"]],
    "animatables": []
  },
  "running": {
    "link": "https://drafts.csswg.org/css-gcpm/#propdef-running",
    "test-datatypes": ["<ident>"],
    "animatables": []
  },
  "scroll-behavior": {
    "link": "https://drafts.csswg.org/cssom-view/#propdef-scroll-behavior",
    "test-datatypes": [["auto", "smooth"]],
    "animatables": []
  },
  "scroll-snap-align": {
    "link": "https://drafts.csswg.org/css-snappoints/#propdef-scroll-snap-align",
    "test-datatypes": [["start", "end"]],
    "animatables": []
  },
  "scroll-snap-margin": {
    "link": "https://drafts.csswg.org/css-snappoints/#propdef-scroll-snap-margin",
    "test-datatypes": ["<length>"],
    "animatables": ["<length>"]
  },
  "scroll-snap-padding": {
    "link": "https://drafts.csswg.org/css-snappoints/#propdef-scroll-snap-padding",
    "test-datatypes": ["<length>", "<percentage>"],
    "animatables": ["<length>", "<percentage>"]
  },
  "scroll-snap-type": {
    "link": "https://drafts.csswg.org/css-snappoints/#propdef-scroll-snap-type",
    "test-datatypes": [["mandatory", "proximity"]],
    "animatables": []
  },
  "shape-image-threshold": {
    "link": "http://dev.w3.org/csswg/css-shapes/#propdef-shape-image-threshold",
    "test-datatypes": ["<number>"],
    "animatables": ["<number>"]
  },
  "shape-inside": {
    "link": "https://drafts.csswg.org/css-round-display/#propdef-shape-inside",
    "test-datatypes": ["<basic-shape>", "<image>"],
    "animatables": ["<basic-shape>"]
  },
  "shape-margin": {
    "link": "http://dev.w3.org/csswg/css-shapes/#propdef-shape-margin",
    "test-datatypes": ["<length>", "<percentage>"],
    "animatables": ["<length>", "<percentage>"]
  },
  "shape-outside": {
    "link": "http://dev.w3.org/csswg/css-shapes/#propdef-shape-outside",
    "test-datatypes": ["<basic-shape>", "<image>"],
    "animatables": ["<basic-shape>"]
  },
  "size": {
    "link": "https://drafts.csswg.org/css-page-3/#descdef-page-size",
    "test-datatypes": ["<length>", ["portrait", "landscape"]],
    "animatables": []
  },
  "speak": {
    "link": "https://www.w3.org/TR/css3-speech/#speak",
    "test-datatypes": [["auto", "normal"]],
    "animatables": []
  },
  "speak-as": {
    "link": "https://www.w3.org/TR/css3-speech/#speak-as",
    "test-datatypes": [["spell-out", "digits"]],
    "animatables": []
  },
  "speak-header": {
    "link": "https://www.w3.org/TR/2011/REC-CSS2-20110607/aural.html#propdef-speak-header",
    "test-datatypes": [["once", "always"]],
    "animatables": []
  },
  "speak-numeral": {
    "link": "https://www.w3.org/TR/2011/REC-CSS2-20110607/aural.html#propdef-speak-numeral",
    "test-datatypes": [["digits", "continuous"]],
    "animatables": []
  },
  "speak-punctuation": {
    "link": "https://www.w3.org/TR/2011/REC-CSS2-20110607/aural.html#propdef-speak-punctuation",
    "test-datatypes": [["code", "none"]],
    "animatables": []
  },
  "speech-rate": {
    "link": "https://www.w3.org/TR/2011/REC-CSS2-20110607/aural.html#propdef-speech-rate",
    "test-datatypes": ["<number>", ["x-slow", "faster"]],
    "animatables": []
  },
  "stress": {
    "link": "http://www.w3.org/TR/2011/REC-CSS2-20110607/aural.html#propdef-stress",
    "test-datatypes": ["<number>"],
    "animatables": []
  },
  "string-set": {
    "link": "https://drafts.csswg.org/css-gcpm/#propdef-string-set",
    "test-datatypes": ["<ident>"],
    "animatables": []
  },
  "stroke": {
    "link": "https://svgwg.org/specs/strokes/#StrokeProperty",
    "test-datatypes": ["<paint>"],
    "animatables": ["<paint>"]
  },
  "stroke-alignment": {
    "link": "https://svgwg.org/specs/strokes/#StrokeAlignmentProperty",
    "test-datatypes": ["<stroke-alignment>"],
    "animatables": ["<stroke-alignment>"]
  },
  "stroke-dashadjust": {
    "link": "https://svgwg.org/specs/strokes/#StrokeDashadjustProperty",
    "test-datatypes": ["<stroke-dashadjust>"],
    "animatables": ["<stroke-dashadjust>"]
  },
  "stroke-dasharray": {
    "link": "https://svgwg.org/specs/strokes/#StrokeDasharrayProperty",
    "links": [
      "http://www.w3.org/TR/2015/WD-svg-strokes-20150409/#StrokeDasharrayProperty"
    ],
    "test-datatypes": ["<dasharray>"],
    "animatables": ["<dasharray>"]
  },
  "stroke-dashcorner": {
    "link": "https://svgwg.org/specs/strokes/#StrokeDashcornerProperty",
    "links": [
      "http://www.w3.org/TR/2015/WD-svg-strokes-20150409/#StrokeDashcornerProperty"
    ],
    "test-datatypes": ["<length>"],
    "animatables": ["<length>"]
  },
  "stroke-dashoffset": {
    "link": "https://svgwg.org/specs/strokes/#StrokeDashoffsetProperty",
    "links": [
      "http://www.w3.org/TR/2015/WD-svg-strokes-20150409/#StrokeDashoffsetProperty"
    ],
    "test-datatypes": ["<length>", "<percentage>"],
    "animatables": ["<length>", "<percentage>"]
  },
  "stroke-linecap": {
    "link": "https://svgwg.org/specs/strokes/#StrokeLinecapProperty",
    "links": [
      "http://www.w3.org/TR/2015/WD-svg-strokes-20150409/#StrokeLinecapProperty"
    ],
    "test-datatypes": ["<stroke-linecap>"],
    "animatables": ["<stroke-linecap>"]
  },
  "stroke-linejoin": {
    "link": "https://svgwg.org/specs/strokes/#StrokeLinecapProperty",
    "links": [
      "http://www.w3.org/TR/2015/WD-svg-strokes-20150409/#StrokeLinejoinProperty"
    ],
    "test-datatypes": ["<stroke-linejoin>"],
    "animatables": ["<stroke-linejoin>"]
  },
  "stroke-miterlimit": {
    "link": "https://svgwg.org/specs/strokes/#StrokeMiterlimitProperty",
    "links": [
      "http://www.w3.org/TR/2015/WD-svg-strokes-20150409/#StrokeMiterlimitProperty"
    ],
    "test-datatypes": ["<number>"],
    "animatables": ["<number>"]
  },
  "stroke-opacity": {
    "link": "https://svgwg.org/specs/strokes/#StrokeOpacityProperty",
    "links": [
      "http://www.w3.org/TR/2015/WD-svg-strokes-20150409/#StrokeOpacityProperty"
    ],
    "test-datatypes": ["<number>"],
    "animatables": ["<number>"]
  },
  "stroke-width": {
    "link": "https://svgwg.org/specs/strokes/#StrokeWidthProperty",
    "links": [
      "http://www.w3.org/TR/2015/WD-svg-strokes-20150409/#StrokeWidthProperty"
    ],
    "test-datatypes": ["<length>", "<percentage>"],
    "animatables": ["<length>", "<percentage>"]
  },
  "tab-size": {
    "link": "https://drafts.csswg.org/css-text-3/#propdef-tab-size",
    "test-datatypes": ["<length>", "<integer>"],
    "animatables": ["<length>"]
  },
  "table-layout": {
    "link": "https://drafts.csswg.org/css-tables/#propdef-table-layout",
    "test-datatypes": [["auto", "fixed"]],
    "animatables": []
  },
  "text-align": {
    "link": "https://drafts.csswg.org/css-text-3/#propdef-text-align",
    "test-datatypes": [["start", "end"]],
    "animatables": []
  },
  "text-align-last": {
    "link": "https://drafts.csswg.org/css-text-3/#propdef-text-align-last",
    "test-datatypes": [["start", "end"]],
    "animatables": []
  },
  "text-combine-upright": {
    "link": "https://drafts.csswg.org/css-writing-modes-3/#propdef-text-combine-upright",
    "test-datatypes": [["all", "digits"]],
    "animatables": []
  },
  "text-decoration-color": {
    "link": "http://dev.w3.org/csswg/css-text-decor-3/#propdef-text-decoration",
    "links": [
      "http://www.w3.org/TR/2013/CR-css-text-decor-3-20130801/#text-decoration-color"
    ],
    "test-datatypes": ["<color>"],
    "animatables": ["<color>"]
  },
  "text-decoration-line": {
    "link": "http://dev.w3.org/csswg/css-text-decor-3/#propdef-text-decoration-line",
    "links": [
      "http://www.w3.org/TR/2013/CR-css-text-decor-3-20130801/#text-decoration-line"
    ],
    "test-datatypes": [["underline", "overline"]],
    "animatables": []
  },
  "text-decoration-skip": {
    "link": "http://dev.w3.org/csswg/css-text-decor-3/#propdef-text-decoration-skip",
    "links": [
      "http://www.w3.org/TR/2013/CR-css-text-decor-3-20130801/#text-decoration-skip"
    ],
    "test-datatypes": [["objects", "spaces"]],
    "animatables": []
  },
  "text-decoration-style": {
    "link": "http://dev.w3.org/csswg/css-text-decor-3/#propdef-text-decoration-style",
    "links": [
      "http://www.w3.org/TR/2013/CR-css-text-decor-3-20130801/#text-decoration-style"
    ],
    "test-datatypes": [["solid", "dotted"]],
    "animatables": []
  },
  "text-emphasis-color": {
    "link": "http://dev.w3.org/csswg/css-text-decor-3/#propdef-text-emphasis-color",
    "links": [
      "http://www.w3.org/TR/2013/CR-css-text-decor-3-20130801/#text-emphasis-color"
    ],
    "test-datatypes": ["<color>"],
    "animatables": ["<color>"]
  },
  "text-emphasis-position": {
    "link": "http://dev.w3.org/csswg/css-text-decor-3/#propdef-text-emphasis-position",
    "links": [
      "http://www.w3.org/TR/2013/CR-css-text-decor-3-20130801/#text-emphasis-position"
    ],
    "test-datatypes": [["over right", "under left"]],
    "animatables": []
  },
  "text-emphasis-style": {
    "link": "http://dev.w3.org/csswg/css-text-decor-3/#propdef-text-emphasis-style",
    "links": [
      "http://www.w3.org/TR/2013/CR-css-text-decor-3-20130801/#text-emphasis-style"
    ],
    "test-datatypes": [["filled", "open"]],
    "animatables": []
  },
  "text-indent": {
    "link": "https://drafts.csswg.org/css-text-3/#propdef-text-indent",
    "test-datatypes": ["<length>", "<percentage>"],
    "animatables": ["<length>", "<percentage>"],
    "css-transition-animatables": ["<length>", "<percentage>"]
  },
  "text-justify": {
    "link": "https://drafts.csswg.org/css-text-3/#propdef-text-justify",
    "test-datatypes": [["inter-word", "distribute"]],
    "animatables": []
  },
  "text-orientation": {
    "link": "https://drafts.csswg.org/css-writing-modes-3/#propdef-text-orientation",
    "test-datatypes": [["mixed", "upright"]],
    "animatables": []
  },
  "text-overflow": {
    "link": "https://drafts.csswg.org/css-ui/#propdef-text-overflow",
    "test-datatypes": [["clip", "ellipsis"]],
    "animatables": []
  },
  "text-shadow": {
    "link": "http://dev.w3.org/csswg/css-text-decor-3/#propdef-text-shadow",
    "test-datatypes": ["<shadow>"], //originaly none | [ <length>{2,3} && <color>? ]#
    "animatables": ["<shadow>"],
    "css-transition-animatables": ["<shadow>"]
  },
  "text-space-collapse": {
    "link": "https://drafts.csswg.org/css-text-4/#propdef-text-space-collapse",
    "test-datatypes": [["collapse", "discard"]],
    "animatables": []
  },
  "text-space-trim": {
    "link": "https://drafts.csswg.org/css-text-4/#propdef-text-space-trim",
    "test-datatypes": [["trim-inner", "discard-before"]],
    "animatables": []
  },
  "text-spacing": {
    "link": "https://drafts.csswg.org/css-text-4/#propdef-text-spacing",
    "test-datatypes": [["trim-start", "trim-end"]],
    "animatables": []
  },
  "text-transform": {
    "link": "https://drafts.csswg.org/css-text-3/#propdef-text-transform",
    "test-datatypes": [["capitalize", "uppercase"]],
    "animatables": []
  },
  "text-underline-position": {
    "link": "http://dev.w3.org/csswg/css-text-decor-3/#propdef-text-underline-position",
    "test-datatypes": [["under left", "under right"]],
    "animatables": []
  },
  "text-wrap": {
    "link": "https://drafts.csswg.org/css-text-4/#propdef-text-wrap",
    "test-datatypes": [["nowrap", "balance"]],
    "animatables": []
  },
  "top": {
    "link": "https://drafts.csswg.org/css-position/#propdef-top",
    "test-datatypes": ["<length>", "<percentage>"],
    "animatables": ["<length>", "<percentage>"],
    "css-transition-animatables": ["<length>", "<percentage>"]
  },
  "transform": {
    "link": "https://drafts.csswg.org/css-transforms/#propdef-transform",
    "test-datatypes": ["<transform-function>"],
    "animatables": ["<transform-function>"]
  },
  "transform-origin": {
    "link": "https://drafts.csswg.org/css-transforms/#propdef-transform-origin",
    "test-datatypes": ["<length>", "<percentage>", ["center", "right"]],
    "animatables": ["<length>", "<percentage>"]
  },
  "transform-style": {
    "link": "https://drafts.csswg.org/css-transforms/#propdef-transform-style",
    "test-datatypes": [["flat", "preserve-3d"]],
    "animatables": []
  },
  "transition-delay": {
    "link": "http://dev.w3.org/csswg/css-transitions/#propdef-transition-delay",
    "test-datatypes": ["<time>"],
    "animatables": []
  },
  "transition-duration": {
    "link": "http://dev.w3.org/csswg/css-transitions/#propdef-transition-duration",
    "test-datatypes": ["<time>"],
    "animatables": []
  },
  "transition-property": {
    "link": "http://dev.w3.org/csswg/css-transitions/#propdef-transition-property",
    "test-datatypes": ["<single-transition-property>"],
    "animatables": []
  },
  "transition-timing-function": {
    "link": "http://dev.w3.org/csswg/css-transitions/#propdef-transition-timing-function",
    "test-datatypes": ["<single-transition-timing-function>"],
    "animatables": []
  },
  "unicode-bidi": {
    "link": "https://drafts.csswg.org/css-writing-modes-3/#propdef-unicode-bidi",
    "test-datatypes": [["embed", "bidi-override"]],
    "animatables": []
  },
  "user-select": {
    "link": "https://drafts.csswg.org/css-ui-4/#propdef-user-select",
    "test-datatypes": [["text", "contain"]],
    "animatables": []
  },
  "vertical-align": {
    "link": "https://drafts.csswg.org/css-inline/#propdef-vertical-align",
    "test-datatypes": ["<baseline-shift>", "<length>"],
    "animatables": [],
    "css-transition-animatables": ["<length>"]
  },
  "visibility": {
    "link": "https://drafts.csswg.org/css-box/#visibility",
    "test-datatypes": ["<visibility>"],
    "animatables": ["<visibility>"],
    "css-transition-animatables": ["<visibility>"]
  },
  "voice-balance": {
    "link": "https://www.w3.org/TR/css3-speech/#voice-balance",
    "test-datatypes": ["<number>", ["left", "rightwards"]],
    "animatables": []
  },
  "voice-duration": {
    "link": "https://www.w3.org/TR/css3-speech/#voice-duration",
    "test-datatypes": ["<time>"],
    "animatables": []
  },
  "voice-family": {
    "link": "https://www.w3.org/TR/css3-speech/#voice-family",
    "test-datatypes": ["<ident>"],
    "animatables": []
  },
  "voice-pitch": {
    "link": "https://www.w3.org/TR/css3-speech/#voice-pitch",
    "test-datatypes": ["<frequency>", ["x-low", "x-high"]],
    "animatables": []
  },
  "voice-range": {
    "link": "https://www.w3.org/TR/css3-speech/#voice-range",
    "test-datatypes": ["<frequency>", ["x-low", "x-high"]],
    "animatables": []
  },
  "voice-rate": {
    "link": "https://www.w3.org/TR/css3-speech/#voice-rate",
    "test-datatypes": ["<percentage>", ["x-slow", "x-fast"]],
    "animatables": []
  },
  "voice-stress": {
    "link": "https://www.w3.org/TR/css3-speech/#voice-stress",
    "test-datatypes": [["strong", "moderate"]],
    "animatables": []
  },
  "voice-volume": {
    "link": "https://www.w3.org/TR/css3-speech/#voice-volume",
    "test-datatypes": [["silent", "x-soft"]],
    "animatables": []
  },
  "volume": {
    "link": "https://www.w3.org/TR/2011/REC-CSS2-20110607/aural.html#propdef-volume",
    "test-datatypes": ["<number>", "<percentage>", ["silent", "x-soft"]],
    "animatables": []
  },
  "white-space": {
    "link": "https://drafts.csswg.org/css-text-4/#propdef-white-space",
    "test-datatypes": [["pre", "nowrap"]],
    "animatables": []
  },
  "widows": {
    "link": "https://drafts.csswg.org/css-break/#propdef-widows",
    "test-datatypes": ["<integer>"],
    "animatables": []
  },
  "width": {
    "link": "https://www.w3.org/TR/2016/WD-CSS22-20160412/visudet.html#width",
    "test-datatypes": ["<length>", "<percentage>"],
    "animatables": ["<length>", "<percentage>"],
    "css-transition-animatables": ["<length>", "<percentage>"]
  },
  "will-change": {
    "link": "http://dev.w3.org/csswg/css-will-change/#propdef-will-change",
    "test-datatypes": ["<animateable-feature>"],
    "animatables": []
  },
  "word-break": {
    "link": "https://drafts.csswg.org/css-text-3/#propdef-word-break",
    "test-datatypes": [["keep-all", "break-all"]],
    "animatables": []
  },
  "word-spacing": {
    "link": "https://drafts.csswg.org/css-text-3/#propdef-word-spacing",
    "test-datatypes": ["<length>", "<percentage>"],
    "animatables": ["<length>", "<percentage>"],
    "css-transition-animatables": ["<length>", "<percentage>"]
  },
  "word-wrap": {
    "link": "https://drafts.csswg.org/css-text-3/#propdef-word-wrap",
    "test-datatypes": [["normal", "break-word"]],
    "animatables": []
  },
  "wrap-after": {
    "link": "https://drafts.csswg.org/css-text-4/#propdef-wrap-after",
    "test-datatypes": [["avoid", "avoid-line"]],
    "animatables": []
  },
  "wrap-before": {
    "link": "https://drafts.csswg.org/css-text-4/#propdef-wrap-before",
    "test-datatypes": [["avoid", "avoid-line"]],
    "animatables": []
  },
  "wrap-flow": {
    "link": "http://dev.w3.org/csswg/css-exclusions/#propdef-wrap-flow",
    "test-datatypes": [["both", "minimum"]],
    "animatables": []
  },
  "wrap-inside": {
    "link": "https://drafts.csswg.org/css-text-4/#propdef-wrap-inside",
    "test-datatypes": [["avoid", "auto"]],
    "animatables": []
  },
  "wrap-through": {
    "link": "http://dev.w3.org/csswg/css-exclusions/#propdef-wrap-through",
    "test-datatypes": [["wrap", "none"]],
    "animatables": []
  },
  "writing-mode": {
    "link": "http://dev.w3.org/csswg/css-writing-modes-3/#propdef-writing-mode",
    "test-datatypes": [["horizontal-tb", "vertical-rl"]],
    "animatables": []
  },
  "z-index": {
    "link": "https://drafts.csswg.org/css-position/#propdef-z-index",
    "test-datatypes": ["<integer>"],
    "animatables": ["<integer>"],
    "css-transition-animatables": ["<integer>"]
  }
};
