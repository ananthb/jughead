import {
  parse
} from "./chunk-ZTYE4VVB.mjs";
import "./chunk-VUYTGWVG.mjs";
import "./chunk-FKTRZSYK.mjs";
import "./chunk-55U4IUQG.mjs";
import {
  version
} from "./chunk-P4R5S6XY.mjs";
import {
  selectSvgElement
} from "./chunk-3KXL3DCZ.mjs";
import {
  configureSvgSize,
  log
} from "./chunk-HIST6DIL.mjs";
import "./chunk-5PULXXUT.mjs";
import "./chunk-ACX3ZYE2.mjs";
import "./chunk-46UCTVYF.mjs";
import "./chunk-TGZYFRKZ.mjs";
import "./chunk-GRZAG2UZ.mjs";
import "./chunk-HD3LK5B5.mjs";
import {
  __name
} from "./chunk-DLQEHMXD.mjs";

// src/diagrams/info/infoParser.ts
var parser = {
  parse: /* @__PURE__ */ __name(async (input) => {
    const ast = await parse("info", input);
    log.debug(ast);
  }, "parse")
};

// src/diagrams/info/infoDb.ts
var DEFAULT_INFO_DB = { version };
var getVersion = /* @__PURE__ */ __name(() => DEFAULT_INFO_DB.version, "getVersion");
var db = {
  getVersion
};

// src/diagrams/info/infoRenderer.ts
var draw = /* @__PURE__ */ __name((text, id, version2) => {
  log.debug("rendering info diagram\n" + text);
  const svg = selectSvgElement(id);
  configureSvgSize(svg, 100, 400, true);
  const group = svg.append("g");
  group.append("text").attr("x", 100).attr("y", 40).attr("class", "version").attr("font-size", 32).style("text-anchor", "middle").text(`v${version2}`);
}, "draw");
var renderer = { draw };

// src/diagrams/info/infoDiagram.ts
var diagram = {
  parser,
  db,
  renderer
};
export {
  diagram
};
