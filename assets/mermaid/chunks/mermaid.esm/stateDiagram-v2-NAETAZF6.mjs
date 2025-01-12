import {
  stateDb_default,
  stateDiagram_default,
  stateRenderer_v3_unified_default,
  styles_default
} from "./chunk-MUUKUH27.mjs";
import "./chunk-P6FJTUJR.mjs";
import "./chunk-4FG2UA6B.mjs";
import "./chunk-YQ7FSRVX.mjs";
import "./chunk-JHRW5M3P.mjs";
import "./chunk-VKJI5BFR.mjs";
import "./chunk-SVWLYT5M.mjs";
import "./chunk-OC623AAK.mjs";
import "./chunk-3AT6MCVW.mjs";
import "./chunk-FBDKJ6QC.mjs";
import "./chunk-GKOISANM.mjs";
import "./chunk-HIST6DIL.mjs";
import "./chunk-HD3LK5B5.mjs";
import {
  __name
} from "./chunk-DLQEHMXD.mjs";

// src/diagrams/state/stateDiagram-v2.ts
var diagram = {
  parser: stateDiagram_default,
  db: stateDb_default,
  renderer: stateRenderer_v3_unified_default,
  styles: styles_default,
  init: /* @__PURE__ */ __name((cnf) => {
    if (!cnf.state) {
      cnf.state = {};
    }
    cnf.state.arrowMarkerAbsolute = cnf.arrowMarkerAbsolute;
    stateDb_default.clear();
  }, "init")
};
export {
  diagram
};
