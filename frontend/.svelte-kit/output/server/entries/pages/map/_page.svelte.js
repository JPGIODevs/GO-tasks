import { c as create_ssr_component } from "../../../chunks/index.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".box.svelte-ktquz3{text-align:center;background-color:white;border-radius:30px}.mapcontainer.svelte-ktquz3{text-align:center;text-align:center;border-radius:30px;margin:5% auto 10% auto}#map.svelte-ktquz3{margin-left:auto;margin-right:auto;border:30px solid rgba(255,255,255,0.3);border-radius:30px}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="container box svelte-ktquz3"><h1 class="mt-5 pt-5">Map Page</h1>
    <br></div>
<div class="mapcontainer svelte-ktquz3"><div id="map" style="width: 600px; height: 400px;" class="svelte-ktquz3"></div>
    <script>mapboxgl.accessToken = 'pk.eyJ1IjoianBnaW9kZXZzIiwiYSI6ImNsZ3RieDB2NDFpYXczdG1tYXhxdWhnMm0ifQ.VEMQCsfoTTAkro5kcWRLyQ';
        const map = new mapboxgl.Map({
            container: 'map', // container ID
            style: 'mapbox://styles/mapbox/streets-v12', // style URL
            center: [-74.5, 40], // starting position [lng, lat]
            zoom: 9, // starting zoom
        });
    <\/script>
</div>`;
});
export {
  Page as default
};
