import { c as create_ssr_component, d as add_attribute } from "../../chunks/index.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".logocontainer.svelte-1mu2emy{text-align:center}.gologo.svelte-1mu2emy{position:relative;width:50%;height:50%;text-align:center}.box.svelte-1mu2emy{color:white;text-align:center;background-color:rgba(0, 0, 0, 0.3);border:2px solid rgba(255,255,255,0.3);border-radius:30px}",
  map: null
};
let logo = "./logo.png";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="container logocontainer mt-4 pt-5 mb-5 svelte-1mu2emy"><img${add_attribute("src", logo, 0)} alt="logo" class="gologo svelte-1mu2emy">
  <br></div>

<div class="container box mb-4 pb-4 svelte-1mu2emy"><br>
  <p class="font-monospace">Visit <a href="https://jpgiodevelopments.com">JPGIODevs</a> for more ;)</p>

  
  <div class="font-monospace"><a href="/todo" class="mt-3 pt-3"><button class="btn btn-outline-light">To-Do</button></a>
    <a href="/notes" class="mt-3 pt-3"><button class="btn btn-outline-light">Notes</button></a>
    <a href="/about" class="mt-3 pt-3"><button class="btn btn-outline-light">About page</button></a>
    <a href="/map" class="mt-3 pt-3"><button class="btn btn-outline-light">Maps page</button></a></div>
</div>`;
});
export {
  Page as default
};
