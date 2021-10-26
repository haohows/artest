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
        lat: "25.035050308213247",
        lng: "121.43170121737388",
        name: "1號"
    },
    {
        lat: "25.035205841744904",
        lng: "121.43149736950528",
        name: "2號"
    },
    {
        lat: "25.035338288112488",
        lng: "121.4314946872965",
        name: "3號"
    },
    {
        lat: "25.03548410046189",
        lng: "121.4315764946648",
        name: "4號"
    },
    {
        lat: "25.035284823540945",
        lng: "121.43182594008293",
        name: "5號"
    },
    {
        lat: "25.035176679222726",
        lng: "121.43174010940142",
        name: "6號"
    }
];


window.onload = () => {
    const scene = document.querySelector('a-scene');

    // first get current user location
    // return navigator.geolocation.getCurrentPosition(function (position) {

    // than use it to load from remote APIs some places nearby
    // loadPlaces(position.coords)
    // .then((places) => {
    places.forEach((place) => {
        const latitude = place.lat;
        const longitude = place.lng;

        // add place name
        const placeText = document.createElement('a-link');
        placeText.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude};`);
        placeText.setAttribute('title', place.name);
        placeText.setAttribute('scale', '15 15 15');

        placeText.addEventListener('loaded', () => {
            window.dispatchEvent(new CustomEvent('gps-entity-place-loaded'))
        });

        scene.appendChild(placeText);
    });
    // })
    // },
    // (err) => console.error('Error in retrieving position', err),
    // {
    //     enableHighAccuracy: true,
    //     maximumAge: 0,
    //     timeout: 27000,
    // }
    // );
};