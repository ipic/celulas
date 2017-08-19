function initMap() {
    console.log('init map called')
    var curitiba = {lat: -25.424429, lng: -49.265382};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 14,
        draggable: true,
        center: curitiba
    });

    var districts = {
        abranches: {lat: -25.370868, lng: -49.270705},
        ahu: {lat: -25.403990, lng: -49.260186},
        altodaXV: {lat: -25.427021, lng: -49.250203},
        bacacheri: {lat: -25.397200, lng: -49.236718},
        balsaNova: {lat: -25.580861, lng: -49.629558},
        batel: {lat: -25.444418, lng: -49.288106},
        bigorrilho: {lat: -25.433261, lng:-49.297157},
        boaVista: {lat: -25.388682, lng: -49.233469},
        bomRetiro: {lat: -25.410444, lng: -49.275414},
        botiatuvinha: {lat: -25.389416, lng: -49.355035},
        cabral: {lat: -25.406124, lng:-49.252034},
        campoComprido: {lat:-25.466876, lng: -49.327463},
        campoLargo: {lat: -25.459671, lng: -49.527294},
        capaoImbuia: {lat: -25.437300, lng: -49.211194},
        centro: {lat: -25.424429, lng: -49.265382},
        centroCivico: {lat: -25.417489, lng: -49.268707},
        colombo: {lat: -25.292978, lng: -49.226634},
        cristoRei: {lat: -25.433166 , lng: -49.242973},
        jardimSocial: {lat: -25.419069, lng: -49.234203},
        juveve: {lat: -25.412874 , lng: -49.258339},
        novoMundo: {lat: -25.489025, lng: -49.294125},
        orleans: {lat: -25.426048, lng: -49.366964},
        pilarzinho: {lat: -25.392658, lng: -49.282962},
        santaCandida: {lat: -25.370598, lng: -49.234298},
        santaFelicidade: {lat: -25.404007, lng: -49.328694},
        saoBraz: {lat: -25.418977, lng: -49.348347},
        taruma: {lat: -25.428522 , lng: -49.228371},
        vilaIsabel: {lat: -25.457769, lng: -49.294653},
        vistaAlegre: {lat: -25.409061 , lng: -49.291462},
        portao: {lat: -25.474922 , lng: -49.300784},
        boqueirao: {lat: -25.503107, lng: -49.236857},
        aguaVerde: {lat: -25.453071, lng: -49.277923},
        cajuru: {lat: -25.462060, lng: -49.205588},
        jardimAmericas: {lat: -25.456324, lng: -49.231621},
    };

    var keys = Object.keys(districts);
    var markers = [];
    keys.forEach(function(item) {
        var marker = new google.maps.Marker({
            position: districts[item],
            icon: '/img/marker.png',
        });
        markers.push(marker);
    });
    // Add a marker clusterer to manage the markers.
    var markerCluster = new MarkerClusterer(map, markers, {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
}

