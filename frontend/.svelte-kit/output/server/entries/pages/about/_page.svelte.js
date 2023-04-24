import { c as create_ssr_component } from "../../../chunks/index.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".box.svelte-1hoha1p{text-align:center;background-color:white;border-radius:30px}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="container box svelte-1hoha1p"><h1 class="mt-2 pt-2">About Page</h1>
    <br>
    <p>LOREM IPSUM</p>

    <a href="/" class="mt-3 pt-3"><button class="btn btn-outline-dark">Home page</button></a>

</div>`;
});
export {
  Page as default
};
