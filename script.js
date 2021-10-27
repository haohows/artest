console.log("喵");
let places = [
    // 25.038324123400365, 121.42251495236201
    {
        location: {
            lat: "25.038324123400365",
            lng: "121.42251495236201",
        },
        name: "7-11",
        img: "./assets/img/mYmmbrp.jpg"
    },
    // 25.038456438143236, 121.42154768226726
    {
        location: {
            lat: "25.038456438143236",
            lng: "121.42154768226726",
        },
        name: "TM",
        img: "./assets/img/wooden.png"
    },
];

window.onload = () => {
    const scene = document.querySelector('a-scene');

    return navigator.geolocation.getCurrentPosition(function (position) {
        places.forEach((place) => {
            const latitude = place.location.lat;
            const longitude = place.location.lng;

            // const placeText = document.createElement('a-link');
            // placeText.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude};`);
            // placeText.setAttribute('title', place.name);
            // placeText.setAttribute('scale', '15 15 15');

            const placeText = document.createElement('a-box');
            placeText.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude};`);
            placeText.setAttribute('src', place.img);
            placeText.setAttribute('position', "0 0 -4");
            placeText.setAttribute('rotation', "0 45 45");
            placeText.setAttribute('scale', "1 1 1");
            placeText.setAttribute('animation', "property: rotation;from: 0 0 0; to: 0 360 0; dir: normal; dur: 20000; loop: true;easing:linear");
            placeText.setAttribute('animation__2', "property: object3D.position.y; to: 0.3; dir: alternate; dur: 2000; loop: true");
            placeText.setAttribute('animation__3', "property: rotation;startEvents: click;; to: 0 420 420; dir: alternate; dur: 2500; easing:easeOutCubic;");
            placeText.setAttribute('animation__4', "property: scale;startEvents: click; to: 0 0 0; dir: alternate;  dur: 500; easing:linear;delay: 1000");
            placeText.setAttribute('animation__5', "property: rotation;startEvents: mouseleave; to: 0 360 0; dir: normal; dur: 20000; loop: true;easing:linear");

            placeText.addEventListener('loaded', () => {
                window.dispatchEvent(new CustomEvent('gps-entity-place-loaded'))
            });

            scene.appendChild(placeText);
        });

    },

    );
};
