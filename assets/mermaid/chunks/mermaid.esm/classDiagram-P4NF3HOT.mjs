import {
  classDb_default,
  classDiagram_default,
  classRenderer_v3_unified_default,
  styles_default
} from "./chunk-K5L5OVLS.mjs";
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

// src/diagrams/class/classDiagram.ts
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
