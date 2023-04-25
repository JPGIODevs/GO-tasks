import { c as create_ssr_component, d as add_attribute } from "../../../chunks/index.js";
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: "a.svelte-bamw7z{color:white}.navbar.svelte-bamw7z{background-color:rgba(0, 0, 0, 0.3)}.navlogo.svelte-bamw7z{margin:0;padding:0;width:100px;height:100%}",
  map: null
};
let logosrc = "./navlogo.png";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<nav class="navbar navbar-expand-lg bg-body-tertiary svelte-bamw7z"><div class="container-fluid"><a class="navbar-brand svelte-bamw7z" href="/"><img${add_attribute("src", logosrc, 0)} alt="logo" class="d-inline-block align-text-top navlogo svelte-bamw7z"></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup"><div class="navbar-nav"><a class="nav-link active svelte-bamw7z" aria-current="page" href="/">Home</a>
          <a class="nav-link svelte-bamw7z" href="/about">About</a>
          <a class="nav-link svelte-bamw7z" href="/map">Maps</a></div></div></div></nav>

${slots.default ? slots.default({}) : ``}`;
});
export {
  Layout as default
};
