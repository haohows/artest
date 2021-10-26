window.onload = () => {
    let places = staticLoadPlaces();
    renderPlaces(places);
};

function staticLoadPlaces() {
    return [
        {
            name: 'Pokèmon',
            location: {
                // 25.038341818750396, 121.42182776411754
                lat: 25.038341818750396,
                lng: 121.42182776411754,
            },
        },
    ];
}

var models = [
    {
        url: './assets/articuno/scene.gltf',
        scale: '10 10 10',
        rotation: '0 180 0',
        info: '急凍鳥',
    },
    {
        url: './assets/dragonite/scene.gltf',
        scale: '0.08 0.08 0.08',
        rotation: '0 360 0',
        info: 'Dragonite, Lv. 99, HP 150/150',
    },
];

// var modelIndex = 0;
var setModel = function (model, entity) {
    if (model.scale) {
        entity.setAttribute('scale', model.scale);
    }

    if (model.rotation) {
        entity.setAttribute('rotation', model.rotation);
    }

    if (model.position) {
        entity.setAttribute('position', model.position);
    }

    entity.setAttribute('gltf-model', model.url);

    const div = document.querySelector('.instructions');
    div.innerText = model.info;
};

function renderPlaces(places) {
    let scene = document.querySelector('a-scene');

    places.forEach((place) => {
        let latitude = place.location.lat;
        let longitude = place.location.lng;

        let model = document.createElement('a-entity');
        model.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude};`);

        setModel(models[0], model);

        model.setAttribute('animation-mixer', '');

        scene.appendChild(model);
    });
}