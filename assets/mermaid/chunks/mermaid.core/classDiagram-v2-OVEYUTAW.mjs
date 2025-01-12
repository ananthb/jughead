import {
  classDb_default,
  classDiagram_default,
  classRenderer_v3_unified_default,
  styles_default
} from "./chunk-TM6FMTIQ.mjs";
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

// src/diagrams/class/classDiagram-v2.ts
var diagram = {
  parser: classDiagram_default,
  db: classDb_default,
  renderer: classRenderer_v3_unified_default,
  styles: styles_default,
  init: /* @__PURE__ */ __name((cnf) => {
    if (!cnf.class) {
      cnf.class = {};
    }
    cnf.class.arrowMarkerAbsolute = cnf.arrowMarkerAbsolute;
    classDb_default.clear();
  }, "init")
};
export {
  diagram
};
