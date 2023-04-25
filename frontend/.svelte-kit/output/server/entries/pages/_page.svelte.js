import { c as create_ssr_component, d as add_attribute } from "../../chunks/index.js";
/* empty css                  */let logo = "./logo.png";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="container logocontainer mt-4 pt-5 mb-5"><img${add_attribute("src", logo, 0)} alt="logo" class="gologo"></div>

<div class="container box mb-4 pb-4"><br>
  <p class="font-monospace">Visit <a href="https://jpgiodevelopments.com">JPGIODevs</a> for more ;)</p>

  
  <div class="font-monospace"><a href="/todo" class="mt-3 pt-3"><button class="btn btn-outline-light">To-Do</button></a>
    <a href="/notes" class="mt-3 pt-3"><button class="btn btn-outline-light">Notes</button></a>
    <a href="/about" class="mt-3 pt-3"><button class="btn btn-outline-light">About page</button></a>
    <a href="/map" class="mt-3 pt-3"><button class="btn btn-outline-light">Maps page</button></a></div></div>`;
});
export {
  Page as default
};
