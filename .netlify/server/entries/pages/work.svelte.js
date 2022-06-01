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
  default: () => Work
});
module.exports = __toCommonJS(stdin_exports);
var import_index_5f038599 = require("../../chunks/index-5f038599.js");
const Work = (0, import_index_5f038599.c)(($$result, $$props, $$bindings, slots) => {
  return `
${$$result.head += `${$$result.title = `<title>Patrick Richardson Wright - Work</title>`, ""}`, ""}

<section class="${"container mx-auto"}"><div class="${"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"}"><div class="${"flex justify-center text-4xl border-2 border-gray-300 p-6 bg-gray-100"}"><a href="${"#"}">Project 1</a></div>
		<div class="${"flex justify-center text-4xl border-2 border-gray-300 p-6 bg-gray-100"}"><a href="${"#"}">Project 2</a></div>
		<div class="${"flex justify-center text-4xl border-2 border-gray-300 p-6 bg-gray-100"}"><a href="${"#"}">Project 3</a></div>
		<div class="${"flex justify-center text-4xl border-2 border-gray-300 p-6 bg-gray-100"}"><a href="${"#"}">Project 4</a></div></div></section>`;
});
