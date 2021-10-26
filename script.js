window.onload = () => {
    const button = document.querySelector('button[data-action="change"]');
    button.innerText = '﹖';

    let places = staticLoadPlaces();
    renderPlaces(places);
};

function staticLoadPlaces() {
    return [
        {
            name: 'Pokèmon',
            location: {
                // 25.037771317268, 121.4218922487905
                lat: 25.037771317268,
                lng: 121.4218922487905,
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

        // document.querySelector('button[data-action="change"]').addEventListener('click', function () {
        //     var entity = document.querySelector('[gps-entity-place]');
        //     modelIndex++;
        //     var newIndex = modelIndex % models.length;
        //     setModel(models[newIndex], entity);
        // });

        scene.appendChild(model);
    });
}