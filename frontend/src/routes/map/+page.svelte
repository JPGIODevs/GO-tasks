<br/>
<div class="container box">
    <h1 class="mt-3 pt-2">Map Page</h1>
    <br/>
</div>
<div class="mapcontainer">
    <div id='map' style='width: 500px; height: 250px;'></div>
    <script>
        mapboxgl.accessToken = 'pk.eyJ1IjoianBnaW9kZXZzIiwiYSI6ImNsZ3RieDB2NDFpYXczdG1tYXhxdWhnMm0ifQ.VEMQCsfoTTAkro5kcWRLyQ';
        const map = new mapboxgl.Map({
            container: 'map', // container ID
            style: 'mapbox://styles/mapbox/streets-v12', // style URL
            center: [-74.5, 40], // starting position [lng, lat]
            zoom: 9, // starting zoom
        });
    </script>
</div>
