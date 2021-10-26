// getting places from APIs
// function loadPlaces(position) {
//     const params = {
//         radius: 300,    // search places not farther than this value (in meters)
//         clientId: '<YOUR-CLIENT-ID>',
//         clientSecret: 'YOUR-CLIENT-SECRET',
//         version: '20300101',    // foursquare versioning, required but unuseful for this demo
//     };

//     // CORS Proxy to avoid CORS problems
//     const corsProxy = 'https://cors-anywhere.herokuapp.com/';

//     // Foursquare API (limit param: number of maximum places to fetch)
//     const endpoint = `${corsProxy}https://api.foursquare.com/v2/venues/search?intent=checkin
//         &ll=${position.latitude},${position.longitude}
//         &radius=${params.radius}
//         &client_id=${params.clientId}
//         &client_secret=${params.clientSecret}
//         &limit=30 
//         &v=${params.version}`;
//     return fetch(endpoint)
//         .then((res) => {
//             return res.json()
//                 .then((resp) => {
//                     return resp.response.venues;
//                 })
//         })
//         .catch((err) => {
//             console.error('Error with places API', err);
//         })
// };
let places = [
    {
        // 25.038155722612128, 121.42192321065698
        location: {
            lat: "25.038155722612128",
            lng: "121.42192321065698",
        },
        name: "南面"
    },
    {
        // 25.038698728406267, 121.4218454497278
        location: {
            lat: "25.038698728406267",
            lng: "121.4218454497278",
        },
        name: "北面"
    },
    {
        // 25.038324123400365, 121.42251495236201
        location: {
            lat: "25.038324123400365",
            lng: "121.42251495236201",
        },
        name: "東面"
    },
    {
        // 25.038456438143236, 121.42154768226726
        location: {
            lat: "25.038456438143236",
            lng: "121.42154768226726",
        },
        name: "西面"
    }
];

window.onload = () => {
    const scene = document.querySelector('a-scene');

    // first get current user location
    return navigator.geolocation.getCurrentPosition(function (position) {

        // than use it to load from remote APIs some places nearby
        // loadPlaces(position.coords)
        // .then((places) => {
        places.forEach((place) => {
            const latitude = place.location.lat;
            const longitude = place.location.lng;

            // add place name
            const placeText = document.createElement('a-link');
            placeText.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude};`);
            placeText.setAttribute('title', place.name);
            placeText.setAttribute('scale', '5 5 5');

            placeText.addEventListener('loaded', () => {
                window.dispatchEvent(new CustomEvent('gps-entity-place-loaded'))
            });

            scene.appendChild(placeText);
        });
        // })
    },
        // (err) => console.error('Error in retrieving position', err),
        // {
        //     enableHighAccuracy: true,
        //     maximumAge: 0,
        //     timeout: 27000,
        // }
    );
};