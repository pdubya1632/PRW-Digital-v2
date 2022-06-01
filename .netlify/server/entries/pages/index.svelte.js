var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  default: () => Routes
});
module.exports = __toCommonJS(stdin_exports);
var import_index_5f038599 = require("../../chunks/index-5f038599.js");
const Routes = (0, import_index_5f038599.c)(($$result, $$props, $$bindings, slots) => {
  return `
${$$result.head += `${$$result.title = `<title>The Portfolio of Patrick Richardson Wright</title>`, ""}`, ""}

<section class="${"pl-14"}"><div><p class="${"pl-1"}">I&#39;m a</p>
		<h1 class="${"text-7xl font-bold max-w-xs"}">Creative Developer</h1>
		<p class="${"pl-1"}">based in Seattle, WA.</p>
		</div>
	</section>`;
});
