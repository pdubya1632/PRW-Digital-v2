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
  default: () => About
});
module.exports = __toCommonJS(stdin_exports);
var import_index_5f038599 = require("../../chunks/index-5f038599.js");
const About = (0, import_index_5f038599.c)(($$result, $$props, $$bindings, slots) => {
  return `
${$$result.head += `${$$result.title = `<title>Patrick Richardson Wright - About</title>`, ""}`, ""}

<section class="${"pl-14"}"><div class="${"max-w-sm"}"><h2>Hey there \u{1F44B}</h2>
		<div><p>I\u2019m currently enrolled in the UW Coding Bootcamp and operate a photo booth company called
				<a href="${"http://hellothereyou.com"}">Hello There You</a> in Seattle, WA. My past lives include video production, front-end
				development, UX design, and interning at an ad agency.
			</p></div></div></section>`;
});
