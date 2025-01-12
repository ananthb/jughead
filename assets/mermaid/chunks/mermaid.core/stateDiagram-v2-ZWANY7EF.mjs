import {
  stateDb_default,
  stateDiagram_default,
  stateRenderer_v3_unified_default,
  styles_default
} from "./chunk-D5EAUSPK.mjs";
import "./chunk-X3WOKQ54.mjs";
import "./chunk-JPW5SGIG.mjs";
import "./chunk-FMFP6ZX4.mjs";
import "./chunk-INBA35WA.mjs";
import "./chunk-LNLWY4D5.mjs";
import "./chunk-DBW3JZTN.mjs";
import "./chunk-XTT7BUI5.mjs";
import "./chunk-RQBOT4IL.mjs";
import "./chunk-EUCTP6VE.mjs";
import {
  __name
} from "./chunk-P2CBJ47W.mjs";

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
